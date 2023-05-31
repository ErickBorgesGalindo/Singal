import {StyleSheet, View, Text, Pressable } from 'react-native'
import React from 'react'

const TabBar = ({onPress, isSelected, label }) => {
    return (
        <View style={styles.tabView}>
            <Pressable onPress={onPress} style={[styles.DisableBtn, isSelected && styles.ActiveBtn]}>
                <Text style={[styles.DisableTxt, isSelected && styles.ActiveTxt]}>{label}</Text>
            </Pressable>
        </View>
    )
}

export default TabBar

const styles = StyleSheet.create({
    tabView: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 118,
        height: 28,
        borderRadius: 20,
        backgroundColor: '#2C2C2E',
    },
    
    ActiveBtn: {
        justifyContent: 'center',
        width: 118,
        height: 28,
        borderRadius: 20,
        backgroundColor: '#FF206E',
    },
    
    DisableBtn: {
        justifyContent: 'center',
        width: 118,
        height: 28,
        borderRadius: 20,
    },
    
    ActiveTxt: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 18,
        color: '#FFF'
    },
    DisableTxt: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 18,
        color: '#fff'
    },
})