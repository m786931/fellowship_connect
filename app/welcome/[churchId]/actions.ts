'use server';

import { connectSchema } from '../../schemas/connect';
import { ConnectCard, ConnectFormState } from '../../types';
import { convertZodErrors } from '../../utils/forms';
import { checkChurchId, createRow} from './dbInsertCard-action';

export const formHandlerAction = async (
  prevState: ConnectFormState<ConnectCard>,
  formData: FormData
): Promise<ConnectFormState<ConnectCard>> => {
  //uncomment to easily view loading state in submit button
  //await sleep(1000);

  const unvalidatedData: ConnectCard = {
    churchId: formData.get('hdnChurchId') as string,
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
    streetAddress: formData.get('streetAddress') as string,
    city: formData.get('city') as string,
    state: formData.get('state') as string,
    zip: formData.get('zip') as string,
    phone: formData.get('phone') as string,
    firstTime: formData.get('firstTime') === 'on',
    comment: formData.get('comment') == null ? '' : formData.get('comment') as string,
    callMe: formData.get('callMe') === 'on'
  };
  console.log("Unvalidated: " + unvalidatedData.callMe);
  const validated = connectSchema.safeParse(unvalidatedData);
  console.log(validated);
  if (!validated.success) {
    const errors = convertZodErrors(validated.error);
    console.log("Errors on validation");
    console.log(validated.error)
    
    return {
      errors,
      data: unvalidatedData,
    };
  } else {
    console.log("Successful validation");
    const card : ConnectCard = { ...validated.data };
    await checkChurchId().then(() => createRow(card))
    //redirect('/')
    return {
      // save to DB
      successMsg: 'Connection added successfully!', 
      errors: {},
      data: { churchId:'',  firstName:'', lastName:'', firstTime:false, callMe:false }
    };
  }
};
