import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import LoginScreen from "./src/screens/LoginScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component : ComponentScreen,
    List : ListScreen,
    Login : LoginScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Memo",
    },
  }
);

export default createAppContainer(navigator);
