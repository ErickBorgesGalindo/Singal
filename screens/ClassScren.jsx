import React from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import BackBtn from '../components/BackBtn';
import Styles from '../components/Styles';


const ClassScren = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Image style={Styles.imageBackground} source={require('../images/00_image.jpg')} />
            <BackBtn onPress={()=> navigation.goBack()}/>

            <View style={Styles.ViewContainer}>

            </View>
        </View>
    )
}

export default ClassScren