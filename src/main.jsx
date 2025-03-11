import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <h1></h1>
      <p>
        {" "}
        <h1> </h1> <h1> </h1> <h2> </h2>{" "}
        <span>
          {" "}
          <h2> </h2>{" "}
        </span>{" "}
      </p>
    </ThemeProvider>
  </StrictMode>
);
