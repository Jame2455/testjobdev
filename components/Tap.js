import React from "react";
import Image from "next/image";

export default function Tap() {
  return (
    <div className="lg:block hidden">
      <div className=" h-screen w-14 z-10 border rounded-r-full shadow-lg bg-white absolute top-0">
        <div className="  mt-8 text-center">
          <Image
            src="/images/imgprofile.png"
            alt=""
            width={30}
            height={30}
            className=""
          />
          <div className=" w-auto h-0.5 place-self-center bg-gray-100"></div>
        </div>
        <div className="mt-2 text-center">
          <button>
            <Image
              src="/images/imgprofile.png"
              alt=""
              width={30}
              height={30}
              className=""
            />
          </button>

          <p className=" text-xs font-bold">place</p>
        </div>
        <div className=" w-full h-0.5 place-self-center bg-gray-100"></div>
      </div>
    </div>
  );
}
