import {useState,useRef} from "react"
import {auth} from "../utils/firebase"
import checkFileds from "../utils/checkFormFields";
import { useNavigate } from "react-router-dom";
import {sign_up,sign_in}  from "../utils/signUp"
function Form(){
   const navigate = useNavigate();
  const [status,changeSignStatus] =useState(false)
  const [validity,changeValidity]=useState(true)
  const name=useRef("") 
  const password=useRef("") 
  const email=useRef("")
  checkFileds(email,password)
  const signStatus=status?"Sign In":"Sign Up"
  return (
    <>
      <form
        className="z-20 absolute bg-formClr flex-col p-10 space-y-5 font-serif text-center rounded-md"
        style={{
          inset: "16% 37%",
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-lg font-medium text-red-500">{signStatus}</h1>
        <input
          ref={email}
          className="block w-full bg-formClrLight text-white border-2 rounded-sm px-3 py-2 focus:outline-none focus:border-red-500"
          type="email"
          placeholder="Email"
        />
        {!status && (
          <input
            ref={name}
            className="block w-full bg-formClrLight text-white border-2 rounded-sm px-3 py-2 focus:outline-none focus:border-red-500"
            type="text"
            placeholder="Name"
          />
        )}

        <input
          className="block w-full bg-formClrLight text-white border-2 rounded-sm px-3 py-2 focus:outline-none focus:border-red-500"
          type="password"
          ref={password}
          placeholder="Password"
        />
        <button
          className="bg-red-700 w-full text-white rounded-md py-2 px-4 transition duration-300 transform hover:scale-105 focus:outline-none"
          onClick={async (e) => {
            const field = checkFileds(
              email.current.value,
              password.current.value
            );
            if (field !== true) {
              changeValidity(field + " is not valid");
              return;
            }
            if (!status) {
              const user = sign_up(
                changeValidity,
                name.current.value,
                email.current.value,
                password.current.value
              )
                .then(() => navigate("/browse"))
                .catch((err) => {});
              console.log(user);
            } else {
              const user = sign_in(
                changeValidity,
                email.current.value,
                password.current.value
              )
                .then(() => navigate("/browse"))
                .catch((err) => {});
              console.log(user);
            }
          }}
        >
          {signStatus}
        </button>
        {validity !== true ? (
          <p className="text-red-700 font-light">{validity}</p>
        ) : (
          <></>
        )}
        <p
          className="text-red-500 text-sm cursor-pointer"
          onClick={() => {
            changeSignStatus(!status);
          }}
        >
          {status
            ? `New to Netflix? Sign up now.`
            : `Already signed up? Sign in`}
        </p>
      </form>
    </>
  );
}
export default Form;