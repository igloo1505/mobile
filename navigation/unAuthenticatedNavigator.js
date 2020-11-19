import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import { connect, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import AuthScreen from "../screens/AuthScreen";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from "@react-navigation/native";
import {
  AppConstants,
  defaultNavigationOptions,
} from "../constants/appLevelConstants";

const UnauthenticatedStack = createStackNavigator();

const UnauthenticatedTree = (props) => {
  return (
    <UnauthenticatedStack.Navigator>
      <UnauthenticatedStack.Screen
        name="login"
        component={AuthScreen}
        options={defaultNavigationOptions}
      />
    </UnauthenticatedStack.Navigator>
  );
};

export const UnauthenticatedDrawer = (props) => {
  const NewDrawer = createDrawerNavigator();
  return (
    <NewDrawer.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <DrawerItemList {...props} />
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{ activeTintColor: Colors.primaryColor }}
    >
      <NewDrawer.Screen
        name="Login"
        component={UnauthenticatedTree}
        options={defaultNavigationOptions}
      />
    </NewDrawer.Navigator>
  );
};

// <NewDrawer.Screen
//         name="About"
//         component={aboutStack}
//         options={defaultNavigationOptions}
//       />
