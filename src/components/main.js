/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import send from '../images/send.png'
import buy from '../images/buy.png'
import get from '../images/get.png'
import swap from '../images/swap.png'

export default function Example() {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            
              <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
           
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              1
            </a>
            
          </nav>
                <div class="px-16 grid grid-cols-4 gap-4">
                    <div className='z-10 bg-indigo-600  relative inline-flex items-center px-3 py-4 mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-1/2'><img class='' src={send} /></div>
                    <div className='z-10 bg-indigo-600  relative inline-flex items-center px-3 py-4 mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-1/2'><img class='' src={buy} /></div>
                    <div className='z-10 bg-indigo-600  relative inline-flex items-center px-3 py-4 mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-1/2'><img class='' src={get} /></div>
                    <div className='z-10 bg-indigo-600  relative inline-flex items-center px-3 py-4 mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-1/2'><img class='' src={swap} /></div>
                    </div>
                <div class="flex flex-row">
                    <div class="basis-1/4">01</div>
                    <div class="basis-1/4">02</div>
                    <div class="basis-1/4">03</div>
                    <div class="basis-1/4">03</div>
                    </div>
                  <div className="sm:flex sm:items-start">
                    
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Deactivate account
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All of your data will be permanently
                          removed. This action cannot be undone.
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All of your data will be permanently
                          removed. This action cannot be undone.
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All of your data will be permanently
                          removed. This action cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  
                </div>
              </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
