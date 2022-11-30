import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./components/WelcomeScreen";
import UserScreen from "./components/UserScreen";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "green" },
          headerTintColor: "white",
          // drawerActiveBackgroundColor: "lightgreen",
          // drawerActiveTintColor: "grey",
          // drawerStyle: {
          //   backgroundColor: "#ccc",
          // },
          tabBarActiveTintColor: "purple",
        }}
      >
        <Tabs.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            // for drawer
            // drawerLabel: "WannaCome",
            // drawerIcon: ({ color, size }) => {
            //   return (
            //     <>
            //       <Ionicons name="home" color={color} size={size} />
            //     </>
            //   );
            // },
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="home" color={color} size={size} />;
            },
          }}
        />
        <Tabs.Screen
          name="User"
          component={UserScreen}
          options={{
            // for drawer
            // drawerLabel: "My Boi",
            // drawerIcon: ({ color, size }) => {
            //   return (
            //     <>
            //       <Ionicons name="person" color={color} size={size} />
            //     </>
            //   );
            // },
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="person" color={color} size={size} />;
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
