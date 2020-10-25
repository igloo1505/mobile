import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SignUpStepOne from './SignUpStepOne'
import SignUpStepTwo from './SignUpStepTwo'

const SignUpStepForm = (props) => {
    const [step, setStep] = useState(1)
    const [user, setUser] = useState({})
    useEffect(()=> {
        console.log(user)
    }, [user])
    const registerUser = () => {
        console.log("\r\n\r\n USER \r\n\r\n", user)
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

export default SignUpStepForm
