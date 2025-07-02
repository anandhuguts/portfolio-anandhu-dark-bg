// ProjectSection.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Book Note",
    description:
      "A digital ledger app designed for freelancers and small businesses to track income, expenses, and invoices with ease.",
    points: [
      "Clean, intuitive interface for effortless tracking.",
      "Built with security and simplicity in mind.",
    ],
    image: "/project1.png",
  },
  {
    id: 2,
    title: "Outfitted",
    description:
      "A modern clothing e-commerce site optimized for mobile-first performance and smooth UX.",
    points: [
      "Supports cart and wishlist.",
      "Built with Next.js and Stripe for payments.",
    ],
    image: "/project2.png",
  },
  // Add more projects as needed
];

function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex gap-[69px] w-full max-w-[1155px] mx-auto mt-22">
      {/* Left: Scrollable Screens */}
      <div
        className="w-full max-w-[661px] h-[463px] p-[1px] rounded-[46px] bg-primary border-[3px] border-white overflow-y-scroll snap-y snap-mandatory  no-scrollbar"
        onScroll={(e) => {
          const scrollTop = e.target.scrollTop;
          const height = e.target.clientHeight;
          const index = Math.round(scrollTop / height);
          setActiveIndex(index);
        }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="snap-start h-[463px] w-full flex items-center justify-center rounded-[38px] border-27 border-black"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="rounded-2xl object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right: Sticky Project Description */}
      <div className="w-full max-w-[425px] sticky top-20 h-fit">
        <AnimatePresence mode="wait">
          <motion.div
            key={projects[activeIndex]?.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-3">
              {projects[activeIndex]?.title}
            </h3>
            <p className="text-secondary text-[15px] mb-4">
              {projects[activeIndex]?.description}
            </p>
            <div className="space-y-2">
              {projects[activeIndex]?.points.map((point, i) => (
                <p key={i} className="flex items-center gap-[19px]">
                  <span className="h-[15px] w-[15px] rounded-full border-4 border-[#5954C3] flex-shrink-0"></span>
                  {point}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProjectsSection;
