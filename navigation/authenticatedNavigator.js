import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import { connect, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Dashboard from "../screens/Dashboard";
import AuthScreen from "../screens/AuthScreen";
import AddTimerModal from '../components/AddTimerModal'
import CustomHeaderButton from "../components/UI/HeaderButton";
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
import {LOGOUT_USER, TOGGLE_ADD_TIMER_MODAL} from "../stateManagement/actions/Types"
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


const ShowAddTimer = (props) => {
  return (<AddTimerModal show={props.show}/>)
}

const AuthenticatedStack = createStackNavigator();



const AuthenticatedTree = (
) => {

  const dispatch = useDispatch()
  const ReusableItem = ({ onPress }) => <Item title="Edit" onPress={onPress} />

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} color={Colors.dark.textColor} {...props} />
);

  const navOptions = () => {
    return {
      headerTitle: "Medication Timer",
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTintColor: Colors.dark.textColor,
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
   
  
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <ReusableItem onPress={() => alert('Edit')} />
          <OverflowMenu
            style={{ marginHorizontal: 10 }}
            OverflowIcon={<Ionicons name="ios-more" size={23} color={Colors.dark.textColor} />}
          >
            <HiddenItem title="Add Timer MothaFuckaaaa" onPress={() => {
              console.log("Add Timer here")
              dispatch({ type: 'TOGGLE_ADD_TIMER_MODAL'})
  
            }} style={{color: Colors.dark.textColor, fontSize: 50, textColor: Colors.dark.textColor}}/>
          </OverflowMenu>
        </HeaderButtons>
      )
    }
  }



  return (
    <AuthenticatedStack.Navigator
    >
    <AuthenticatedStack.Screen
    name="dashboard"
    component={Dashboard}
        options={navOptions}
      />
      <AuthenticatedStack.Screen
      name="addTimer"
      component={ShowAddTimer}
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
   console.log('props in navigator ', props);
   const Drawer = createDrawerNavigator();
  const handleLogout = (navStuff) => {
    console.log("navStuff", navStuff)
    console.log("props", props)
    props.logOut()
    navStuff.navigate("login")
}
const toggleModal = () => {
  props.toggleModal()
}


  return (
    <Drawer.Navigator
    drawerContent={({navigation}) => {
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
        toggleModal={toggleModal}
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
    user: state.user,
    app: state.app
  }
}
const mapDispatchToProps = (dispatch) => {
return {
  logOut: () => dispatch({ type: 'LOGOUT_USER'}),
  toggleModal: () => dispatch({ type: 'TOGGLE_ADD_TIMER_MODAL'})
}
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedDrawer)

export const someFunc = () => {toggleModal}