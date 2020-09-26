import React from "react";
import MettingItem, { IMettingItem } from "../metting-item";
import "./index.css";

const items: IMettingItem[] = [
  {
    id: 0,
    title: "EVA banzai!!!!",
    hasFinished: false,
    time: ["16:00", "17.15"],
    date: "next day",
    members: ["A", "C", "D", "B"],
  },
  {
    id: 1,
    title: "EVA banzai!!!!",
    hasFinished: false,
    time: ["16:00", "17.15"],
    date: "next day",
    members: ["A", "C", "D", "B"],
  },
  {
    id: 2,
    title: "Meeting with Big...",
    hasFinished: true,
    time: ["16:00", "17.15"],
    date: "next day",
    members: ["A", "C", "D", "B"],
  },
];

function MettingList() {
  return (
    <div className="langogo-metting-list">
      <div className="langogo-metting-list-title">My Meetings</div>
      <div className="langogo-metting-list-content">
        {items.map((item) => (
          <MettingItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MettingList;
