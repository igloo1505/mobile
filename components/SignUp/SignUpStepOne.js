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
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Text, Button } from "native-base";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../../components/UI/Card";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

// TODO go back and fix errorMessage so it conditionally renders. Right now if uncommented it shows up regardless

const SignUpStepOne = ({ user, app, props}) => {
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
                placeholder="Name"
                label="Name"
                onChangeText={(text) => {
                    props.setUser({...props.user, "name": text})
                }}
                textContentType="givenName"
                keyboardType="default"
                autoCapitalize="words"
                leftIcon={
                  <AntDesign
                    name="user"
                    size={20}
                    color="black"
                    style={styles.iconStyle}
                  />
                }
              />
              <Input
                placeholder="Email"
                // secureTextEntry
                label="Email"
                minLength={8}
                textContentType="emailAddress"
                keyboardType="email-address"
                onChangeText={(text) => {
                    props.setUser({...props.user, "email": text})
                }}
                // errorMessage="Please enter a valid password"
                leftIcon={
                  <AntDesign
                    name="mail"
                    size={24}
                    color="black"
                    style={styles.iconStyle}
                  />
                }
              />
              <Input
                placeholder="Age"
                // secureTextEntry
                label="Age"
                keyboardType="number-pad"
                onChangeText={(text) => {
                    props.setUser({...props.user, "age": text})
                }}
                // errorMessage="Please enter a valid password"
                leftIcon={
                  <MaterialCommunityIcons
                    name="sort-numeric"
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
                onPress={() => props.toggleLogin()}
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
                onPress={() => props.setStep(2)}
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

export default connect(mapStateToProps)(SignUpStepOne);
