import Feedbaackwall from "../_sub components/Feedbaackwall";
import Learningbox from "../_sub components/Learningbox";
import Photofeed from "../_sub components/Currentlybuilding";
import Certifications from "../_sub components/Certifications";

function Myspace() {
  return (
    <section className="w-full font-outfit text-primary sm:px-5 px-[14px] pb-40">
      <div className="mx-auto flex flex-col ">
        <h2 className="text-center font-semibold sm:text-[48px] text-[42px] ">
          A Glimpse Into My Space
        </h2>
        <p className="text-secondary text-[18px] font-normal mt-2 text-center">
          Where code meets personality — tools I use, messages from visitors,
          and sounds that keep me in flow.
        </p>
        <div className="flex max-[865px]:flex-col  gap-[17px] mt-14 mx-auto w-full max-w-[1196px]">
          <Feedbaackwall />
          <Photofeed />
        </div>
        <div className="flex max-[865px]:flex-col  gap-[17px] mt-4.5 mx-auto w-full max-w-[1196px]">
          <Learningbox />
          <Certifications />
        </div>
      </div>
    </section>
  );
}

export default Myspace;
