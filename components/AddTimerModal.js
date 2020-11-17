import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import {connect, useDispatch} from 'react-redux'
import {TOGGLE_ADD_TIMER_MODAL} from '../stateManagement/actions/Types'

const AddTimerModal = ({user, app, props}) => {
    const dispatch = useDispatch()
    const toggleModal = () => {
        dispatch({type: "TOGGLE_ADD_TIMER_MODAL"})
    }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        visible={app.showAddTimerModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
        presentationStyle="formSheet"
      >
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <View style={styles.closeModalView}> 
        <Text style={styles.closeModal}>
        <AntDesign
        name="close"
        size={20}
        color="black"
        onPress={() => toggleModal()}
        />
        </Text>
      </View>
          <View style={styles.modalViewInner}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                toggleModal()
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  centeredViewModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalViewInner: {
    padding: 35,
    alignItems: "center",
  },
  outerModal: {
    //   marginTop: 25
    margin: 20,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  closeModalView: {
    alignSelf: "flex-start",
    marginRight: 5,
    marginLeft: "auto",
    marginTop: 5,
},
closeModal: {
    // verticalAlign: "top",
    top: 5,
    marginTop: 5,
    right: 5
  }
});

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
    app: state.app,
    props: ownProps
})

export default connect(mapStateToProps)(AddTimerModal)