"use client";
import Goolelogin from "../_sub components/Goolelogin";

import CommentList from "../_sub components/CommentList";
import { useState } from "react";
import Spinner from "../_sub components/Spinner";

function FeedbackComp({ session, comments }) {
  const [commentLIst, setCommentList] = useState(comments);
  return (
    <div className="mx-auto flex flex-col">
      <div className="w-full max-w-[642px] mx-auto mt-8">
        <Goolelogin session={session} setCommentList={setCommentList} />
        <div className="w-full h-[1px] bg-[#454545] mt-11 "></div>
        <CommentList feedbackList={commentLIst} />
      </div>
    </div>
  );
}

export default FeedbackComp;
