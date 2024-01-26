import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse.js";
import Login from "./Login.js";
function Body() {
  const Router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}
export default Body;
