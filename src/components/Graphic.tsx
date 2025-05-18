import { useState } from "react";
import useFoodsContext from "../hooks/useFoodsContext";
import CircleDonutChart from "./CircleDonutChart";

const Graphic = () => {
  const {
    foodServings: { food },
    selectedServing,
    setSelectedServing,
  } = useFoodsContext();

  const [selectedId, setSelectedId] = useState(selectedServing.serving_id);

  if (!selectedServing) return null;

  const carbs = Number(selectedServing.carbohydrate);
  const protein = Number(selectedServing.protein);
  const fat = Number(selectedServing.fat);
  const calories = Number(selectedServing.calories);

  const format = (value: number) => value.toFixed(2);

  const macros = [
    { label: "Gorduras", value: fat, color: "#fd5f51" },
    { label: "Carboidratos", value: carbs, color: "#33b24b" },
    { label: "Proteínas", value: protein, color: "#fdbe04" },
  ];

  const handleSelectPortion = (id: string) => {
    const selected = food.servings.serving.find(
      (serving) => serving.serving_id === id
    );
    if (selected) {
      setSelectedServing({ ...selected });
      setSelectedId(id);
    }
  };

  const renderedOptions = food.servings.serving.map((serving) => (
    <option
      key={serving.serving_id}
      value={serving.serving_id}
      className="dark:bg-[#1e293]"
    >
      {serving.serving_description}
    </option>
  ));

  return (
    <div className="flex flex-col items-center justify-center px-4 md:w-full md:items-center">
      <div className="flex items-center justify-center w-full dark:text-white mb-8">
        <label htmlFor="portion">Porção: </label>
        <select
          className="w-full border dark:bg-[#1e2939] border-[#bcbcbc] dark:border-[#1e2939] ml-2 p-2 rounded-lg outline-none"
          name="portion"
          id="portion"
          value={selectedId}
          onChange={(e) => handleSelectPortion(e.currentTarget.value)}
        >
          {renderedOptions}
        </select>
      </div>
      <CircleDonutChart
        carbs={carbs}
        protein={protein}
        fat={fat}
        cal={calories}
      />
      <ul className="text-start mt-4 w-full">
        {macros.map((item) => (
          <li
            key={item.label}
            style={{ color: item.color }}
            className="pt-1 pb-1 list-disc list-inside"
          >
            {item.value}% {item.label}:
            <span className="font-bold text-black dark:text-white ml-1">
              {format(item.value)}g
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Graphic;
