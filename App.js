import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreateUserScreen from "./components/CreateUserScreen";
import UserListScreen from "./components/UserListScreen";
import UserDetailsScreen from "./components/UserDetailsScreen";

import { UserProvider } from "./context/UserContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Users"
        component={UserListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Create User" component={CreateUserScreen} />
          <Tab.Screen name="Users List" component={UserStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
