
export const validatePassword = (password) => {
    const specials = ["!", ".", "/", "?", ">", "<", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", " =", "[", "]", "{", "}", "|", "`" ]
    // console.log("running validate as ...", password)
    const containsSpecial = () => {
        let L = password.length
        let count = 0;
        for(var i = 0; i < L; i ++){
            if(specials.indexOf(password[i]) === -1){
                count++;
            }
        }
        if(count === L){
            return false
        }
        else {
            return true
        }
    }
    const containsUpper = () => {
        let x = password.toLowerCase()
        if(x === password){
            return false
        }
        else {
            return true
        }
    }
    if(containsUpper() && containsSpecial()){
        return {
            pass: true
        }
    }
    if(!containsSpecial()){
        return {
            pass: false,
            msg: "Be sure to add a special character"
        }
    }
    if(!containsUpper()){
        return {
            pass: false,
            msg: "You must add a capital letter!"
        }
    }
}