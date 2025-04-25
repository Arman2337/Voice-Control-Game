import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Use "react-dom/client" in React 18
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
// import tailwindcss from "@tailwindcss/vite";
// import tailwindConfig from "../tailwind.config";
// ✅ Create the root using createRoot()
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
