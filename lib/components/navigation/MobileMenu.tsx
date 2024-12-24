import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface MobileMenuComponentProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MobileMenuComponent = ({ open, setOpen }: MobileMenuComponentProps) => {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 z-40 flex">
        <DialogPanel
          transition
          className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
        >
          <div className="flex px-4 pb-2 pt-5">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Links */}
          {/* <TabGroup className="mt-2">
            <div className="border-b border-gray-200">
              <TabList className="-mb-px flex space-x-8 px-4">
                {navigation.menus.map((menu) => (
                  <Tab
                    key={category.name}
                    className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-primary-600 data-[selected]:text-primary-600"
                  >
                    {category.name}
                  </Tab>
                ))}
              </TabList>
            </div>
            <TabPanels as={Fragment}>
              {navigation.categories.map((category) => (
                <TabPanel key={category.name} className="space-y-12 px-4 py-6">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                    {category.featured.map((item) => (
                      <div key={item.name} className="group relative">
                        <img
                          alt={item.imageAlt}
                          src={item.imageSrc}
                          className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                        />
                        <a
                          href={item.href}
                          className="mt-6 block text-sm font-medium text-gray-900"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 z-10"
                          />
                          {item.name}
                        </a>
                        <p
                          aria-hidden="true"
                          className="mt-1 text-sm text-gray-500"
                        >
                          Shop now
                        </p>
                      </div>
                    ))}
                  </div>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup> */}

          {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            {navigation.pages.map((page) => (
              <div key={page.name} className="flow-root">
                <a
                  href={page.href}
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  {page.name}
                </a>
              </div>
            ))}
          </div> */}

          <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            <div className="flow-root">
              <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                Create an account
              </a>
            </div>
            <div className="flow-root">
              <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                Sign in
              </a>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default MobileMenuComponent;
