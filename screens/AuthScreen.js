import React, { useState } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
} from "react-native";
import { Input } from "react-native-elements";

// import SignUpForm from "../components/SignUpForm";
// import SignInForm from "../components/SignInForm";
import { connect } from "react-redux";
import { Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// import Card from "../components/UI/Card";
import { LinearGradient } from "expo-linear-gradient";
// import { loginUser } from "../actions/userActions";
// import Input from "../components/UI/Input";
import Colors from "../constants/Colors";
import BottomTabNavigator from "../navigation/BottomTabNavigator";

// TODO go back and fix errorMessage so it conditionally renders. Right now if uncommented it shows up regardless

// !! props used once redux setup
// { user, layout: { signUpForm }, props, loginUser }
const AuthScreen = () => {
  let [signUp, setSignUp] = useState(false);

  return (
    <View style={styles.mainView}>
      <LinearGradient
        colors={[Colors.dark.primaryColor, Colors.dark.accentColor]}
        style={styles.gradientStyle}
      >
        <Text>Test</Text>
      </LinearGradient>
    </View>
  );
};

// AuthScreen.navigationOptions = {
//   headerTitle: "Event Driven MKE",
//   headerStyle: {
//     backgroundColor: Colors.primaryColor,
//   },
//   headerTintColor: Colors.textColor,
// };

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gradientStyle: {
    height: "100%",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

// const mapStateToProps = (state, ownProps) => ({
//   user: state.user,
//   layout: state.layout,
//   props: ownProps,
// });

export default AuthScreen;
// export default connect(mapStateToProps)(AuthScreen);
