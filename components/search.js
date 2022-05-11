import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
export default function Search() {
  return (
    <div className="">
      <div className=" flex m-3 text-xs">
        <div className=" place-self-center">
          <span className=" text-2xl font-bold">Place List</span>
        </div>
        <div className="lg:block hidden">
          <div className="flex ">
            <div className="flex items-center justify-between border-blue-600 text-gray-400 border rounded-3xl p-3 m-4 w-36 ">
              <div className="">
                <button className="">Restaurent</button>
              </div>

              <div className="">
                <IoMdArrowDropdown />
              </div>
            </div>
            <div className=" w-0.5 h-8 place-self-center bg-blue-900"></div>
            <div className="flex items-center justify-between border-blue-600 text-gray-400 border rounded-full p-3 m-4 w-60">
              <button className=" ">Search name... </button>
              <IoSearchOutline />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
      <div className=" text-xs">
            <div className="flex items-center justify-between border-blue-600 text-gray-400 border rounded-3xl p-2 mb-2 ">
              <div className="">
                <button className="">Restaurent</button>
              </div>

              <div className="">
                <IoMdArrowDropdown />
              </div>
            </div>
            <div className="flex items-center justify-between border-blue-600 text-gray-400 border rounded-full p-2">
              <button className=" ">Search name... </button>
              <IoSearchOutline />
            </div>
          </div>
      </div>
    </div>
  );
}
