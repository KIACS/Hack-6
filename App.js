import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import InitialScreen from "./src/screens/InitialScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

const navigator = createStackNavigator(
  {
    Initial : InitialScreen,
    Home : HomeScreen,
    Component : ComponentScreen,
    List : ListScreen,
    Login : LoginScreen,
    Signup : SignupScreen
  },
  {
    initialRouteName: "Initial",
    defaultNavigationOptions: {
      title: "Memo",
    },
  }
);

export default createAppContainer(navigator);
