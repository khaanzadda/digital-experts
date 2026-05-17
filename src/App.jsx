import { AppRoutes } from "./routes/AppRoutes.jsx";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <AppRoutes />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#020617",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "16px",
            borderRadius: "16px",
          },
        }}
      />
    </>
  );
}