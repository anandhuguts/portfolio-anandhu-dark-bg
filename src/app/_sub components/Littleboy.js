// components/LittleBoy.js
"use client";
import { useRive } from "@rive-app/react-canvas";

export default function LittleBoy() {
  const { rive, RiveComponent } = useRive({
    src: "/little_boy .riv", // from public folder
    stateMachines: "State Machine 1",
    autoplay: false,
  });

  return (
    <div
      className="max-[1175px]:w-[344px]  max-[1175px]:h-[344px] w-[458px] h-[458px]"
      onMouseEnter={() => rive && rive.play()}
    >
      <RiveComponent />
    </div>
  );
}
