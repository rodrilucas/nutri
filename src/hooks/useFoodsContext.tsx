import { useContext } from "react";
import FoodsContext from "../context/Provider";

function useFoodsContext() {
  return useContext(FoodsContext);
}

export default useFoodsContext;
