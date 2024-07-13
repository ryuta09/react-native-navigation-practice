import { useLayoutEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MeanDetail/SubTitle";
import List from "../components/MeanDetail/List";
import IconButton from "../components/IconButton";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);


  function headerButtonPressHandeler() {
    console.log('Button pressed')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="star" color="white" onPress={headerButtonPressHandeler}/>
      }
    })
  }, [navigation, headerButtonPressHandeler])

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuter}>
        <View style={styles.listContainer}>
          <View style={styles.subTitleContainer}>
            <SubTitle>ingredients</SubTitle>
          </View>
          <List data={selectedMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuter: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
