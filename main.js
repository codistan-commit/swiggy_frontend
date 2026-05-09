import ReactDOM from "react-dom/client";
import React from "react";
import AppLayout from "./src/AppLAyout";

const main = () => {
  return (
    <div>
      <AppLayout />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<main />);
