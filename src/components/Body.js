import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import Test  from "./Test";
import About from "./About"

import { onAuthStateChanged ,getAuth} from "firebase/auth";
import { useEffect ,useState} from "react";
import { addUser, removeUser } from "../slices/userSlices";
import { auth } from "../utils/firebase.js";
import Browse from "./Browse.js";
import Login from "./Login.js";

function Body() {
  
  const dispatch = useDispatch();

  function stateChanged(user) {
    if (user) {
      //sign in
    
      const { uid, displayName, email } = user;
      dispatch(addUser({ uid, displayName, email }));
    } else {
      //sign out
      dispatch(removeUser());
    }
  }
  useEffect(() => {

    onAuthStateChanged(auth, stateChanged);
  }, []); 
  
  const Router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
    { path: "/about", element:  <About/>},
    {path:"/testing",element:<Test/>}
  ]);

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}
export default Body;
