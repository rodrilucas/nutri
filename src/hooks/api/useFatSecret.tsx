import useFoodsContext from "../useFoodsContext";

function useFatSecret() {
  const { setIsLoading, setIsLoadingInfo } = useFoodsContext();
  const searchFood = async (foodName: string, page = 1) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://nutriapi.onrender.com/api/v1/food/search?foodName=${encodeURIComponent(
          foodName
        )}&page=${page}`
      );

      if (!res.ok) throw new Error("Erro ao buscar alimentos");
      return await res.json();
    } catch (err) {
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const searchFoodById = async (id: string) => {
    setIsLoadingInfo(true);
    try {
      const res = await fetch(
        `https://nutriapi.onrender.com/api/v1/food/search/${id}`
      );
      if (!res.ok) throw new Error("Erro ao buscar informações do alimento");
      return await res.json();
    } catch (err) {
      return null;
    } finally {
      setIsLoadingInfo(false);
    }
  };

  return { searchFood, searchFoodById };
}

export default useFatSecret;
