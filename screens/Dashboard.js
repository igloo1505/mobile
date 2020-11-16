import React from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import GridTile from "../components/GridTile"
import { connect, useDispatch } from "react-redux";
import Colors from '../constants/Colors'
import { StackActions, useFocusEffect } from "@react-navigation/native";
import appLevelConstants from "../constants/appLevelConstants"
import { LinearGradient } from "expo-linear-gradient";


const Dashboard = ({user, app}) => {
  const redirectAndLoad = () => {}
  console.log('user: ', user);
  console.log('app: ', app);
  const renderGridItem = (itemData) => {
    return (
      <GridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => redirectAndLoad(itemData)}
      />
    );
  };
  timerArray = [
    {
      id: "1",
      title:"River West",
      color: "#f5428d"
    },
    {
      id: "2",
      title:"Timer Two",
      color: "#f54242"
    }
  ]
  
  return (
    <View id="dashboard">
      <Text>Dashboard Goes here</Text>
      <ScrollView>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={timerArray}
        numColumns={2}
        renderItem={renderGridItem}
      />
    </ScrollView>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  app: state.app,
  props: ownProps
})

export default connect(mapStateToProps)(Dashboard);
