import React from "react";
import { View } from "react-native";
import { Text } from "react-native";

const Welcome=()=>{
    return (
        <>
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}>

        <Text>Hello</Text>
        </View>
        </>
    )
}

export default Welcome;