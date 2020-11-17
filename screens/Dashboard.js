import React, {useLayoutEffect, useEffect, useState} from "react";
import { View, Text, ScrollView, StyleSheet, FlatList, SafeAreaView } from "react-native";
import GridTile from "../components/GridTile"
import AddTimerModal from "../components/AddTimerModal"
import { connect, useDispatch } from "react-redux";
import Colors from '../constants/Colors'


const Dashboard = ({user, app, props}) => {
  console.log('props: ', props);

  const redirectAndLoad = () => {}
  // console.log('user: ', user);
  // console.log('app: ', app);
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
    <AddTimerModal visible={app.showAddTimerModal}/>
      <SafeAreaView >
      <FlatList
      keyExtractor={(item, index) => item.id}
      data={timerArray}
      numColumns={2}
      renderItem={renderGridItem}
      />
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  app: state.app,
  props: ownProps
})

export default connect(mapStateToProps)(Dashboard);
