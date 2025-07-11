"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ScrollProjects({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);
  const isUIUX = projects[activeIndex].category === "UI/UX Design";

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const idx = Number(entry.target.dataset.index);
  //           setActiveIndex(idx);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   sectionRefs.current.forEach((ref) => ref && observer.observe(ref));

  //   return () => observer.disconnect();
  // }, []);

  //   useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       let visibleEntries = entries
  //         .filter((entry) => entry.isIntersecting)
  //         .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

  //       if (visibleEntries.length > 0) {
  //         const idx = Number(visibleEntries[0].target.dataset.index);
  //         setActiveIndex(idx);
  //       }
  //     },
  //     { threshold: [0, 0.25, 0.5, 0.75, 1] }
  //   );

  //   sectionRefs.current.forEach((ref) => ref && observer.observe(ref));

  //   return () => observer.disconnect();
  // }, []);
  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - elementCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    // Call once on mount
    handleScroll();

    // Attach listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="lg:block hidden mt-20 ">
        <div className="flex gap-15  w-full max-w-[1200px] mx-auto ">
          {/* Left: Screens stacked vertically */}
          <div className="flex flex-col gap-28">
            {projects.map((project, idx) => (
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                key={project.id}
                ref={(el) => (sectionRefs.current[idx] = el)}
                data-index={idx}
                className={`w-full xl:w-[700px] md:w-[500px] lg:w-[600px] h-[461px] rounded-[41px] p-[2px] bg-[linear-gradient(135deg,rgba(255,255,255,0.9)_0%,rgba(150,150,150,0.3)_100%)]  shadow-xl`}
              >
                <div
                  className="w-full h-full  border-15 border-[#121212] bg-cover rounded-[41px]  bg-center bg-no-repeat  flex flex-col  "
                  style={{
                    backgroundImage: `url('${project.image}')`,
                  }}
                >
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={100}
                    className="object-cover "
                    sizes="(max-width: 768px) 100vw, 700px "
                    priority={idx === 0} // Prioritize first project for LCP
                  /> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Sticky Description */}
          <div className="max-w-[500px] sticky top-32 h-fit align-top">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[activeIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-[30px] font-semibold ">
                  {projects[activeIndex].title}
                </h2>
                <p className="text-secondary text-[18px] font-normal mb-4">
                  {projects[activeIndex].description}
                </p>
                <ul className="space-y-2  ">
                  {projects[activeIndex].points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-[16px] font-normal text-primary  "
                    >
                      <span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.5 11.75L8.67 9.185L11.25 8L8.67 6.83L7.5 4.25L6.3225 6.83L3.75 8L6.3225 9.185L7.5 11.75ZM4.6275 1.07C5.53881 0.694961 6.51454 0.501344 7.5 0.5C8.4825 0.5 9.4575 0.695 10.3725 1.07C11.28 1.445 12.105 2 12.8025 2.6975C13.5 3.395 14.055 4.22 14.43 5.1275C14.805 6.0425 15 7.0175 15 8C15 9.9875 14.2125 11.9 12.8025 13.3025C12.107 14 11.2805 14.5532 10.3705 14.9303C9.46053 15.3074 8.48502 15.501 7.5 15.5C6.51454 15.4987 5.53881 15.305 4.6275 14.93C3.71855 14.5522 2.89285 13.9992 2.1975 13.3025C1.50002 12.607 0.946828 11.7805 0.569712 10.8705C0.192596 9.96053 -0.00101356 8.98501 3.99012e-06 8C3.99012e-06 6.0125 0.787504 4.1 2.1975 2.6975C2.895 2 3.72 1.445 4.6275 1.07ZM3.255 12.245C4.38 13.37 5.91 14 7.5 14C9.09 14 10.62 13.37 11.745 12.245C12.87 11.12 13.5 9.59 13.5 8C13.5 6.41 12.87 4.88 11.745 3.755C11.1874 3.19799 10.5255 2.75631 9.7971 2.45518C9.06873 2.15405 8.28817 1.99938 7.5 2C5.91 2 4.38 2.63 3.255 3.755C2.698 4.31262 2.25631 4.97453 1.95518 5.7029C1.65406 6.43127 1.49938 7.21183 1.5 8C1.5 9.59 2.13 11.12 3.255 12.245Z"
                            fill="#0767FF"
                          />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap  items-center gap-3 mt-7.5">
                  {projects[activeIndex].tech.map((tech, index) => (
                    <div
                      key={index}
                      className="  flex py-1.5 px-5 border gap-[8px] rounded-[8px] border-[#454545] bg-[#171717] justify-center items-center"
                    >
                      <div className=" relative w-[17px] h-[16px]">
                        <Image
                          src={tech.icons} // Make sure it's in the `public` folder
                          alt="vercel"
                          fill
                          className="object-contain "
                        />
                      </div>
                      <p className="font-semibold text-[13px]">{tech.name}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-5 mt-7">
                  <Link
                    // href={
                    //   projects[activeIndex].website
                    //     ? projects[activeIndex].website
                    //     : "#"
                    // }
                    href={`/projects/${projects[activeIndex].id}`}
                    onClick={isUIUX ? (e) => e.preventDefault() : undefined}
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <button
                      className={` ${
                        isUIUX ? "bg-secondary" : "bg-primary cursor-pointer"
                      }  text-[16px]  flex items-center px-5 text-black py-2 rounded-full gap-2.5 `}
                    >
                      {projects[activeIndex].category === "Web Development"
                        ? "Visit Project"
                        : projects[activeIndex].category === "UI/UX Design"
                        ? "Case Study"
                        : "Behance Portfolio"}
                      {isUIUX ? (
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.1"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.5 3.1875C7.09104 3.1875 5.73978 3.74721 4.7435 4.7435C3.74721 5.73978 3.1875 7.09104 3.1875 8.5C3.1875 9.90896 3.74721 11.2602 4.7435 12.2565C5.73978 13.2528 7.09104 13.8125 8.5 13.8125C9.90896 13.8125 11.2602 13.2528 12.2565 12.2565C13.2528 11.2602 13.8125 9.90896 13.8125 8.5C13.8125 7.09104 13.2528 5.73978 12.2565 4.7435C11.2602 3.74721 9.90896 3.1875 8.5 3.1875ZM1.0625 8.5C1.0625 4.39238 4.39238 1.0625 8.5 1.0625C12.6076 1.0625 15.9375 4.39238 15.9375 8.5C15.9375 12.6076 12.6076 15.9375 8.5 15.9375C4.39238 15.9375 1.0625 12.6076 1.0625 8.5Z"
                            fill="black"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.50006 3.18751C7.13041 3.18458 5.81314 3.71357 4.82593 4.66297C4.62142 4.85206 4.35083 4.95328 4.07242 4.94484C3.79401 4.93641 3.53005 4.81898 3.33737 4.61784C3.14468 4.41671 3.03869 4.14795 3.0422 3.86944C3.04571 3.59093 3.15845 3.32493 3.35614 3.12872C4.73883 1.80033 6.58266 1.05971 8.50006 1.06251C8.78185 1.06251 9.0521 1.17445 9.25136 1.37371C9.45061 1.57296 9.56256 1.84322 9.56256 2.12501C9.56256 2.4068 9.45061 2.67705 9.25136 2.87631C9.0521 3.07557 8.78185 3.18751 8.50006 3.18751Z"
                            fill="black"
                          />
                        </svg>
                      ) : (
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
                      )}
                    </button>
                  </Link>
                  <div className="flex items-center gap-3">
                    {projects[activeIndex].figma &&
                      (projects[activeIndex].category === "UI/UX Design" ||
                        projects[activeIndex].category ===
                          "Web Development") && (
                        <a
                          href={
                            projects[activeIndex].figma
                              ? projects[activeIndex].figma
                              : ""
                          }
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
                      )}
                    {projects[activeIndex].category === "Web Development" && (
                      <a
                        href={
                          projects[activeIndex].github
                            ? projects[activeIndex].github
                            : ""
                        }
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
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* for mobile screens */}
      <div className="flex lg:hidden max-[865px]:flex-col flex-row max-[865px]:gap-15 gap-10 w-full  mx-auto mb-15">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-[500px] max-[865px]:max-w-full  w-full mx-auto"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full max-[428px]:!max-w-[388px] max-[428px]:!h-[235px]  h-[299px] max-[865px]:h-[400px] max-sm:h-[299px] max-[428px]:rounded-[24px]  rounded-[31px] p-[2px] bg-[linear-gradient(135deg,rgba(255,255,255,0.9)_0%,rgba(150,150,150,0.3)_100%)] shadow-xl"
            >
              <div
                className="w-full h-full  border-10 border-[#121212] bg-cover rounded-[31px]  bg-center bg-no-repeat max-[428px]:rounded-[24px]   flex flex-col  "
                style={{ backgroundImage: `url('${project.image}')` }}
              ></div>
            </motion.div>
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full mt-5.5"
            >
              <div className="flex w-full justify-between items-center">
                <h2 className="text-[20px] max-[428px]:!text-[22px] max-[865px]:text-[28px] font-bold ">
                  {project.title}
                </h2>
              </div>
              <p className="text-secondary max-[428px]:text-[16px] text-[18px] max-[865px]:text-[20px] font-normal mt-3 max-[428px]:mt-2  mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap  items-center gap-3 mt-5.5 max-[428px]:mt-3">
                {project.tech.map((tech, index) => (
                  <div
                    key={index}
                    className=" w-fit flex py-1.5 px-5 max-[428px]:px-3 border gap-[8px] rounded-[8px] border-[#454545] bg-[#171717] justify-center items-center"
                  >
                    <div className=" relative max-[428px]:w-[15px] max-[428px]:h-3.5 w-[17px] h-[16px]">
                      <Image
                        src={tech.icons} // Make sure it's in the `public` folder
                        alt="vercel"
                        fill
                        className="object-contain "
                      />
                    </div>
                    <p className="font-semibold max-[428px]:text-[12px] text-[13px]">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex w-full items-center  gap-5 justify-between mt-6  ">
                <div className="flex items-center gap-3">
                  {(project.category === "UI/UX Design" ||
                    project.category === "Web Development") && (
                    <a
                      href={project.figma ? project.figma : ""}
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <div className="relative w-[24px] h-[24px]">
                        <Image
                          src="/figma logo.svg" // Make sure it's in the `public` folder
                          alt="Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </a>
                  )}

                  {project.category === "Web Development" && (
                    <a
                      href={project.github ? project.github : ""}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <div className="relative w-[24px] h-[24px]">
                        <Image
                          src="/github logo.svg" // Make sure it's in the `public` folder
                          alt="Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </a>
                  )}
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  onClick={
                    project.category === "UI/UX Design"
                      ? (e) => e.preventDefault()
                      : undefined
                  }
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button
                    className={`${
                      project.category === "UI/UX Design"
                        ? "bg-secondary"
                        : "bg-primary cursor-pointer"
                    } font-medium max-[865px]:text-[18px] max-[428px]:!text-[14px] text-[16px] max-[428px]:!p-2.5  flex items-center px-5 text-black py-2 rounded-full gap-2.5`}
                  >
                    {project.category === "Web Development"
                      ? "Visit Project"
                      : project.category === "UI/UX Design"
                      ? "Case Study"
                      : "Behance Portfolio"}
                    {project.category === "UI/UX Design" ? (
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.1"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.5 3.1875C7.09104 3.1875 5.73978 3.74721 4.7435 4.7435C3.74721 5.73978 3.1875 7.09104 3.1875 8.5C3.1875 9.90896 3.74721 11.2602 4.7435 12.2565C5.73978 13.2528 7.09104 13.8125 8.5 13.8125C9.90896 13.8125 11.2602 13.2528 12.2565 12.2565C13.2528 11.2602 13.8125 9.90896 13.8125 8.5C13.8125 7.09104 13.2528 5.73978 12.2565 4.7435C11.2602 3.74721 9.90896 3.1875 8.5 3.1875ZM1.0625 8.5C1.0625 4.39238 4.39238 1.0625 8.5 1.0625C12.6076 1.0625 15.9375 4.39238 15.9375 8.5C15.9375 12.6076 12.6076 15.9375 8.5 15.9375C4.39238 15.9375 1.0625 12.6076 1.0625 8.5Z"
                          fill="black"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.50006 3.18751C7.13041 3.18458 5.81314 3.71357 4.82593 4.66297C4.62142 4.85206 4.35083 4.95328 4.07242 4.94484C3.79401 4.93641 3.53005 4.81898 3.33737 4.61784C3.14468 4.41671 3.03869 4.14795 3.0422 3.86944C3.04571 3.59093 3.15845 3.32493 3.35614 3.12872C4.73883 1.80033 6.58266 1.05971 8.50006 1.06251C8.78185 1.06251 9.0521 1.17445 9.25136 1.37371C9.45061 1.57296 9.56256 1.84322 9.56256 2.12501C9.56256 2.4068 9.45061 2.67705 9.25136 2.87631C9.0521 3.07557 8.78185 3.18751 8.50006 3.18751Z"
                          fill="black"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="text-white"
                        width="12"
                        height="12"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.39872 2.59873C9.61125 2.38626 9.89946 2.26691 10.2 2.26691C10.5005 2.26691 10.7887 2.38626 11.0012 2.59873L16.1012 7.69873C16.3137 7.91126 16.4331 8.19948 16.4331 8.5C16.4331 8.80052 16.3137 9.08873 16.1012 9.30127L11.0012 14.4013C10.7875 14.6077 10.5012 14.7219 10.2041 14.7194C9.90691 14.7168 9.62265 14.5976 9.41252 14.3875C9.20239 14.1773 9.0832 13.8931 9.08062 13.5959C9.07804 13.2988 9.19227 13.0125 9.39872 12.7987L12.4666 9.63333H1.69998C1.3994 9.63333 1.11114 9.51393 0.898596 9.30139C0.686055 9.08884 0.56665 8.80058 0.56665 8.5C0.56665 8.19942 0.686055 7.91115 0.898596 7.69861C1.11114 7.48607 1.3994 7.36667 1.69998 7.36667H12.4666L9.39872 4.20126C9.18625 3.98873 9.06689 3.70052 9.06689 3.4C9.06689 3.09948 9.18625 2.81126 9.39872 2.59873Z"
                          fill="black"
                        />
                      </svg>
                    )}
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
}
