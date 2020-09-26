import React from "react";
import Drawer from "./components/drawer";
import MettingList from "./components/metting-list";
import Space from "./components/space";
import "./App.css";

function App() {
  return (
    <div className="langogo-page">
      <div className="langogo-page-left"></div>
      <div className="langogo-page-right">
        <Drawer
          content={
            <>
              <Space />
              <Space />
            </>
          }
        >
          <MettingList />
        </Drawer>
      </div>
    </div>
  );
}

export default App;
