import { Text, View } from "react-native";

const FoodItem = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default FoodItem;
