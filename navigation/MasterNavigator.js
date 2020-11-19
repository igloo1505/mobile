import React, { useState } from "react";
import {
  AppConstants,
  DefaultNavOptions,
} from "../constants/appLevelConstants";
import { AsyncStorage } from "react-native";
import { UnauthenticatedDrawer } from "./UnAuthenticatedNavigator";
import  AuthenticatedDrawer, {RootAuthTree}  from "./authenticatedNavigator";
import { Spinner } from "native-base";
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from "@react-navigation/native";
import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import { connect, useDispatch } from "react-redux";

//! Props used once redux setup
// { user, loading, props }
// !! Add user back into props, just avoiding login screen for now
const MasterNavigator = ({  user, app, props }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // if (user.loggedIn) {
  //   setIsLoggedIn(true);
  // }
  console.log("user", user);
  let loading = loading || false;
  const navigationRef = React.useRef();

  if (!loading) {
    return (
      <NavigationContainer >
        {user.loggedIn ? <RootAuthTree/> : <UnauthenticatedDrawer/>}
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
  props: ownProps
  // medication: state.medication
});

export default connect(mapStateToProps)(MasterNavigator);
