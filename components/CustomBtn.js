import { View, Button, StyleSheet } from 'react-native'
import React from 'react'


const CustomBtn = ({ title, onPress }) => {
    return (
        <View style={styles.button}>
            <Button title={title} color='white' onPress={onPress} />
        </View>
    )
}

export default CustomBtn

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        top: '83%',
        width: 200,
        height: 45,
        borderRadius: 20,
        backgroundColor: '#FF206E',
    },
})