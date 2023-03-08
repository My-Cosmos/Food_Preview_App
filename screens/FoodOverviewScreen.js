import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import FoodItem from "../components/FoodItem";
import { MEALS } from "../data/dummy-data";
// import { useRoute } from "@react-navigation/native"; //safe functionality as useNavigate() hook for just to access the route
/**
 * First register This screen componenet as an additional screen in App.js's <NavigatorContainer></NavigatorContainer>
 *
 */
/**
 * Just like we get **navigation** prop byDefault when we register for screen. Just like that we get **route** prop byDefault.
 */
const FoodOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    const ans = mealItem.categoryIds.indexOf(catId) >= 0;
    console.log(ans);
    return ans;
  });

  const renderFoodItem = (itemData)=>{
    return <FoodItem title={itemData.item.title} />
  }

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={(item)=> item.id} renderItem={renderFoodItem}/>
    </View>
  );
};

export default FoodOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
