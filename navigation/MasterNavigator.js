import React, { Component } from "react";
import {
  AppConstants,
  DefaultNavOptions,
} from "../constants/appLevelConstants";
import { UnauthenticatedDrawer } from "./UnAuthenticatedNavigator";
import { Spinner } from "native-base";
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from "@react-navigation/native";

//! Props used once redux setup
// { user, loading, props }
const MasterNavigator = () => {
  let loading = loading || false;
  // props = props || {};
  let user = user || {};
  // let isAuthenticated = user.loggedIn || false;
  // loading = false;
  if (!loading) {
    return (
      <NavigationContainer>
        <UnauthenticatedDrawer />
      </NavigationContainer>
    );
  } else if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Spinner color={Colors.primaryColor} />
      </View>
    );
  }
};

export default MasterNavigator;
