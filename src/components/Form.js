import {useState} from "react"
function Form(){
  const [status,changeSignStatus] =useState("Sign In")
  const signStatus=status?"Sign In":"Sign Up"
  return (
    <>
      <form
        className="z-20 absolute bg-formClrLight flex-col p-16 space-y-5 font-serif text-center "
        style={{
          inset: "16% 37%",
        }}
      >
        <h1 className="text-lg font-medium text-cyan-50">{signStatus}</h1>
        <input
          className="block m-auto bg-formClr text-white border-2 rounded-sm px-3"
          type={"text"}
          placeholder="email"
        />
        {!status && (
          <input
            className="block m-auto bg-formClr text-white border-2 rounded-sm px-3"
            type={"text"}
            placeholder="name"
          />
        )}

        <input
          className="block m-auto bg-formClr  text-white border-2 rounded-sm px-3"
          type={"text"}
          placeholder="password"
        />
        <button className="bg-red-700 w-full text-white">{signStatus}</button>
        <p
          className="text-cyan-50 text-sm"
          onClick={() => {
            console.log("clicked");
            changeSignStatus(!status);
          }}
        >
          New to netflix? Sign up
        </p>
      </form>
    </>
  );
}
export default Form;