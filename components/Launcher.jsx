import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Menu from "./Menu";
import Registration from "./Registration";
import Billing from "./Billing";
import Pay from "./Pay";
import Profile from "./Profile";
import ThankYou from "./ThankYou";

function Launcher() {
  var stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="go-Login" component={Login}></stack.Screen>
        <stack.Screen
          name="go-Registration"
          component={Registration}
        ></stack.Screen>
        <stack.Screen name="go-Menu" component={Menu}></stack.Screen>
        <stack.Screen name="go-Profile" component={Profile}></stack.Screen>
        <stack.Screen name="go-Bill" component={Billing}></stack.Screen>
        <stack.Screen name="go-Pay" component={Pay}></stack.Screen>
        <stack.Screen name="go-ThankYou" component={ThankYou}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default Launcher;
