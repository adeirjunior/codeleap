import React from "react";
import PostCard from "./PostCard";
import { Career, CareersGridProp } from "../../interfaces";

export default function CareerGrid({ careers }: CareersGridProp) {
  return (
    <div className="grid grid-cols-1 gap-5 max-w-[700px] mx-auto">
      {careers.map((career: Career) => (
        <PostCard key={career.id} data={career} />
      ))}
    </div>
  );
}
