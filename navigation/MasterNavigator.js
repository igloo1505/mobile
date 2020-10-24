import React, { useState } from "react";
import {
  AppConstants,
  DefaultNavOptions,
} from "../constants/appLevelConstants";
import { AsyncStorage } from "react-native";
import { UnauthenticatedDrawer } from "./UnAuthenticatedNavigator";
import  AuthenticatedDrawer  from "./authenticatedNavigator";
import { Spinner } from "native-base";
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from "@react-navigation/native";
import { connect, useDispatch } from "react-redux";

//! Props used once redux setup
// { user, loading, props }
const MasterNavigator = ({ user, app }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // if (user.loggedIn) {
  //   setIsLoggedIn(true);
  // }
  let loading = loading || false;
  // props = props || {};

  // console.log(user);
  // console.log(app);

  // let isAuthenticated = user.loggedIn || false;
  // loading = false;
  if (!loading) {
    return (
      <NavigationContainer>
        {user.loggedIn ? <AuthenticatedDrawer /> : <UnauthenticatedDrawer />}
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

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  app: state.app,
  // medication: state.medication
});

export default connect(mapStateToProps)(MasterNavigator);
