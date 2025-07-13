import Projects from "@/app/_components/Projects";

async function page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="mt-30">
      <Projects />
    </div>
  );
}

export default page;
