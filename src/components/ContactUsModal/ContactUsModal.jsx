import React from 'react';
import * as Dialog from "@radix-ui/react-dialog";
import { X } from 'lucide-react';
import CopyButton from '../CopyButton/CopyButton';

function ContactUsModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild >
        <button className="inline-flex h-[35px] items-center justify-center leading-none text-white hover:text-cfew-primary-400 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-500">
          Contact Us
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" /> 
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-cfew-primary-50 px-[25px] py-20 shadow-lg focus:outline-none z-50 flex flex-col items-center">
          <Dialog.Title className="m-0 mb-10 text-4xl font-bold text-gray-900 text-center">
            Contact Info
          </Dialog.Title>

          <div className='flex flex-col text-cfew-dark text-sm leading-relaxed md:text-base lg:text-lg gap-6 items-center'>
            <div className='flex flex-col gap-2 items-center'>
              <h5 className='text-cfew-primary-900 leading-none font-bold'>24/7 Support Line</h5>
              <CopyButton text='+2347062249235'   />
            </div>

            <div className='flex flex-col gap-2 items-center'>
              <h5 className='text-cfew-primary-900 leading-none font-bold'>Email</h5>
              <CopyButton text='cearthwork@gmail.com'   />
            </div>

            <div className='flex flex-col gap-2 items-center'>
              <h5 className='text-cfew-primary-900 leading-none font-bold'>Address</h5>
              <p className='max-w-[366px] text-center'>
                No.3 Old Nitel Building, Old Airport Road Jos Plateau State, Nigeria
              </p>
            </div>
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-gray-500 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 focus:outline-none"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ContactUsModal;