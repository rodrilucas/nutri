import { useState } from "react";
import { FoodsResults } from "../schemas/types";
import Icon from "./Icon";
import useFoodsContext from "../hooks/useFoodsContext";
import useFatSecret from "../hooks/api/useFatSecret";

function Search() {
  const { setFoodsResults, setPaginationTerm } = useFoodsContext();
  const { searchFood } = useFatSecret();
  const [term, setTerm] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { foods } = await searchFood(term);
    const parsed: FoodsResults = {
      data: {
        food: foods.food,
        max_results: Number(foods.max_results),
        page_number: Number(foods.page_number),
        total_results: Number(foods.total_results),
      },
    };
    setFoodsResults(parsed);
    setPaginationTerm(term);
    setTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="relative block">
        <input
          type="text"
          name="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Pesquisar Alimento"
          className="w-full pl-14 bg-[#f2f2f2] dark:text-[#949cae] dark:bg-[#1e2939] py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Icon className="absolute left-6 top-4 before:w-[16px] before:h-[16px] before:bg-[url(/search.svg)]" />
      </label>
    </form>
  );
}

export default Search;
