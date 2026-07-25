import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./assets/css/global.css";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
    <App />
    <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
            duration: 3000,
            style: {
                borderRadius: "10px",
                background: "#111827",
                color: "#fff",
            },
        }}
    />
</AuthProvider>
  </React.StrictMode>
);