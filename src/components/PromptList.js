import React from "react";
import { PromptCard } from "./PromptCard";

export const PromptList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <div key={post._id}>
          <PromptCard post={post} handleTagClick={handleTagClick} />
        </div>
      ))}
    </div>
  );
};
