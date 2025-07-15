import { auth } from "@/library/Auth";

import feedback from "@/library/models/feedback";
import { connectToDatabase } from "@/library/mongodb";

import FeedbackComp from "../_sub components/FeedbackComp";

async function Feedback() {
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
    <div className="w-full font-outfit text-primary  sm:pb-40 pb-17">
      <FeedbackComp session={session} comments={comments} />
    </div>
  );
}

export default Feedback;
