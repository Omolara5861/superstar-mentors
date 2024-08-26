import Image from "next/image";
import * as React from "react";
import Button from "../button/Button";

function NewsLetter() {
  return (
    <div className="flex flex-col items-center pt-5 pb-2 leading-snug bg-background text-subtext">
      <div className="flex flex-col text-center">
        <h2>
          Join Our Newsletter
        </h2>
        <p className="mt-2">
          Subscribe to our newsletter to receive the latest update
        </p>
      </div>
      <div className="flex gap-2 items-end mt-5 lg:w-[794px] md:w-[694px] w-100">
        <div className="flex flex-col w-4/5">
          <div className="text-sm text-text font-medium tracking-normal uppercase mb-1">
            Email
          </div>
          <input type="text" placeholder="Enter Email Address"
            className="outline-none text-text rounded-lg py-3 px-4 bg-transparent border border-[#01100A80]" />
        </div>
        <Button href='' btnText='Submit' width="168px"/>
      </div>
      <Image
        alt="Decoration Image"
        width={1440}
        height={100}
        src="/deco1.png"
        className="object-contain self-stretch mt-3.5 w-full"
      />
    </div>
  );
}

export default NewsLetter;