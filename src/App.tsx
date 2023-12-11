import {  RouterProvider } from "react-router-dom";
import { route } from "./routes/Route";
import AsifTest from "./AsifTest";

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
