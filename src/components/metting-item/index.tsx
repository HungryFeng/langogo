import React from "react";
import clock from "./clock.svg";
import earth from "./earth.svg";
import "./index.css";

export interface IMettingItem {
  id: number;
  title: string;
  hasFinished?: boolean;
  time: [string, string];
  date: string;
  members: string[];
}

const MettingItem: React.FC<{ item: IMettingItem }> = ({
  item: { title, hasFinished, time, date, members },
}) => {
  return (
    <div className="langogo-metting-item">
      <div className="langogo-metting-item-header">
        {hasFinished && (
          <div className="langogo-metting-item-status">Finished</div>
        )}
        <div className="langogo-metting-item-title">{title}</div>
      </div>
      <div className="langogo-metting-item-time">
        <img src={clock} alt="" />
        {time[0]}-{time[1]}({date})
      </div>
      <div className="langogo-metting-item-footer">
        <div className="langogo-metting-item-members">
          {members.map((member) => (
            <div className="langogo-metting-item-member-item">{member}</div>
          ))}
        </div>
        {hasFinished && <img src={earth} alt="" />}
      </div>
    </div>
  );
};

export default MettingItem;
