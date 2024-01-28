import { async } from "@firebase/util"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase"
async function sign_up(func,name,email,password){
  try{

    const userCredential=await createUserWithEmailAndPassword(auth,email,password)
    return userCredential.user
  }
  catch(error){
    
    func( error.code+","+error.message)
    throw error
  }
}
async function sign_in(func,email,password){
  try{
    const userCredential =await signInWithEmailAndPassword(auth,email,password)
    return userCredential.user
  }
  catch(error){
    func(error.code+","+error.message)
    throw error
  }
}
export {sign_up,sign_in}