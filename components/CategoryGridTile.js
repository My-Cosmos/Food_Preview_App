import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
// import { useNavigation } from '@react-navigation/native'

const CategoryGridTile = ({ title, color, _onPress }) => {
  /*
  //006/008/02:33
  //can use useNavigation Hook no matter if it is registered or not in <stack.screen>.
  const navigation = useNavigation();//by this will get access to the **navigation** object of **CategoriesScreen.js** file
  //This is the alternative of passing **navigation** object through props when a component is not registered in <stack.screen> but still want to access it(if it's a case).
  */
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={_onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4, // for shadowing in Android
    /*  --My-Code--        Starts  */
    // shadowing for ios
    backgroundColor: 'white',
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",

    //
    /* Ends */
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",  
    borderRadius: 8
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
