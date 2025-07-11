import { auth } from "@/library/Auth";
import Feedback from "../_components/Feedback";
import feedback from "@/library/models/feedback";
import { connectToDatabase } from "@/library/mongodb";

async function page() {
  const session = await auth();
  await connectToDatabase();
  const Rawcomments = await feedback.find().sort({ createdAt: -1 }).lean();

  const comments = Rawcomments.map((comment) => ({
    ...comment,
    _id: comment._id.toString(),
    createdAt: comment.createdAt?.toISOString(),
    updatedAt: comment.updatedAt?.toISOString(),
  }));
  return (
    <div className=" mt-30">
      <Feedback session={session} comments={comments} />
    </div>
  );
}

export default page;
