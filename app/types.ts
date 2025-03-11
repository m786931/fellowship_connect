export interface ConnectFormState<T> {
    errors?: StringMap;
    successMsg?: string;
    data?: T;
    blurs?: StringToBooleanMap;
  }
  
  export interface StringMap {
    [key: string]: string;
  }
  
  export interface StringToBooleanMap {
    [key: string]: boolean;
  }

  export interface ConnectCard {
    churchId: string;
    firstName: string;
    lastName: string;
    email?: string;
    streetAddress?: string;
    city?: string;
    state?: string;
    zip?: string;
    phone?: string;
    firstTime: boolean;
    comment?: string;
    callMe: boolean;
  }
  