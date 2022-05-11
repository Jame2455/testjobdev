import React from "react";
import Image from "next/image";
import { MdCircle } from "react-icons/md";

export default function Restaurent() {
  return (
    <div className="bg-[#C4D3E9] w-screen ">
      <div className="grid grid-cols-2">
        <div className=" col-span-1">
          <div className="m-2 w-fit property-card bg-white">
            <Image
              src="/images/ร้าน2.jpg"
              alt=""
              width={550}
              height={350}
              className=""
            />
            <div className="p-2">
              <div className="flex justify-between">
                <span className="uppercase ">
                  dai lou modern chinese cuisine
                </span>
                <span className="text-blue-900 flex items-center">
                  {" "}
                  <MdCircle className="" />
                  4.5
                </span>
              </div>
              <div className="">
                <span>adddress : </span>
              </div>
              <div>
                <span>opening hour :</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-1">
          <div className="  rounded-lg border-2 border-gray-300 w-72 bg-white m-2">
            <div className="m-2 p-4">
              <p className="">Images</p>
              <div className=" text-center">
                <Image
                  src="/images/fgdsa.jpg"
                  alt=""
                  width={300}
                  height={250}
                  className=" rounded-t-md"
                />
                <Image
                  src="/images/fgdsa.jpg"
                  alt=""
                  width={300}
                  height={250}
                  className=""
                />
                <Image
                  src="/images/fgdsa.jpg"
                  alt=""
                  width={300}
                  height={250}
                  className=" rounded-b-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
