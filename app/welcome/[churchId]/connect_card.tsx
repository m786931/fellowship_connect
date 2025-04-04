'use client';
import { ConnectCard, ConnectFormState } from '../../types';
import { useActionState, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import SubmitButton from '@/app/components/SubmitButton';
import { formHandlerAction } from './actions';
//import { StringMap } from '../../types'
import { useParams } from 'next/navigation';

import { IoIosPeople } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";

const initialState: ConnectFormState<ConnectCard> = {};

export function Connect_Card() {
  // useActionState is available with React 19 (Next.js App Router)
  const [serverState, formAction] = useActionState(
    formHandlerAction,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);  
  const [showTextArea, setShowTextArea] = useState(false);
  const params = useParams();
  const churchId = params.churchId;

  console.log("this is the church id: " + churchId);

  useEffect(() => {
    if (serverState.successMsg) {
      toast.success(serverState.successMsg);
      formRef.current?.reset();
    }
  }, [serverState]);
console.log("ServerState: " + serverState.successMsg)
    useEffect(() => {
        if (showTextArea && inputRef.current) {
                inputRef?.current?.focus();
        }
    });
  
    const checkHandler = () => {
        setShowTextArea(!showTextArea);
    };
  
  return (
    <div className='pt-20 px-3'>
      <form action={formAction} ref={formRef} className="max-w mx-auto p-1 md:p-20 bg-white rounded-lg shadow-md">
        <div className="flex flex-col gap-y-2">
          <div>
            <div className="flex flex-row gap-x-4">
              <div><IoIosPeople className="w-7 h-7" /></div>
              <div><label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              </div>
            </div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder='First Name'
              required={true}
              defaultValue={serverState.data?.firstName}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="min-h-8">
              {serverState.errors?.firstName && (
                <small className="text-red-400">{serverState.errors.firstName}</small>
              )}
            </div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder='Last Name'
              required={true}
              defaultValue={serverState.data?.lastName}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="min-h-8">
              {serverState.errors?.lastName && (
                <small className="text-red-400">{serverState.errors.lastName}</small>
              )}
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-x-4">
              <div><MdEmail className="w-7 h-7" /></div>
              <div><label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label></div></div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              required={false}
              defaultValue={serverState.data?.email}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="h-8">
              {serverState.errors?.email && (
                <small className="text-red-400">{serverState.errors.email}</small>
              )}
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-x-4">
              <div><BsHouseFill className="w-7 h-7" /> </div>
              <div><label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label></div></div>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              placeholder='Street Address'
              required={false}
              defaultValue={serverState.data?.streetAddress}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="h-8">
              {serverState.errors?.streetAddress && (
                <small className="text-red-400">{serverState.errors.streetAddress}</small>
              )}
            </div>
            <input
              type="text"
              id="city"
              name="city"
              placeholder='City'
              required={false}
              defaultValue={serverState.data?.city}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="h-8">
              {serverState.errors?.city && (
                <small className="text-red-400">{serverState.errors.city}</small>
              )}
            </div>
            <input
              type="text"
              id="state"
              name="state"
              placeholder='State'
              required={false}
              defaultValue={serverState.data?.state}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="h-8">
              {serverState.errors?.state && (
                <small className="text-red-400">{serverState.errors.state}</small>
              )}
            </div>
            <input
              type="text"
              id="zip"
              name="zip"
              placeholder='ZipCode'
              required={false}
              defaultValue={serverState.data?.zip}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="h-8">
              {serverState.errors?.zip && (
                <small className="text-red-400">{serverState.errors.zip}</small>
              )}
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-x-4">
              <div><FaPhoneVolume className="w-7 h-7" /> </div>
              <div><label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label></div></div>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder='999-999-9999'
              required={false}
              defaultValue={serverState.data?.phone}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="h-8">
              {serverState.errors?.phone && (
                <small className="text-red-400">{serverState.errors.phone}</small>
              )}
            </div>
          </div>
          <div className="h-20 bg-gray-400 flex items-center justify-left w-full">
            <input 
            type="checkbox" 
            id="firstTime" 
            name="firstTime"
            checked={serverState.data?.firstTime}
            className="scale-150 ml-2 gap-4" />
            <span className="text-white ml-4 text-center justify-center">FIRST TIME GUESS</span>
          </div>

          <div className="h-20 bg-blue-200 flex items-center justify-left w-full">
            <input 
            type="checkbox" 
            id="chkComment" 
            name="chkComment"
            onChange={checkHandler}
            className="scale-150 ml-2 gap-4"/>
            <span className="text-white ml-4 text-center justify-center">QUESTION, COMMENT OR PRAYER</span>
          </div> 
        {showTextArea && (
                <div className="h-40 flex flex-col expanded-content">
                    <textarea className='h-40' ref={inputRef} id="comment" name="comment" placeholder="Enter your question, comment or prayer request here"></textarea>
                </div>
            )}   
        <div className="h-20 bg-blue-400 mb-4 flex items-center justify-left w-full">
            <input 
            type="checkbox" 
            id="callMe"
            name="callMe"
            className="scale-150 ml-2 gap-4"/>
            <span className="text-white ml-4 text-center justify-center">I WOULD LIKE TO TALK TO THE PASTOR</span>
        </div>   
        <input
        type="hidden"
        name="hdnChurchId"
        id="hdnChurchId"
        value={churchId}
        />
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
