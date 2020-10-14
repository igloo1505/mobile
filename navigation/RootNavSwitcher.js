import { View, Text, Button, SafeAreaView } from "react-native";
import { connect, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import AuthScreen from "../screens/AuthScreen";
import AboutScreen from "../screens/About";
import { createStackNavigator } from "@react-navigation/stack";
import { Spinner } from "native-base";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from "@react-navigation/native";
import AppConstants, { DefaultNavOptions } from "../constants/AppConstants";

const UnauthenticatedStack = createStackNavigator();
const AuthenticatedStack = createStackNavigator();

export const UnauthenticatedTree = (props) => {
  return (
    <UnauthenticatedStack.Navigator>
      <UnauthenticatedStack.Screen
        name="login"
        component={AuthScreen}
        options={defaultNavOptions}
      />
    </UnauthenticatedStack.Navigator>
  );
};
