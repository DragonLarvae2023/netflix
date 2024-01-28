import { useEffect } from "react";
import { options } from "../utils/constants";
import useGetMovieList  from "../hooks/useGetMovieList";
import Header from"./Header"
import MainComponent from "./MainComponent";
import SecondComponent  from "./SecondComponent";
function Browse() {

useGetMovieList()
  return (
    <>
    <Header/>
     <MainComponent/>
     <SecondComponent/>
    </>
  );
}
export default Browse