import { Span } from "next/dist/trace";
import React from "react";
import { IconType } from "react-icons";
import { FiHome, FiPaperclip, FiUser } from "react-icons/fi";

export const RouteSelect = () => {
  return (
    <div className="space-y-1">
      <Route Icon={FiHome} selected={true} title="Dashboard" />
      <Route Icon={FiUser} selected={false} title="Team" />
      <Route Icon={FiPaperclip} selected={false} title="Invoice" />
      {/* we can add more nav options later */}
    </div>
  );
};

const Route = ({
  selected,
  Icon,
  title,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
}) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] 
    ${
      selected
        ? "bg-white text-stone-950 shadow"
        : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
    }`}
    >
      <Icon className={selected ? "text-red-500" : ""} />
      <span>{title}</span>
    </button>
  );
};
