import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

/**
 * This **navigation** prop is a special prop. That is Provides to those components which will use inside
 * <NavigationContainer>
        <stack.Navigator>
          <stack.Screen/>   <---Only This <stack.screen/> component.
        </stack.Navigator>
      </NavigationContainer> 
 */
export default function CategoriesScreen({ navigation }) {
  function renderHelper(itemData) {
    function pressHandler() {
      navigation.navigate(
        "FoodOverviewScreen", //<-- This is the target ScreenName
        {
          categoryId: itemData.item.id,
        }
      ); //This navigate method is provided by react-nativigation on This navigation object which we receive as a prop.
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        _onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderHelper}
      numColumns={2} //to render items in columns
    />
  );
}
