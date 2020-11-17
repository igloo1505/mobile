import Colors from "./Colors";
import React, {useState} from "react";
import CustomHeaderButton from "../components/UI/HeaderButton";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import AddTimerModal from '../components/AddTimerModal'



const ReusableItem = ({ onPress }) => <Item title="Edit" onPress={onPress} />
const AddTimer = (view) => <AddTimerModal/>

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} color={Colors.dark.textColor} {...props} />
);


export const AppConstants = {
  serverRoot: "https://1ac8dfc8bbed.ngrok.io",
  colorArray: [
    "#f5428d",
    "#f54242",
    "#f5a442",
    "#f5d142",
    "#368dff",
    "#41d95d",
    "#9eecff",
    "#b9ffb0",
    "#ffc7ff",
    "#47fced",
  ],
  defaultCardStyle: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  defaultConfirmCard: {
    marginVertical: 6,
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  defaultConfirmText: {
    textAlign: "center",
    paddingVertical: 5,
  },
  defaultButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    color: Colors.light.defaultPrimary,
    marginVertical: 16,
  },
  defaultButtonTextStyle: {
    color: Colors.light.defaultPrimary,
    paddingHorizontal: 16,
  },
  defaultBackButtonTextStyle: {
    color: Colors.light.dark,
    paddingHorizontal: 16,
  },
  defaultBackButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    color: Colors.light.dark,
    // width: "100%",
    // marginVertical: 5,
  },
};

export const defaultNavigationOptions = (navData) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  return {
    headerTitle: "Medication Timer",
    headerStyle: {
      backgroundColor: Colors.dark.primaryColor,
    },
    headerTintColor: Colors.dark.textColor,
    // headerTitleStyle: {

    // },
    // headerTextStyle: {},
    // headerTitleColor: {

    // },
    // headerBackTitleStyle: {}
    // headerBackTitleColor: {}
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

  };
};

export const authenticatedNavigationOptions = (navData) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const setModalView = () => setModalIsVisible(!modalIsVisible)
  return {
    headerTitle: "Medication Timer",
    headerStyle: {
      backgroundColor: "transparent"
    },
    headerTintColor: Colors.dark.textColor,
    // headerTitleStyle: {

    // },
    // headerTextStyle: {},
    // headerTitleColor: {

    // },
    // headerBackTitleStyle: {}
    // headerBackTitleColor: {}
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
          <HiddenItem title="Add Timer" onPress={() => {
            console.log("Add Timer here")

          }} style={{color: Colors.dark.textColor, fontSize: 50, textColor: Colors.dark.textColor}}/>
        </OverflowMenu>
      </HeaderButtons>
    )
  };
};