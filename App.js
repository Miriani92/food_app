import SearchScreen from "./src/screen/SearchScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Show from "./src/screen/Show";

const Stack = createStackNavigator();

function MyStack({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{ headerMode: "screen" }}
      >
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: "Business App",
          }}
        />

        <Stack.Screen
          name="Show"
          component={Show}
          options={{
            title: "Results Show",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
