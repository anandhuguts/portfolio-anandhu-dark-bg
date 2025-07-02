import Image from "next/image";

function Skillscontainer({ skills }) {
  console.log(skills);
  return (
    <div className="transform transition-transform duration-300 hover:rotate-[-3deg] hover:scale-105 flex items-center justify-center flex-col max-[428px]:w-[100px] max-[428px]:h-[96px] w-[113px] h-[107px] border border-[#454545] bg-[#171717] rounded-[8px]">
      <div className="relative  w-[41px] h-[46px]">
        <Image
          src={`/${skills.icon}`} // Make sure it's in the `public` folder
          alt={skills.title}
          fill
          className="object-contain"
        />
      </div>
      <p className="font-semibold text-[14px] mt-2">{skills.title}</p>
    </div>
  );
}

export default Skillscontainer;
