import { NavigationContainer } from "@react-navigation/native"; //Step:- 1
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import FoodOverviewScreen from "./screens/FoodOverviewScreen";

/**
 * Now **stack** actually is an object with 2 Properties. Where every property holds an object that acts as an component
 */
const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="dark-content"
        showHideTransition="slide"
        // hidden={true}
      />
      <NavigationContainer>
        {/*Step:- 1*/}
        <stack.Navigator>
          {/* The **screen** component is a component which will allows us to Register a screen which will be managed by the **navigator**. Also we can configure multiple screens */}
          <stack.Screen
            name="CategoriesScreen"
            component={CategoriesScreen}
            //this **name** will have unique for every screen, (can be anything).
            //this **component** used to serve as a screen, can also considered as just a pointer of that screen{eexample:- Here it is <CategoriesScreen /> component}.
          />
          <stack.Screen name="FoodOverviewScreen" component={FoodOverviewScreen} />
        </stack.Navigator>
        {/* <CategoriesScreen />//no need because I wrapped it **Stack.screen** for enabling navigation */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
