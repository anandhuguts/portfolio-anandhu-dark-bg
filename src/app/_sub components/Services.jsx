import Image from "next/image";

function Services({ service }) {
  return (
    <div className="group max-sm:min-w-[340px] sm:w-full lg:max-w-[388px] h-[318px] border border-[#454545] bg-[#171717] rounded-[20px]">
      <div className="flex items-center gap-4.5 justify-center w-fullmax-w-[388px] h-[143px] rounded-t-[20px] bg-[#121212] border-b border-[#454545]">
        {service.icons.map((icon, index) => (
          <div
            key={index}
            className="relative w-[45px] h-[45px]  transition-transform duration-300 group-hover:scale-110"
          >
            <Image
              src={`/${icon}`}
              alt={`Icon ${index}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="w-full max-w-[388px pb-8 px-6 pt-4">
        <h3 className="font-semibold text-[16px]">{service.title}</h3>
        <p className="font-normal text-[14px] mt-1.5 text-secondary">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default Services;
