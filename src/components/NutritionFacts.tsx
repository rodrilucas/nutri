import { useState } from "react";
import useFoodsContext from "../hooks/useFoodsContext";
import { NutritionData } from "../schemas/types";
import useCalculateDV from "../hooks/useCalculateDV";

const NutritionFacts = () => {
  const {
    foodServings: { food },
    selectedServing,
  } = useFoodsContext();

  const [hoverInfo, setHoverInfo] = useState<null | {
    label: string;
    x: number;
    y: number;
  }>(null);

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    label: string
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2 + window.scrollX;
    const y = rect.top + window.scrollY - 12;

    setHoverInfo({ label, x, y });
  };

  const handleMouseLeave = () => {
    setHoverInfo(null);
  };

  const renderNutrientRow = (
    label: string,
    value: string | number,
    dvValue: number | null = null
  ) => (
    <div
      key={crypto.randomUUID()}
      className="flex justify-between font-semibold mt-3 border-b"
    >
      <span>{label}</span>
      <span>
        {value && dvValue !== null
          ? `${value}g ${dvValue}%`
          : value
          ? `${value}g`
          : "-"}
      </span>
    </div>
  );

  const renderNutrientSubRow = (label: string, value: string | number) => (
    <div
      key={crypto.randomUUID()}
      className="flex justify-between text-sm ml-4 mt-1"
    >
      <span>{label}</span>
      <span>{value ? `${value}g` : "-"}</span>
    </div>
  );

  const renderVitaminsMinerals = (
    label: string,
    value: string | number,
    dvValue: number | null = null
  ) => (
    <div key={crypto.randomUUID()} className="flex justify-between text-sm">
      <span>{label}</span>
      <span>
        {value && dvValue !== null
          ? `${value}mg ${dvValue}%`
          : value
          ? `${value}mg`
          : "-"}
      </span>
    </div>
  );

  const renderNutrientSection = (data: NutritionData) => [
    renderNutrientRow(
      "Gordura Total",
      data.fat,
      useCalculateDV("fat", parseFloat(data.fat || "0"))
    ),
    renderNutrientSubRow("Gordura Saturada", data.saturated_fat),
    renderNutrientSubRow("Gordura Poli-insaturada", data.polyunsaturated_fat),
    renderNutrientSubRow("Gordura Monoinsaturada", data.monounsaturated_fat),
    renderNutrientRow(
      "Colesterol",
      data.cholesterol,
      useCalculateDV("cholesterol", parseFloat(data.cholesterol || "0"))
    ),
    renderNutrientRow(
      "Sódio",
      data.sodium,
      useCalculateDV("sodium", parseFloat(data.sodium || "0"))
    ),
    renderNutrientRow(
      "Potássio",
      data.potassium,
      useCalculateDV("potassium", parseFloat(data.potassium || "0"))
    ),
    renderNutrientRow(
      "Total de Carboidratos",
      data.carbohydrate,
      useCalculateDV("carbohydrate", parseFloat(data.carbohydrate || "0"))
    ),
    renderNutrientSubRow("Fibra Alimentar", data.fiber),
    renderNutrientSubRow("Açúcares Totais", data.sugar),
    renderNutrientRow(
      "Proteína",
      data.protein,
      useCalculateDV("protein", parseFloat(data.protein || "0"))
    ),
    renderVitaminsMinerals(
      "Vitamina A",
      data.vitamin_a,
      useCalculateDV("vitamin_a", parseFloat(data.vitamin_a || "0"))
    ),
    renderVitaminsMinerals(
      "Vitamina C",
      data.vitamin_c,
      useCalculateDV("vitamin_c", parseFloat(data.vitamin_c || "0"))
    ),
    renderVitaminsMinerals(
      "Cálcio",
      data.calcium,
      useCalculateDV("calcium", parseFloat(data.calcium || "0"))
    ),
    renderVitaminsMinerals(
      "Ferro",
      data.iron,
      useCalculateDV("iron", parseFloat(data.iron || "0"))
    ),
  ];

  return (
    <div
      className="text-black bg-#f8f9fa border border-[#bcbcbc] dark:bg-[#1e2939] dark:text-white rounded-lg p-6 md:w-2xl mx-auto"
      onMouseEnter={(e) => handleMouseEnter(e, food.food_name)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-2xl font-bold border-b pb-2 mb-2">
        Informações Nutricionais
      </div>

      <div className="flex justify-between text-sm mb-1 border-b">
        <span className="font-semibold">Tamanho da Porção</span>
        <span>{selectedServing.serving_description || "-"}</span>
      </div>

      <div className="my-2" />

      <div className="flex justify-between text-base font-semibold border-b">
        <span>Calorias</span>
        <span>{selectedServing.calories || "-"}</span>
      </div>

      <div className="my-2" />

      <p className="text-xs text-right italic mb-2">
        * % Valores diários baseados em uma dieta com 2000 kcal
      </p>

      <div className="my-2" />

      {renderNutrientSection(selectedServing)}

      {hoverInfo && (
        <div
          className="absolute w-max transform p-6 -translate-x-1/2 -translate-y-full bg-neutral-800 text-white px-2 py-1 rounded text-xs pointer-events-none z-[1000]"
          style={{
            top: hoverInfo.y,
            left: hoverInfo.x,
          }}
        >
          {hoverInfo.label}
        </div>
      )}
    </div>
  );
};

export default NutritionFacts;
