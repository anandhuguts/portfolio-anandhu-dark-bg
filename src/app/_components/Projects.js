"use client";

import { useState } from "react";
import ScrollProjects from "../_sub components/Projectsbox";
import Allprojects from "../_json files/Allprojects.json";

function Projects() {
  const [activeCat, setActiveCat] = useState("Web Development");

  const filteredProjects = Allprojects.filter(
    (project) => project.category === activeCat
  );

  return (
    <section className="w-full font-outfit text-primary px-5 sm:pb-40 pb-17">
      <div className="mx-auto flex flex-col  ">
        <h2 className="text-center font-semibold text-[42px] sm:text-[48px]">
          Projects
        </h2>
        <p className="text-secondary text-[18px] font-normal mt-2 text-center">
          A collection of real-world applications and designs I&apos;ve crafted
          using modern web technologies and tools.
        </p>
        <div className="flex items-center justify-center gap-2.5 mt-7.5">
          {["Web Development", "UI/UX Design", "Graphic Design"].map((cat) => (
            <button
              key={cat}
              className={`sm:px-5 sm:py-2 p-2.5 max-[350px]:!text-[11px] max-sm:text-[12px] rounded-full border ${
                activeCat === cat
                  ? "border-primary text-primary"
                  : "border-secondary text-secondary"
              }  font-regular hover:border-primary hover:text-primary transition`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="  mt-[35px]">
          <ScrollProjects projects={filteredProjects} />
        </div>
      </div>
    </section>
  );
}

export default Projects;
