"use client";
import Goolelogin from "../_sub components/Goolelogin";

import CommentList from "../_sub components/CommentList";
import { useState } from "react";

function Feedback({ session, comments }) {
  const [commentLIst, setCommentList] = useState(comments);

  return (
    <section className="w-full font-outfit text-primary px-5 sm:pb-40 pb-17">
      <div className="mx-auto flex flex-col">
        <h2 className="text-center font-semibold sm:text-[48px] text-[42px] max-[428px]:text-[16.5px]">
          Share Your Thoughts
        </h2>
        <p className="text-secondary text-[18px] max-[428px]:text-[16.5px]  font-normal mt-2 text-center">
          Have suggestions, feedback, or just want to say hello? Drop your
          message below — I&apos;d love to hear from you!
        </p>
        <div className="w-full max-w-[642px] mx-auto mt-8">
          <Goolelogin session={session} setCommentList={setCommentList} />
          <div className="w-full h-[1px] bg-[#454545] mt-11 "></div>
          <CommentList feedbackList={commentLIst} />
        </div>
      </div>
    </section>
  );
}

export default Feedback;
