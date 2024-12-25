import { Button } from "react-native-paper";
import { View, Text } from "react-native";

function ThankYou(props) {
  const ThankYou = () => {
    props.navigation.navigate("go-Menu");
  };

  return (
    <View>
      <Text>ThankYou Page</Text>
      <Button onPress={ThankYou}> ThankYou</Button>
    </View>
  );
}

export default ThankYou;
