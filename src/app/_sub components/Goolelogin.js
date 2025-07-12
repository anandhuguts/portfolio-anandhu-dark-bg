"use client";

import { signIn, signOut } from "next-auth/react";
import { useState, useTransition } from "react";
import { submitFeedback } from "../feedback/action";

function Goolelogin({ session, setCommentList }) {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const messageData = {
  //     message,
  //     name: session?.user?.name,
  //     email: session?.user?.email,
  //     image: session?.user?.image,
  //   };
  //   setIsSubmitting(true);

  //   const res = await fetch("/api/feedback", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(messageData),
  //   });

  //   const data = await res.json();
  //   if (data.success) {
  //     setMessage("");
  //     alert("Feedback saved ✅");
  //   } else {
  //     alert("Failed: " + data.error);
  //   }
  //   setIsSubmitting(false);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    const payload = {
      message,
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
    };

    startTransition(async () => {
      try {
        const res = await submitFeedback(payload);
        if (res.success) {
          setMessage("");

          setCommentList((prev) => [res.feedback, ...prev]);
        } else {
          alert("Failed to submit feedback.");
        }
      } catch (error) {
        console.error(error);
        alert("Something went wrong.");
      }
    });
  };

  if (session) {
    return (
      <form
        onSubmit={handleSubmit}
        className="relative w-full  min-h-[146px] bg-[#181818] border border-[#454545] rounded-xl p-5 flex flex-col"
      >
        <textarea
          name="thoughts"
          maxLength={300}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-full placeholder:text-secondary focus:outline-none resize-none"
          placeholder="Type your comment..."
        ></textarea>
        <button
          disabled={isPending}
          className="absolute right-0 bottom-0 mb-4 mr-4 pb-2 pt-2 pl-4 pr-4 bg-primary rounded-[9px] text-black"
          type="submit"
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-secondary text-[18px] max-[428px]:text-[16.5px]  font-normal mt-2 text-center">
        Sign in with Google to share your thoughts
      </p>
      <button
        onClick={() => signIn("google")}
        className="bg-primary text-[#0A0A0A] text-[18px] px-6 py-3 rounded-lg hover:bg-[#454545] transition-colors flex items-center gap-2 mt-4"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1017_107)">
            <path
              d="M5.92232 0.55913C4.22376 1.14838 2.75892 2.26679 1.74297 3.75009C0.727015 5.23338 0.213499 7.00338 0.277848 8.8001C0.342197 10.5968 0.981019 12.3255 2.10048 13.7324C3.21994 15.1392 4.76104 16.1499 6.4974 16.6162C7.90511 16.9794 9.37998 16.9953 10.7952 16.6626C12.0773 16.3747 13.2626 15.7587 14.2351 14.875C15.2472 13.9272 15.9819 12.7214 16.3601 11.3873C16.7711 9.93658 16.8443 8.41092 16.5739 6.92749H8.66889V10.2066H13.2469C13.1554 10.7296 12.9594 11.2288 12.6705 11.6743C12.3816 12.1197 12.0057 12.5023 11.5655 12.7991C11.0065 13.1689 10.3763 13.4177 9.71545 13.5296C9.05264 13.6528 8.37279 13.6528 7.70998 13.5296C7.0382 13.3907 6.4027 13.1134 5.84396 12.7155C4.94635 12.0801 4.27236 11.1774 3.91818 10.1362C3.55801 9.07559 3.55801 7.92572 3.91818 6.86507C4.1703 6.1216 4.58707 5.44469 5.1374 4.88483C5.76719 4.23239 6.56451 3.76602 7.44191 3.53689C8.3193 3.30776 9.24285 3.32473 10.1112 3.58593C10.7896 3.79417 11.4099 4.158 11.9228 4.64843C12.439 4.13489 12.9543 3.62002 13.4687 3.10382C13.7344 2.82624 14.0239 2.56194 14.2855 2.27772C13.5027 1.54922 12.5838 0.982347 11.5815 0.609599C9.75623 -0.0531486 7.75909 -0.0709594 5.92232 0.55913Z"
              fill="white"
            />
            <path
              d="M5.92176 0.559135C7.75837 -0.071383 9.75551 -0.0540411 11.5809 0.608276C12.5834 0.983556 13.5019 1.55315 14.2836 2.28437C14.018 2.56859 13.7378 2.83421 13.4668 3.11046C12.9515 3.62489 12.4367 4.13755 11.9222 4.64843C11.4094 4.15801 10.789 3.79417 10.1107 3.58593C9.24257 3.32381 8.31905 3.30587 7.44142 3.53406C6.5638 3.76225 5.76598 4.22776 5.13551 4.87953C4.58518 5.43938 4.1684 6.1163 3.91629 6.85976L1.16309 4.72812C2.14857 2.77386 3.85486 1.27901 5.92176 0.559135Z"
              fill="#E33629"
            />
            <path
              d="M0.433238 6.83984C0.58122 6.10644 0.8269 5.3962 1.16371 4.72812L3.91691 6.86507C3.55674 7.92572 3.55674 9.0756 3.91691 10.1362C2.99962 10.8446 2.08188 11.5565 1.16371 12.2719C0.320548 10.5935 0.063399 8.68129 0.433238 6.83984Z"
              fill="#F8BD00"
            />
            <path
              d="M8.66856 6.92618H16.5736C16.844 8.4096 16.7708 9.93527 16.3597 11.386C15.9815 12.7201 15.2469 13.9259 14.2347 14.8737C13.3462 14.1804 12.4537 13.4924 11.5652 12.7991C12.0057 12.502 12.3817 12.119 12.6706 11.6731C12.9595 11.2271 13.1554 10.7275 13.2466 10.204H8.66856C8.66723 9.11227 8.66856 8.01922 8.66856 6.92618Z"
              fill="#587DBD"
            />
            <path
              d="M1.16211 12.2719C2.08029 11.5636 2.99802 10.8517 3.91531 10.1363C4.2702 11.1778 4.94515 12.0805 5.84375 12.7155C6.40423 13.1116 7.0411 13.3866 7.71375 13.523C8.37656 13.6462 9.05641 13.6462 9.71922 13.523C10.3801 13.4111 11.0103 13.1623 11.5693 12.7925C12.4578 13.4858 13.3503 14.1738 14.2388 14.867C13.2665 15.7512 12.0812 16.3677 10.799 16.656C9.38375 16.9887 7.90888 16.9728 6.50117 16.6095C5.38781 16.3123 4.34785 15.7882 3.44648 15.0702C2.49244 14.3128 1.71322 13.3583 1.16211 12.2719Z"
              fill="#319F43"
            />
          </g>
          <defs>
            <clipPath id="clip0_1017_107">
              <rect width="17" height="17" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Sign in with Google
      </button>
    </div>
  );
}

export default Goolelogin;
