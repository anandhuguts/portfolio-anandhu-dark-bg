"use server";

import { connectToDatabase } from "@/library/mongodb";
import Feedback from "@/library/models/feedback";

export async function submitFeedback({ message, name, email, image }) {
  if (!message) {
    throw new Error("Message is required");
  }

  await connectToDatabase();

  const newFeedback = await Feedback.create({
    message,
    name,
    email,
    image,
  });

  return {
    success: true,
    feedback: {
      message: newFeedback.message,
      name: newFeedback.name,
      image: newFeedback.image,
      createdAt: newFeedback.createdAt.toISOString(), // for serialization
    },
  };
}
