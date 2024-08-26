import * as React from "react";

function NewsLetter() {
  return (
    <div className="flex flex-col items-center pt-5 pb-8 leading-snug bg-teal-50">
      <div className="flex flex-col max-w-full text-center w-[506px]">
        <div className="text-4xl font-bold tracking-tight text-zinc-950 max-md:max-w-full">
          Join Our Newsletter
        </div>
        <div className="mt-2 text-xl tracking-normal text-neutral-600 max-md:max-w-full">
          Subscribe to our newsletter to receive the latest update
        </div>
      </div>
      <div className="flex flex-wrap gap-2 items-end mt-6 max-md:max-w-full">
        <div className="flex flex-col justify-center min-w-[240px] text-zinc-950 w-[618px] max-md:max-w-full">
          <div className="text-sm font-medium tracking-normal uppercase max-md:max-w-full">
            Email
          </div>
          <div className="flex-1 shrink gap-2.5 self-stretch p-4 mt-2 w-full text-base tracking-normal rounded-lg border border-solid border-zinc-950 border-opacity-50 max-md:max-w-full">
            Enter Email Address
          </div>
        </div>
        <div className="flex-1 shrink gap-2.5 self-stretch px-5 py-4 text-base font-medium tracking-normal text-center text-white whitespace-nowrap bg-emerald-800 rounded-lg w-[168px]">
          Submit
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca072e625faea8f185ecbb4829dcc7adf45d024081139db0fc040c14ce4a10ad?placeholderIfAbsent=true&apiKey=5589e537b6c14e9da606ae41fae20998"
        className="object-contain self-stretch mt-3.5 w-full aspect-[14.49] max-md:max-w-full"
      />
    </div>
  );
}

export default NewsLetter;