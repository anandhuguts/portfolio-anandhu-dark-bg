import { connectToDatabase } from "@/library/mongodb";
import Feedback from "@/library/models/feedback";

export async function POST(req) {
  try {
    await connectToDatabase();

    const { message, name, email, image } = await req.json();

    if (!message) {
      return Response.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    const newFeedback = await Feedback.create({
      message,
      name,
      email,
      image,
    });

    return Response.json({ success: true, feedback: newFeedback });
  } catch (error) {
    console.error("❌ Feedback POST Error:", error.message);
    return Response.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();

    const allFeedback = await Feedback.find().sort({ createdAt: -1 });

    return Response.json({ success: true, data: allFeedback });
  } catch (error) {
    console.error("❌ GET feedback error:", error.message);
    return Response.json(
      { success: false, error: "Failed to fetch feedback" },
      { status: 500 }
    );
  }
}
