import Skillscontainer from "../_sub components/Skillscontainer";
import skills from "../_json files/skills.json";

function Skills() {
  return (
    <section className="w-full font-outfit text-primary sm:px-5 px-3.5 pb-40">
      <div className="mx-auto flex flex-col ">
        <h2 className="text-center font-semibold sm:text-[48px] text-[42px]">
          My Skills
        </h2>
        <p className="text-secondary text-[18px] font-normal mt-2 text-center">
          Showcasing my expertise in React, Next.js, UI/UX design, and
          full-stack development through practical builds.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-[399px]:gap-3 max-[450px]:gap-4  sm:gap-6 md:gap-7 lg:gap-9 xl:gap-3.5 sm:max-w-[1022px] w-full sm:mt-14 mt-10 mx-auto sm:px-4">
        {skills.map((skill, index) => (
          <Skillscontainer key={index} index={index} skills={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
