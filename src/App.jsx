import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;
