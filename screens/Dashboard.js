import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";

const Dashboard = ({user, app}) => {
  return (
    <View>
      <Text>Dashboard Goes here</Text>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  app: state.app,
  props: ownProps
})

export default connect(mapStateToProps)(Dashboard);
