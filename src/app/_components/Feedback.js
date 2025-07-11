"use client";

import Image from "next/image";
import Goolelogin from "../_sub components/Goolelogin";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";

function Feedback() {
  const [feedbackList, setfeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await fetch("/api/feedback");
        const data = await res.json();

        if (data.success) {
          setfeedbackList(data.data);
        } else {
          console.error("Fetch failed:", data.error);
        }
      } catch (error) {
        console.error("Error fetching feedback:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <SessionProvider>
      <section className="w-full font-outfit text-primary px-5 sm:pb-40 pb-17">
        <div className="mx-auto flex flex-col">
          <h2 className="text-center font-semibold sm:text-[48px] text-[42px] ">
            Share Your Thoughts
          </h2>
          <p className="text-secondary text-[18px] max-[428px]:text-[16.5px]  font-normal mt-2 text-center">
            Have suggestions, feedback, or just want to say hello? Drop your
            message below — I&apos;d love to hear from you!
          </p>
          <div className="w-full max-w-[642px] mx-auto mt-8">
            <Goolelogin />
            <div className="w-full h-[1px] bg-[#454545] mt-11 "></div>
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

                    <p className="text-[15px] leading-relaxed ">
                      {feedback.message}
                    </p>
                  </div>
                  <div className="w-full items-end flex flex-col mt-2">
                    <span className="text-[14px] font-medium">
                      {feedback.name}
                    </span>
                    <span className="text-[12px] text-gray-400">
                      4 days ago
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SessionProvider>
  );
}

export default Feedback;
