
import { motion } from "framer-motion"
import { posterImg } from "../utils/constants"
function Card({Card}){
  const img=posterImg(Card.poster_path)
  return (
    <>
      <motion.div
        className="w-48 h-52 overflow-hidden relative"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <img src={img} alt={Card.title} className="w-full h-64" />
      </motion.div>
    </>
  );
}
export default Card