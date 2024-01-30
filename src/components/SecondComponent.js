import { useSelector, UseSelector } from "react-redux"
import useGetCollection from "../hooks/useGetCollection"
import Card from "./Card"
function SecondComponent(){
  useGetCollection()
  return<>
  <div className="absolute -my-20">

  <MovieCollectionComponent/>
  </ div>
  </>
}
function MovieCollectionComponent(){
const collections=useSelector(state=>state.collection)
return<>
{collections.map((collect)=><MovieList key={collect.id} collection={collect}/>)}
</>
}
function MovieList({collection}){
  
  return(<>
  <div className="collections bg-transparent font-bold text-white relative z-50  my-10">
    <h1 className="mx-6">{collection.title}</h1>

    <div className="flex  space-x-3">
      {collection.results.map((card)=><Card key={Card.id} Card={card}/>)}
    </div>
  </div>
  </>)


}
export default SecondComponent