import Image from "next/image";
import Stack from "./Stack";

function Photofeed() {
  return (
    <div className="relative max-[865px]:max-w-full w-full max-w-[482px] h-[538px] border border-[#363636]  rounded-2xl  overflow-hidden bg-gradient-to-br from-[#1f1f1f] to-[#000000]">
      <div className="w-full max-w-[303px] mt-5 ml-5">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_184_604)">
            <path
              d="M27.5317 16.3415C27.6 15.0245 27.6098 13.5123 27.6098 12.1171V8.66348C28.0066 8.62871 28.3989 8.55353 28.7805 8.43909C30.4 8.11713 30.7317 6.48787 30.7317 5.26835C30.7317 4.04884 30.4293 2.41957 28.7805 2.09762C25.8799 1.61271 22.9402 1.4004 20 1.46348C17.0598 1.40097 14.1202 1.61328 11.2195 2.09762C9.6 2.41957 9.2683 4.04884 9.2683 5.26835C9.2683 6.48787 9.57074 8.11713 11.2195 8.43909C11.5994 8.55226 11.9863 8.62705 12.3805 8.66348C12.3805 9.78543 12.3317 10.9952 12.3317 12.1171C12.3317 13.5123 12.3317 15.044 12.4195 16.3513C7.07317 21.4635 1.62927 29.561 1.62927 33.522C1.62927 35.5806 2.1561 38.3123 4.9561 38.8488C6.35122 39.3757 13.8244 39.5123 20.0098 39.5123C26.1951 39.5123 33.6683 39.3757 35.0439 38.8488C37.8439 38.3123 38.3707 35.5806 38.3707 33.522C38.3707 29.561 32.9268 21.4635 27.5317 16.3415Z"
              fill="#48EEFF"
              stroke="#231F20"
              strokeMiterlimit="10"
            />
            <path
              d="M13.4439 22.605C10.6244 25.3659 8.18536 28.9562 8.18536 30.8391C8.18536 32.0196 8.52683 33.5806 10.3219 33.883C11.2293 34.1855 16.0293 34.2635 20 34.2635C23.9707 34.2635 28.7805 34.1855 29.678 33.883C31.4732 33.5806 31.8146 32.0196 31.8146 30.8391C31.8146 28.9562 29.3854 25.405 26.5659 22.5952L13.4439 22.605Z"
              fill="#FFE236"
              stroke="#231F20"
              strokeMiterlimit="10"
            />
            <path
              d="M15.8829 8.84863C18.6283 9.034 21.3824 9.034 24.1268 8.84863M21.3171 13.2194C22.2537 13.2877 23.1903 13.2877 24.1268 13.2194M21.3171 17.1608C22.2537 17.2194 23.1903 17.2194 24.1268 17.1608"
              stroke="#231F20"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M21.3171 26.3903C21.3171 26.737 21.4548 27.0696 21.7 27.3147C21.9452 27.5599 22.2777 27.6976 22.6244 27.6976C22.9711 27.6976 23.3036 27.5599 23.5488 27.3147C23.794 27.0696 23.9317 26.737 23.9317 26.3903C23.9317 26.0436 23.794 25.7111 23.5488 25.4659C23.3036 25.2207 22.9711 25.083 22.6244 25.083C22.2777 25.083 21.9452 25.2207 21.7 25.4659C21.4548 25.7111 21.3171 26.0436 21.3171 26.3903ZM16.0683 29.0147C16.0683 29.3614 16.206 29.694 16.4512 29.9391C16.6964 30.1843 17.0289 30.322 17.3756 30.322C17.7223 30.322 18.0549 30.1843 18.3 29.9391C18.5452 29.694 18.6829 29.3614 18.6829 29.0147C18.6829 28.668 18.5452 28.3355 18.3 28.0903C18.0549 27.8451 17.7223 27.7074 17.3756 27.7074C17.0289 27.7074 16.6964 27.8451 16.4512 28.0903C16.206 28.3355 16.0683 28.668 16.0683 29.0147Z"
              fill="#231F20"
            />
            <path
              d="M25.2488 4.08789C27.278 4.14643 27.6976 4.39033 27.9024 4.68301"
              stroke="white"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_184_604">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <h3 className="font-semibold text-[20px] mt-3.5">Currently Building</h3>
        <p className="font-normal text-[18px] text-secondary mt-1">
          A collection of ongoing projects where I&apos;m experimenting,
          refining, and expanding my full-stack and design skills.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center px-5 pb-7">
        <Stack sensitivity={180} sendToBackOnClick={false} />
      </div>
    </div>
  );
}

export default Photofeed;
