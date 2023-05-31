import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react';
import { Entypo } from '@expo/vector-icons';

const FlatCardView = ({ClassName, duration, ImageSource, onPress}) => {
    return (
        <View style={styles.flatCard}>
            <Image style={styles.flatCardImg} source={ImageSource} />
            <Text style={styles.flatCardTxtMain}>{ClassName}</Text>
            <Entypo name="chevron-right" size={24} color="#fff" marginTop={30} marginLeft={15} onPress={onPress} />
            <Text style={styles.flatCardTime}>{duration}</Text>
        </View>
    )
}

export default FlatCardView

const styles = StyleSheet.create({

    flatCard: {
        flexDirection: 'row',
        width: 330,
        height: 80,
        marginTop: 20,
        marginLeft: 30,
        borderRadius: 20,
        backgroundColor: '#2C2C2E',
    },

    flatCardImg: {
        height: 80,
        width: 100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 5
    },

    flatCardTxtMain: {
        fontSize: 15,
        marginLeft: 20,
        marginTop: 10,
        fontWeight: 600,
        width: 150,
        color: '#fff',
    },

    flatCardTime: {
        position: 'absolute',
        top: '55%',
        left: '30%',
        width: 150,
        marginLeft: 20,
        marginTop: 10,
        fontSize: 15,
        fontWeight: 600,
        color: '#FF206E',
    },
})