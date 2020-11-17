import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SignUpStepOne from './SignUpStepOne'
import SignUpStepTwo from './SignUpStepTwo'
import {registerUser} from '../../stateManagement/actions/userActions'
import {connect} from 'react-redux'

const SignUpStepForm = ({userFromState, app, props, register}) => {
    const [step, setStep] = useState(1)
    const [user, setUser] = useState({
        name: "",
        email: "",
        age: 0,
        password: ""
    })
    useEffect(()=> {
        let User = { 
            name: user.name,
            age: user.age,
            email: user.email,
            password: user.password,
        }
        console.log("User in here", User)
    }, [user])
    const registerUser = () => {
    let User = { 
            name: user.name,
            age: user.age,
            email: user.email.toLowerCase(),
            password: user.password,
        }
        register(User)
        console.log("\r\n\r\n USER \r\n\r\n", User)
    }
        return (
        <View style={styles.viewStyle}>
            {step === 1 && <SignUpStepOne toggleLogin={props.toggleLogin} setUser={setUser} user={user} setStep={setStep}/>}
            {step === 2 && <SignUpStepTwo setUser={setUser} user={user} setStep={setStep} registerUser={registerUser} />}
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        width: "100%",
        flex: 1,
    }
})

const mapStateToProps =(state, ownProps) => {
    return {
        app: state.app,
        userFromState: state.user,
        props: ownProps
    }
}



export default connect(mapStateToProps, {register: registerUser})(SignUpStepForm)
