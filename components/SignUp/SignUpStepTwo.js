import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  Platform,
} from "react-native";
import { Input } from "react-native-elements";
import {validatePassword} from './passwordValidate'
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Text, Button } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import Card from "../../components/UI/Card";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

// TODO go back and fix errorMessage so it conditionally renders. Right now if uncommented it shows up regardless

const SignUpStepTwo = ({user, app, props}) => {
  const [errorMessage, setErrorMessage] = useState("")
  const [errorMessageTwo, setErrorMessageTwo] = useState("")
  const [showError, setShowError] = useState(false)
  const [showErrorTwo, setShowErrorTwo] = useState(false)
  const [passwordOne, setPasswordOne] = useState("")
  const [passwordTwo, setPasswordTwo] = useState("")
  const handleValidation = () => {
    if(!validatePassword(passwordOne).pass){
      setShowError(true)
      setErrorMessage(validatePassword(passwordOne).msg)
    }
    if(validatePassword(passwordOne).pass){
      setShowError(false)
      setErrorMessage("")
    }
  }
  const comparePasswords = () => {
    if(passwordOne !== passwordTwo){
      setErrorMessageTwo("Oops. These passwords don't match")
      setShowErrorTwo(true)
    }
    if(passwordOne === passwordTwo){
      setErrorMessageTwo("")
      setShowErrorTwo(false)
      // props.setUser({...props.user, "password": passwordOne})
      props.registerUser()
    }
  }

const handlePasswordCompare = (text) => {
  if((text == passwordOne) && !showError){
    console.log("running password compare inside if ")
    console.log('props.user: ', props.user);
    props.setUser({...props.user, "password": passwordOne})
  }
}


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
        height: "100%",
      }}
      enabled="true"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flex: 1, alignContent: "center" }}>
          <View style={styles.formStyle}>
            {/* <LinearGradient
        colors={[Colors.primaryColor, Colors.accentColor]}
        style={styles.gradientStyle}
      > */}
            <Card style={styles.cardStyle}>
              <Input
                placeholder="Password"
                secureTextEntry
                label="Password"
                onChangeText={(text) => {
                  setPasswordOne(text)
              }}
              onBlur={(text) => {
                handleValidation(text)
              }}
              value={passwordOne}
                errorMessage={showError ? errorMessage : ""}
                textContentType="password"
                keyboardType="default"
                autoCapitalize="none"
                leftIcon={
                  <AntDesign
                    name="lock1"
                    size={20}
                    color="black"
                    style={styles.iconStyle}
                  />
                }
              />
              <Input
                placeholder="Confirm Password"
                secureTextEntry
                value={passwordTwo}
                label="Password"
                minLength={8}
                textContentType="password"
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={(text) => {
                  setPasswordTwo(text)
                  handlePasswordCompare(text)
              }}
              errorMessage={showErrorTwo ? errorMessageTwo : ""}
                leftIcon={
                  <AntDesign
                    name="lock1"
                    size={24}
                    color="black"
                    style={styles.iconStyle}
                  />
                }
              />
              <View style={styles.buttonContainer}>
              <Button
                bordered
                block
                onPress={() => props.setStep(1)}
                style={styles.backButtonStyle}
                title="backToLogin"
              >
                <Text style={{ color: "black"}}><AntDesign
                    name="leftcircleo"
                    size={20}
                    color="black"
                    style={styles.iconStyle}
                  /></Text>
              </Button>
              <Button
                bordered
                block
                onPress={() => {
                  comparePasswords()
                }}
                style={styles.forwardButtonStyle}
                title="nextStep"
              >
                <Text style={{ color: "black"}}><AntDesign
                    name="rightcircleo"
                    size={20}
                    color={Colors.dark.defaultPrimary}
                    style={styles.iconStyle}
                  /></Text>
              </Button>
              </View>
            </Card>
            {/* </LinearGradient> */}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: "80%",
    margin: 20,
    padding: 10,
    // justifyContent: "center",
    // alignItems: "center"
    // height: "auto",
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollStyle: {
    height: "100%",
    flex: 1,
    width: "100%",
    // padding: 24,
    // alignContent: "center",
    // alignItems: "center",
    // justifyContent: "center",
  },
  formStyle: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // flex: 1,
    justifyContent: "space-between",
    // alignItems: "flex-start"
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: Colors.defaultPrimary,
  },
  backButtonStyle: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    color: Colors.dark.dark,
    borderColor: Colors.dark.dark,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 12,
    maxWidth: 100,
  },
  forwardButtonStyle: {
      display: "flex",
      flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    color: Colors.dark.dark,
    borderColor: Colors.dark.defaultPrimary,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 12,
    // marginHorizontal: "auto",
    maxWidth: 100,
  },
  iconStyle: {
    padding: 5,
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     registerUser: () => dispatch({type: registerUser})
//   }
// }

export default connect(mapStateToProps)(SignUpStepTwo);
