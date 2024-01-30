import { useEffect } from "react";
import { options } from "../utils/constants";
import useGetMovieList  from "../hooks/useGetMovieList";
import Header from"./Header"
import MainComponent from "./MainComponent";
import SecondComponent  from "./SecondComponent";
import {useSelector} from "react-redux"
import SearchSection from "./SearchSection.js";
function Browse() {
const showSearch= useSelector(store=>store.gptToggle)
useGetMovieList()
  return (
    <>
      <Header />
      {showSearch ? (
        <SearchSection />
      ) : (
        <>
          <MainComponent />
          <SecondComponent />
        </>
      )}
      
    </>
  );
}
export default Browse