import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component : ComponentScreen,
    List : ListScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Memo",
    },
  }
);

export default createAppContainer(navigator);
