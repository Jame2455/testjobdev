/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function Nav() {
  return (
    <div className=" text-center m-4">
      <nav className="inline-flex space-x-4">
        <a
          href="#"
          className=" items-center px-2 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="z-10 text-white rounded-full border-indigo-500 bg-indigo-600 relative  items-center px-4 py-2 border text-sm font-medium"
        >
          1
        </a>

        <a
          href="#"
          className="  items-center px-2 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </a>
      </nav>
    </div>
  );
}
