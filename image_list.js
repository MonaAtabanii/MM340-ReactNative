import React, { Component } from 'react'
import {Image} from 'react-native'

const newLocal = 'C:\Users\nonyc\AndroidStudioProjects\MM340ReactNative\contactList.jpg'
const ImageList = () =>(
    <Image source={require(newLocal)} 
        style={{width:200, height:200}}
    />
)
export default ImageList