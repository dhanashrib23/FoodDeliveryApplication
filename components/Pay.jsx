import { Button } from "react-native-paper";
import { View, Text } from "react-native";

function Pay(props) {
  const ThankYou = () => {
    props.navigation.navigate("go-ThankYou");
  };

  return (
    <View>
      <Text>Payments</Text>
      <Button onPress={ThankYou}> See Receipt</Button>
    </View>
  );
}

export default Pay;
