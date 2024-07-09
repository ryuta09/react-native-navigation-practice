import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
  // const route = useRoute();
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return (
      <MealItem {...mealItemProps} />
    );
  }

  return (
    <View style={styles.conatiner}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 16,
  },
});
