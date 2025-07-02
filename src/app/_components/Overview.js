import Services from "../_sub components/Services";
import service from "../_json files/Service.json";

function Overview() {
  return (
    <section className="w-full  sm:px-5 mt-40 sm:pb-40 pb-17 font-outfit bg-[#0a0a0a]">
      <div className="max-w-[1238px] mx-auto flex flex-col text-primary ">
        <h2 className="sm:text-[48px] text-[42px] sm:px-0 px-[14px]">
          Overview
        </h2>
        <p className="text-secondary text-[18px] font-normal sm:mt-4.5 mt-2 sm:px-0 px-[14px]">
          As a MERN stack developer and creative web designer, I craft fast,
          scalable, and visually compelling digital experiences. With a strong
          focus on usability and performance, I merge clean architecture with
          aesthetic design to build dynamic web applications. My passion lies in
          delivering intuitive user interfaces that are not only engaging but
          also optimized for seamless functionality across all devices.
        </p>

        {/* Scrollable Service Cards */}
        <div className="mt-10 max-sm:mt-10 flex gap-6 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-9 justify-items-center scrollbar-hide overflow-y-hidden max-sm:pl-[14px] sm:pl-0">
          {service.map((service, index) => (
            <Services key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
