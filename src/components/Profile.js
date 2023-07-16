import React from "react";
import { PromptCard } from "./PromptCard";

const Profile = ({ data, name, desc, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text">{name} Profile</h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-16 prompt_layout">
        {data?.map((post) => (
          <div key={post._id}>
            <PromptCard
              post={post}
              handleDelete={() => {
                handleDelete && handleDelete(post);
              }}
              handleEdit={() => handleEdit && handleEdit(post)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profile;
