import { useState } from "react"
import { Button, StyleSheet, TextInput, View, Image, Text, TouchableOpacity, Alert } from "react-native"

const LoginComponent = () => {

    const[username, setUserName] = useState("")
    const[password, setPassword] = useState("")

    const onPress = () =>{
        if(username.length == 0 || password.length == 0)
        {
            Alert.alert(`Thông báo`,`Vui lòng nhập đầy đủ thông tin`)
        }
        else{
            Alert.alert(`Thông báo`,`Đăng nhập\n username: "${username}"\n password: "${password}"`)
        }
    
    }

    return(
            <View style={LoginStyle.container }>
                <Image resizeMode="stretch" style={{width:350, height:250}} source={require("../assets/favicon.png")} />
                <Text 
                    onPress={()=>{
                        Alert.alert(`Thông báo`,`Đăng ký`)
                    }}
                    style={{alignSelf:"flex-end", marginRight:18 , fontStyle:"italic"}}>REGISTER</Text>
                <TextInput 
                    onChangeText={setUserName}
                    style={LoginStyle.textInput} 
                    placeholder="USERNAME"
                    value={username}/>
                <TextInput 
                    onChangeText={setPassword}
                    style={LoginStyle.textInput} 
                    value={password}
                    secureTextEntry= {true}
                    placeholder="PASSWORD"/>
                <TouchableOpacity 
                    onPress={onPress}
                    style={LoginStyle.button}>
                    <Text style={LoginStyle.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
    )
}
export default LoginComponent
var LoginStyle = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
        alignItems: "center",
        justifyContent:"center"
    },
    textInput:{ 
        width:350,
        height:60,
        padding:10,
        marginTop:8,
        borderColor:"blue",
        borderWidth:1,
        borderRadius:8,
        backgroundColor:"azure"
    },
    backgroundImg:{
        flex: 1,
        width: null,
        height: null,  
    },
    button:{
        width: 350,
        backgroundColor:"blue",
        marginTop:15,
        padding: 10,
      
    },
    buttonText:{
        textAlign: "center",
        fontSize:18,
        fontWeight:"bold",
        color:"white"
    }
})