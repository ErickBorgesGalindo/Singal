import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Styles from '../components/Styles';

const HomeScreen = () => {
    return (
        <View>
            <View style={styles.maintxtView}>
                <Text style={Styles.header}>Hello User,</Text>
                <Text style={Styles.text}>Good morning.</Text>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
    },

    maintxtView: {
        paddingTop: 50,
        paddingLeft: 40,
        paddingBottom: 10
    },

    todayTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        marginLeft: 40,
        marginRight: 40,
    },

});