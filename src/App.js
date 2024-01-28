import Body from "./components/Body";
import appStore from "./appStore";
import { Provider, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import {addUser,removeUser} from "./slices/userSlices"
import {auth} from "./utils/firebase.js"
function App() {
  console.log(getAuth())
  return (
    <Provider store={appStore}>
      <div className="App relative  overflow-x-hidden h-screen bg-black">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
