import { VscBellDot } from "react-icons/vsc";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
export default function Top() {
  return (
    <div className="">
      <nav className="">
        <div className="bg-[#134B8A] ">
          <div className=" text-white ">
            <div className=" flex flex-row-reverse place-items-center ">
              <div className="lg:block hidden">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between  text-sm font-medium text-left lg:mr-10 sm:mr-10">
                      <span className="">James GD</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 fill-white`}
                      />
                    </Disclosure.Button>
                  </>
                )}
              </Disclosure>
              </div>
              
              <div className="mr-2 mt-2 ">
                <Image
                  src="/images/imgprofile.png"
                  alt=""
                  width={20}
                  height={20}
                  className=""
                />
              </div>
              <button className="text-xs mr-2 fill-white lg:block hidden">
                <VscBellDot size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
