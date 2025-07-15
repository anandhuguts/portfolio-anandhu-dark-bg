import { Suspense } from "react";
import Feedback from "../_components/Feedback";
import Spinner from "../_sub components/Spinner";

async function page() {
  return (
    <section className=" mt-30 px-5">
      <div className="mx-auto flex flex-col font-outfit">
        <h2 className="text-center text-primary font-semibold sm:text-[48px] text-[42px] ">
          Share Your Thoughts
        </h2>
        <p className="text-secondary text-[18px] max-[428px]:text-[16.5px]  font-normal mt-2 text-center">
          Have suggestions, feedback, or just want to say hello? Drop your
          message below — I&apos;d love to hear from you!
        </p>
      </div>
      <Suspense fallback={<Spinner />}>
        <Feedback />
      </Suspense>
    </section>
  );
}

export default page;
