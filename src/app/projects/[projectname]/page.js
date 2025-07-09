import ProjectDetails from "@/app/_sub components/ProjectDetails";
import ProjectInfo from "@/app/_json files/ProjectDetails.json";

function page({ params }) {
  const projectName = params.projectname;

  const projectDetails = ProjectInfo.find(
    (project) => project.id === projectName
  );

  console.log(projectDetails);
  return (
    <div className="mt-30 mx-auto w-full max-w-4xl px-4 font-outfit text-primary">
      <ProjectDetails projectDetails={projectDetails} />
    </div>
  );
}

export default page;
