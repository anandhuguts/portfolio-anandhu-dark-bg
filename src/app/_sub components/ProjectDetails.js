"use client";

import Image from "next/image";

import FeatureAccordion from "./Acccordion";

function ProjectDetails({ projectDetails }) {
  const problem = projectDetails.problem;
  const features = projectDetails.keyFeatures;
  const design = projectDetails.designProcess;
  const development = projectDetails.development;
  const challenges = projectDetails.challenges;
  const learned = projectDetails.whatIlearned;

  return (
    <div>
      <div
        className={`w-full max-w-3xl mx-auto  h-[450px] rounded-[41px] p-[2px] bg-[linear-gradient(135deg,rgba(255,255,255,0.9)_0%,rgba(150,150,150,0.3)_100%)]  shadow-xl`}
      >
        <div
          className="w-full h-full  border-15 border-[#121212] bg-cover rounded-[41px]  bg-center bg-no-repeat  flex flex-col  "
          style={{
            backgroundImage: `url('${projectDetails.image}')`,
          }}
        ></div>
      </div>
      <div className="mt-10">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-[32px] font-bold">{projectDetails.title}</h1>
          <div className="flex items-center gap-5 ">
            <a
              href={`${projectDetails.website ? projectDetails.website : ""}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                className={` bg-primary cursor-pointer text-[16px]  flex items-center px-5 text-black py-2 rounded-full gap-2.5 `}
              >
                Visit Project
                <svg
                  className="text-white"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.39872 2.59873C9.61125 2.38626 9.89946 2.26691 10.2 2.26691C10.5005 2.26691 10.7887 2.38626 11.0012 2.59873L16.1012 7.69873C16.3137 7.91126 16.4331 8.19948 16.4331 8.5C16.4331 8.80052 16.3137 9.08873 16.1012 9.30127L11.0012 14.4013C10.7875 14.6077 10.5012 14.7219 10.2041 14.7194C9.90691 14.7168 9.62265 14.5976 9.41252 14.3875C9.20239 14.1773 9.0832 13.8931 9.08062 13.5959C9.07804 13.2988 9.19227 13.0125 9.39872 12.7987L12.4666 9.63333H1.69998C1.3994 9.63333 1.11114 9.51393 0.898596 9.30139C0.686055 9.08884 0.56665 8.80058 0.56665 8.5C0.56665 8.19942 0.686055 7.91115 0.898596 7.69861C1.11114 7.48607 1.3994 7.36667 1.69998 7.36667H12.4666L9.39872 4.20126C9.18625 3.98873 9.06689 3.70052 9.06689 3.4C9.06689 3.09948 9.18625 2.81126 9.39872 2.59873Z"
                    fill="black"
                  />
                </svg>
              </button>
            </a>
            <div className="flex items-center gap-3">
              <a
                href={`${projectDetails.figma ? projectDetails.figma : ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="relative w-[30px] h-[30px]">
                  <Image
                    src="/figma logo.svg" // Make sure it's in the `public` folder
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>

              <a
                href={`${projectDetails.website ? projectDetails.website : ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="relative w-[30px] h-[30px]">
                  <Image
                    src="/github logo.svg" // Make sure it's in the `public` folder
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <p className="text-secondary font-normal mt-2.5 text-[18px]">
          {projectDetails.description}
        </p>
        <div className="flex flex-wrap  items-center gap-3 mt-7.5">
          {projectDetails.tech.map((tech, index) => (
            <div
              key={index}
              className="  flex py-1.5 px-5 border gap-[8px] rounded-[8px] border-[#454545] bg-[#171717] justify-center items-center"
            >
              <div className=" relative w-[17px] h-[16px]">
                <Image
                  src={tech.icons}
                  alt="vercel"
                  fill
                  className="object-contain "
                />
              </div>
              <p className="font-semibold text-[13px]">{tech.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-11">
          <h2 className="font-bold text-[24px]">
            <span className="text-[32px]">📖</span>Problem & Goal
          </h2>
          <p className="text-secondary font-normal mt-2.5 text-[18px]">
            {problem}
          </p>
        </div>
        <div className="mt-11">
          <h2 className="font-bold text-[24px]">
            <span className="text-[32px]">🔍</span>Key Features
          </h2>
          <div className="mt-5">
            <FeatureAccordion features={features} />
          </div>
        </div>
        <div className="mt-11">
          <h2 className="font-bold text-[24px]">
            <span className="text-[32px]">🎨 </span> Design Process
          </h2>
          <p className="text-secondary font-normal mt-2.5 text-[18px] ">
            {design.processTitile}
          </p>
          <div className="flex flex-col gap-3 pt-5 pb-5 ">
            {design.process.map((item, index) => (
              <h3
                className="font-medium text-secondary text-[18px] "
                key={index}
              >
                <span className="text-primary">{item.title}:&nbsp;&nbsp;</span>
                {item.description}
              </h3>
            ))}
          </div>
          <p className="text-secondary font-normal  text-[18px] ">
            <span className="text-[22px]">✅</span> I followed a user-centered
            design workflow to create a clean, responsive, and scalable
            portfolio.
          </p>
        </div>
        <div className="mt-11">
          <h2 className="font-bold text-[24px]">
            <span className="text-[32px]">💻 </span> Development Highlights
          </h2>
          <div className="flex flex-col gap-3 pt-5  ">
            <h3 className="font-medium text-secondary text-[18px] ">
              <span className="text-primary">Frontend:&nbsp;&nbsp;</span>
              {development.frontend}
            </h3>
            <h3 className="font-medium text-secondary text-[18px] ">
              <span className="text-primary">Stylg:&nbsp;&nbsp;</span>
              {development.styling}
            </h3>
            <h3 className="font-medium text-secondary text-[18px] ">
              <span className="text-primary">
                SEO & Performance:&nbsp;&nbsp;
              </span>
              {development.perfomace}
            </h3>
            <h3 className="font-medium text-secondary text-[18px] ">
              <span className="text-primary">hosting:&nbsp;&nbsp;</span>
              {development.hosting}
            </h3>
          </div>
        </div>
        <div className="mt-11">
          <h2 className="font-bold text-[24px]">
            <span className="text-[32px]">⚙️</span> Challenges & Solutions
          </h2>
          {challenges.map((item, index) => (
            <div key={index}>
              <p className="text-secondary font-normal mt-2.5 text-[18px] ">
                <span className="text-[22px]">🤔</span>
                {item.question}
              </p>
              <p className=" font-normal  text-[18px] ">
                <span className="text-[22px]">✅</span> {item.solution}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-11">
          <h2 className="font-bold text-[24px]">
            <span className="text-[32px]">📚</span> What I Learned
          </h2>
          <div className="flex flex-col gap-3 pt-5 pb-5 ">
            {learned.map((item, index) => (
              <p
                className="flex items-center gap-2 font-normal  text-[18px] "
                key={index}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 11.75L8.67 9.185L11.25 8L8.67 6.83L7.5 4.25L6.3225 6.83L3.75 8L6.3225 9.185L7.5 11.75ZM4.6275 1.07C5.53881 0.694961 6.51454 0.501344 7.5 0.5C8.4825 0.5 9.4575 0.695 10.3725 1.07C11.28 1.445 12.105 2 12.8025 2.6975C13.5 3.395 14.055 4.22 14.43 5.1275C14.805 6.0425 15 7.0175 15 8C15 9.9875 14.2125 11.9 12.8025 13.3025C12.107 14 11.2805 14.5532 10.3705 14.9303C9.46053 15.3074 8.48502 15.501 7.5 15.5C6.51454 15.4987 5.53881 15.305 4.6275 14.93C3.71855 14.5522 2.89285 13.9992 2.1975 13.3025C1.50002 12.607 0.946828 11.7805 0.569712 10.8705C0.192596 9.96053 -0.00101356 8.98501 3.99012e-06 8C3.99012e-06 6.0125 0.787504 4.1 2.1975 2.6975C2.895 2 3.72 1.445 4.6275 1.07ZM3.255 12.245C4.38 13.37 5.91 14 7.5 14C9.09 14 10.62 13.37 11.745 12.245C12.87 11.12 13.5 9.59 13.5 8C13.5 6.41 12.87 4.88 11.745 3.755C11.1874 3.19799 10.5255 2.75631 9.7971 2.45518C9.06873 2.15405 8.28817 1.99938 7.5 2C5.91 2 4.38 2.63 3.255 3.755C2.698 4.31262 2.25631 4.97453 1.95518 5.7029C1.65406 6.43127 1.49938 7.21183 1.5 8C1.5 9.59 2.13 11.12 3.255 12.245Z"
                    fill="#FF32D3"
                  />
                </svg>
                {item}
              </p>
            ))}

            <p className="flex items-center gap-2 font-normal  text-[18px] ">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 11.75L8.67 9.185L11.25 8L8.67 6.83L7.5 4.25L6.3225 6.83L3.75 8L6.3225 9.185L7.5 11.75ZM4.6275 1.07C5.53881 0.694961 6.51454 0.501344 7.5 0.5C8.4825 0.5 9.4575 0.695 10.3725 1.07C11.28 1.445 12.105 2 12.8025 2.6975C13.5 3.395 14.055 4.22 14.43 5.1275C14.805 6.0425 15 7.0175 15 8C15 9.9875 14.2125 11.9 12.8025 13.3025C12.107 14 11.2805 14.5532 10.3705 14.9303C9.46053 15.3074 8.48502 15.501 7.5 15.5C6.51454 15.4987 5.53881 15.305 4.6275 14.93C3.71855 14.5522 2.89285 13.9992 2.1975 13.3025C1.50002 12.607 0.946828 11.7805 0.569712 10.8705C0.192596 9.96053 -0.00101356 8.98501 3.99012e-06 8C3.99012e-06 6.0125 0.787504 4.1 2.1975 2.6975C2.895 2 3.72 1.445 4.6275 1.07ZM3.255 12.245C4.38 13.37 5.91 14 7.5 14C9.09 14 10.62 13.37 11.745 12.245C12.87 11.12 13.5 9.59 13.5 8C13.5 6.41 12.87 4.88 11.745 3.755C11.1874 3.19799 10.5255 2.75631 9.7971 2.45518C9.06873 2.15405 8.28817 1.99938 7.5 2C5.91 2 4.38 2.63 3.255 3.755C2.698 4.31262 2.25631 4.97453 1.95518 5.7029C1.65406 6.43127 1.49938 7.21183 1.5 8C1.5 9.59 2.13 11.12 3.255 12.245Z"
                  fill="#FF32D3"
                />
              </svg>
              I followed a user-centered design workflow to create a clean,
              responsive, and scalable portfolio.
            </p>
            <p className="flex items-center gap-2 font-normal  text-[18px] ">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 11.75L8.67 9.185L11.25 8L8.67 6.83L7.5 4.25L6.3225 6.83L3.75 8L6.3225 9.185L7.5 11.75ZM4.6275 1.07C5.53881 0.694961 6.51454 0.501344 7.5 0.5C8.4825 0.5 9.4575 0.695 10.3725 1.07C11.28 1.445 12.105 2 12.8025 2.6975C13.5 3.395 14.055 4.22 14.43 5.1275C14.805 6.0425 15 7.0175 15 8C15 9.9875 14.2125 11.9 12.8025 13.3025C12.107 14 11.2805 14.5532 10.3705 14.9303C9.46053 15.3074 8.48502 15.501 7.5 15.5C6.51454 15.4987 5.53881 15.305 4.6275 14.93C3.71855 14.5522 2.89285 13.9992 2.1975 13.3025C1.50002 12.607 0.946828 11.7805 0.569712 10.8705C0.192596 9.96053 -0.00101356 8.98501 3.99012e-06 8C3.99012e-06 6.0125 0.787504 4.1 2.1975 2.6975C2.895 2 3.72 1.445 4.6275 1.07ZM3.255 12.245C4.38 13.37 5.91 14 7.5 14C9.09 14 10.62 13.37 11.745 12.245C12.87 11.12 13.5 9.59 13.5 8C13.5 6.41 12.87 4.88 11.745 3.755C11.1874 3.19799 10.5255 2.75631 9.7971 2.45518C9.06873 2.15405 8.28817 1.99938 7.5 2C5.91 2 4.38 2.63 3.255 3.755C2.698 4.31262 2.25631 4.97453 1.95518 5.7029C1.65406 6.43127 1.49938 7.21183 1.5 8C1.5 9.59 2.13 11.12 3.255 12.245Z"
                  fill="#FF32D3"
                />
              </svg>
              I followed a user-centered design workflow to create a clean,
              responsive, and scalable portfolio.
            </p>
            <p className="flex items-center gap-2 font-normal  text-[18px] ">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 11.75L8.67 9.185L11.25 8L8.67 6.83L7.5 4.25L6.3225 6.83L3.75 8L6.3225 9.185L7.5 11.75ZM4.6275 1.07C5.53881 0.694961 6.51454 0.501344 7.5 0.5C8.4825 0.5 9.4575 0.695 10.3725 1.07C11.28 1.445 12.105 2 12.8025 2.6975C13.5 3.395 14.055 4.22 14.43 5.1275C14.805 6.0425 15 7.0175 15 8C15 9.9875 14.2125 11.9 12.8025 13.3025C12.107 14 11.2805 14.5532 10.3705 14.9303C9.46053 15.3074 8.48502 15.501 7.5 15.5C6.51454 15.4987 5.53881 15.305 4.6275 14.93C3.71855 14.5522 2.89285 13.9992 2.1975 13.3025C1.50002 12.607 0.946828 11.7805 0.569712 10.8705C0.192596 9.96053 -0.00101356 8.98501 3.99012e-06 8C3.99012e-06 6.0125 0.787504 4.1 2.1975 2.6975C2.895 2 3.72 1.445 4.6275 1.07ZM3.255 12.245C4.38 13.37 5.91 14 7.5 14C9.09 14 10.62 13.37 11.745 12.245C12.87 11.12 13.5 9.59 13.5 8C13.5 6.41 12.87 4.88 11.745 3.755C11.1874 3.19799 10.5255 2.75631 9.7971 2.45518C9.06873 2.15405 8.28817 1.99938 7.5 2C5.91 2 4.38 2.63 3.255 3.755C2.698 4.31262 2.25631 4.97453 1.95518 5.7029C1.65406 6.43127 1.49938 7.21183 1.5 8C1.5 9.59 2.13 11.12 3.255 12.245Z"
                  fill="#FF32D3"
                />
              </svg>
              I followed a user-centered design workflow to create a clean,
              responsive, and scalable portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
