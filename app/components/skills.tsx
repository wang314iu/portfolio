"use client";

import TagCloud, { TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import React, { useState } from "react";
import { skillTags } from "../constants";
import SkillDialog from "./skillDialog";

const Skills = () => {
  const [[tag, description], setContent] = useState(["", ""]);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const onSelectTag = (tag: string) => {
    setContent([tag, skillTags[tag]]);
    setOpen(true);
  };
  return (
    <div
      className={`h-full w-full flex items-center bg-gradient-to-r from-green-700 lg:px-[6%] transition-all duration-500 ease-in-out`}
      style={{ justifyContent: open ? "flex-end" : "center" }}
    >
      <div
        className={`transition-all duration-1000 ease-out ${
          open && "scale-90 lg:scale-110"
        }`}
      >
        <TagCloud
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(600, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "normal",
            containerClass: "w-fill",
            itemClass: "hover:cursor-pointer",
          })}
          onClick={(tag: string, ev: MouseEvent) => onSelectTag(tag)}
          onClickOptions={{ passive: true }}
        >
          {Object.keys(skillTags)}
        </TagCloud>
      </div>
      <SkillDialog
        title={tag}
        open={open}
        handleClose={handleClose}
        content={description.split(",").map((x) => x.trim())}
      />
    </div>
  );
};

export default Skills;
