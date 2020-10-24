import Colors from "./Colors";
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/UI/HeaderButton";

export const AppConstants = {
  serverRoot: "https://c87c182c2de1.ngrok.io",
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
