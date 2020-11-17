import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import { connect, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Dashboard from "../screens/Dashboard";
import AuthScreen from "../screens/AuthScreen";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';

import {logoutUser} from '../stateManagement/actions/userActions'
import LOGOUT_USER from "../stateManagement/actions/Types"
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
  useIsFocused
} from "@react-navigation/native";
import {
  AppConstants,
  defaultNavigationOptions,
  authenticatedNavigationOptions
} from "../constants/appLevelConstants";


const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} color="blue" {...props} />
);


const AuthenticatedStack = createStackNavigator();

const AuthenticatedTree = (props) => {
  return (
    <AuthenticatedStack.Navigator>
      <AuthenticatedStack.Screen
        name="dashboard"
        component={Dashboard}
        options={authenticatedNavigationOptions}
      />
    </AuthenticatedStack.Navigator>
  );
};


const LogoutStack = createStackNavigator();

const logoutStack = (props) => {
  return (
    <LogoutStack.Navigator>
    <LogoutStack.Screen
    name="login"
    component={AuthScreen}
    options={authenticatedNavigationOptions}
    />
    </LogoutStack.Navigator>
  )
}




 const AuthenticatedDrawer = (props) => {
   const Drawer = createDrawerNavigator();
  const handleLogout = (navStuff) => {
    console.log("navStuff", navStuff)
    console.log("props", props)
    props.logOut()
    navStuff.navigate("login")
}

  return (
    <Drawer.Navigator
    drawerContent={({navigation}) => {
      // console.log('props: ', props);
      // let navData = props

        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerItem
            label="Dashboard"
            onPress={() => navigation.navigate("Dashboard")}
            activeTintColor={Colors.dark.textColor}
        activeBackgroundColor= {Colors.dark.textColor}
        inactiveTintColor={Colors.dark.textColor}
            />  
              <DrawerItem
        label="Log Out"
        onPress={() => handleLogout(navigation)}
        activeTintColor={Colors.dark.textColor}
        activeBackgroundColor= {Colors.dark.textColor}
        // inactiveBackgroundColor={Colors.dark.textColor}
        inactiveTintColor={Colors.dark.textColor}
      />
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        // activeTintColor: Colors.dark.prim'aryColor, 
        activeTintColor: '#e91e63',
        activeBackgroundColor: Colors.dark.primaryColor,
        inactiveBackgroundColor: '#e91e63',
        inactiveTintColor: '#e91e63'
      }}
      // drawerContentOptions={{ activeTintColor: Colors.primaryColor }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={AuthenticatedTree}
        options={defaultNavigationOptions}
      /> 
      <Drawer.Screen
      name="login"
      component={logoutStack}
      options={defaultNavigationOptions}
      />
    </Drawer.Navigator>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
return {
  logOut: () => dispatch({ type: 'LOGOUT_USER'})
}
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedDrawer)
// export default AuthenticatedDrawer