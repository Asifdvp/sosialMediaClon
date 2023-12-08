import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { route } from "./routes/Route";

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/profile/:id", element: <Profile /> },
//     ],
//   },
//   { path: "/login", element: <Login /> },
//   { path: "/register", element: <Register /> },
// ]);

export default App;
