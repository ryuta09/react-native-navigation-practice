import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  // const route = useRoute();
  const catId = route.params.categoryId;
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  return(
    <MealList items={displayMeals} />
  )
}

export default MealsOverviewScreen;
