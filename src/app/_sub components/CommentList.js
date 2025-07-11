"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { formatDistanceToNow } from "date-fns";

function CommentList({ feedbackList }) {
  return (
    <>
      <div className="text-[18px] flex gap-3 items-center mt-[12px]">
        Comments
        <span className="w-6 h-6 flex items-center justify-center bg-[#0767FF] text-white text-[14px] rounded-full">
          {feedbackList.length}
        </span>
      </div>
      <div className="mt-8 flex flex-col gap-5">
        {feedbackList.map((feedback, index) => (
          <div
            className="bg-[#1a1a1a] relative text-white  rounded-xl p-5 w-full   "
            key={index}
          >
            <div className="flex gap-3 items-start  ">
              <div className=" relative w-[38px] h-[38px] rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={feedback.image}
                  alt="vercel"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-[15px] leading-relaxed ">{feedback.message}</p>
            </div>
            <div className="w-full items-end flex flex-col mt-2">
              <span className="text-[14px] font-medium">{feedback.name}</span>
              <span className="text-[12px] text-gray-400">
                {formatDistanceToNow(new Date(feedback.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CommentList;
