import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'


export default function Modal({isOpen, setIsOpen,title,children}) {


 

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-green-900 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
              {title}
              </DialogTitle>
             {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
