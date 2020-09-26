import React, { useState } from "react";
import "./index.css";

interface IProps {
  /** 右侧展示内容 */
  content: React.ReactNode;

  /**  默认是否展开，默认值为true */
  defaultVisible?: boolean;
}

const Drawer: React.FC<IProps> = ({
  content,
  children,
  defaultVisible = true,
}) => {
  const [visible, setVisible] = useState(defaultVisible);
  return (
    <div
      className={`langogo-wrapper${
        visible ? " langogo-wrapper-visible" : " langogo-wrapper-hidden"
      }`}
    >
      <div className="langogo-left">
        <div className="langogo-left-content">
          <div
            className="langogo-left-icon"
            onClick={() => setVisible(!visible)}
          />
          {children}
        </div>
      </div>
      <div className="langogo-right">{content}</div>
    </div>
  );
};

export default Drawer;
