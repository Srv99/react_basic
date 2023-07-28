import React from "react";
import ReactDOM from "react-dom/client";

const heading3 = React.createElement("h3", {}, "This is heading 1");
const heading2 = React.createElement("h2", {}, "This is heading 2");
const heading = React.createElement("h1", { id: "heading" }, [
  "Hello world!",
  heading2,
  heading3,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
