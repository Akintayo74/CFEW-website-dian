import React from 'react';
import * as Dialog from "@radix-ui/react-dialog";
import { X } from 'lucide-react';

function ContactUsModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild >
        <button className="inline-flex h-[35px] items-center justify-center leading-none text-white hover:text-cfew-primary-400 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-500">
          Contact Us
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        {/* <Dialog.Overlay className="fixed inset-0 bg-black/40 data-[state=open]:animate-overlayShow" /> */}
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" /> 
        {/* <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-red-400 p-[25px] shadow-lg focus:outline-none data-[state=open]:animate-contentShow"> */}
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-red-400 p-[25px] shadow-lg focus:outline-none z-50">
          <Dialog.Title className="m-0 text-[17px] font-medium text-gray-900">
            Contact Info
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-gray-600">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="w-[90px] text-right text-[15px] text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-gray-900 border border-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              id="name"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="w-[90px] text-right text-[15px] text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-gray-900 border border-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              id="username"
              defaultValue="@peduarte"
            />
          </fieldset>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button className="inline-flex h-[35px] items-center justify-center rounded bg-green-600 px-[15px] font-medium leading-none text-white hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-green-500">
                Save changes
              </button>
            </Dialog.Close>
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