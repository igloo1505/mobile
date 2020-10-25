import React, { useState, useCallback } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
} from "react-native";
import {SET_FOCUSED} from '../stateManagement/actions/Types'
import LoginForm from "../components/LoginForm";
import SignUpStepForm from "../components/SignUp/SignUpStepForm";
import { LinearGradient } from "expo-linear-gradient";
// import Input from "../components/UI/Input";
import Colors from "../constants/Colors";
import { connect, useDispatch } from "react-redux";
import {useFocusEffect} from '@react-navigation/native'

// TODO go back and fix errorMessage so it conditionally renders. Right now if uncommented it shows up regardless

// !! props used once redux setup
// { user, layout: { signUpForm }, props, loginUser }
const AuthScreen = ({ user, app, setFocused }) => {
  useFocusEffect(
    useCallback(() => {
       setFocused()
    }, [])
    )
    const [login, setLogin] = useState(true)
    const toggleLogin = () => {
      setLogin(!login)
    }
  return (
    <View style={styles.mainView}>
      <LinearGradient
        colors={[Colors.dark.primaryColor, Colors.dark.accentColor]}
        style={styles.gradientStyle}
      >
     {login? 
      <LoginForm toggleLogin={toggleLogin} /> : 
      <SignUpStepForm toggleLogin={toggleLogin}/>
    } 
      </LinearGradient>
    </View>
  );
};

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

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  app: state.app,
  props: ownProps,
});
const mapDispatchToProps = (dispatch) => {
  return {
    setFocused: () => dispatch({ type: SET_FOCUSED, payload: "login"})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
