import Logo from "../Logo.png"
import LogoNetflix from "../utils/Logo"
import { getAuth ,onAuthStateChanged,signOut} from "firebase/auth";
import {auth} from "../utils/firebase"
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from "react";
import {addUser,removeUser} from  "../slices/userSlices"
import { useNavigate } from "react-router-dom";
function Header() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
const user=useSelector((state)=>state.user)
  function stateChanged(user) {
    if (user) {
      //sign in

      const { uid, displayName, email } = user;
      dispatch(addUser({ uid, displayName, email }));
      navigate('/browse')
    } else {
      //sign out
      dispatch(removeUser());
      navigate('/')
    }
  }
  useEffect(() => {
    onAuthStateChanged(auth, stateChanged);
  }, []); 
  return (
    <>
      <header className="absolute z-50 flex justify-between w-full bg-gradient-to-b from-slate-950">
        <div className=" w-24 h-9   m-8 ">
          <LogoNetflix />
        </div>
        <div className="flex m-4">
          <img className="block" alt="user profile" src="placeholder" />
          <h1 className="font-bold block text-white ml-6" onClick={()=>{
            const auth=getAuth()
            signOut(auth).then().catch(err=>{})
          }}>
            {user ? "Sign out" : "Sign in"}
          </h1>
        </div>
      </header>
    </>
  );
}
export default Header