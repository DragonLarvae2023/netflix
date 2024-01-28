import Header from "./Header.js"
import {loginBg} from "../utils/ImgSrc"
import Form from "./Form.js";
import {useNavigate} from "react-router-dom"
function Login(){

  return (
    <>
      <div className="relative h-screen  w-screen">
        <Header />
        <img
          src={loginBg}
          alt="logo"
          className="absolute object-cover w-full h-full z-0"
        />
        <Form/>
      </div>
    </>
  );
}
export default Login