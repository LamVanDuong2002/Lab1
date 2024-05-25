import { useState } from "react"
import { Button, StyleSheet, TextInput, View, Image, Text, TouchableOpacity, ImageBackground, Alert } from "react-native"

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
        <ImageBackground style={LoginStyle.backgroundImg}  source={{uri:'https://i.pinimg.com/564x/42/a2/34/42a234a6d84c0834abd409a9ccd11503.jpg'}}>        
            <View style={LoginStyle.container }>
                <Image resizeMode="stretch" style={{width:350, height:250}} source={require("../assets/react-native-logo.png")} />
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
    </ImageBackground>

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
    childContainer:{

    },
    textInput:{
        
        width:350,
        height:60,
        padding:10,
        marginTop:8,
        borderColor:"royalblue",
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
        backgroundColor:"dodgerblue",
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