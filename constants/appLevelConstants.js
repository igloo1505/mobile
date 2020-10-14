export const globalColors = {
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
    color: Colors.defaultPrimary,
    marginVertical: 16,
  },
  defaultButtonTextStyle: {
    color: Colors.defaultPrimary,
    paddingHorizontal: 16,
  },
  defaultBackButtonTextStyle: {
    color: Colors.dark,
    paddingHorizontal: 16,
  },
  defaultBackButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    color: Colors.dark,
    // width: "100%",
    // marginVertical: 5,
  },
};

export const DefaultNavOptions = (navData) => {
  return {
    headerTitle: "Event Driven MKE",
    headerStyle: {
      // backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      backgroundColor: Colors.primaryColor,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    headerLeft: () => <HeaderButtonComponent />,
    // headerTintColor:   Platform.OS === "android" ? Colors.textColor :
    // Colors.primaryColor,
    headerTintColor: globalColors.l.textColor,
  };
};
