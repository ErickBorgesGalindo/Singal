import { StyleSheet, SafeAreaView, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

const PaymentComplete = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', width: 300 }}>
                <FontAwesome name="check-square" size={33} color='#FF206E' />
                <Text style={styles.title}>PaymentCompleted</Text>
            </View>

            <View style={{ marginTop: 10, width: 300 }}>
                <Text style={styles.text}>You've book a new appoinment with your trainer.</Text>
            </View>

            {/* Pop Up */}
            <View style={styles.popup}>
                {/* Traine */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ marginLeft: 25, color: 'white', marginBottom: 10 }}>Trainer</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../images/00_image.jpg')} style={styles.image} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ ...styles.sectionTxt, marginLeft: 7, }}>Emily Kevin</Text>
                            <Text style={{ marginLeft: 7, color: '#FF206E' }}>High Intensity Training</Text>
                        </View>

                        {/* Puntuation */}
                        <View style={{ height: 15, width: 45, borderRadius: 5, backgroundColor: '#FF206E', alignItems: 'center', justifyContent: 'center', marginLeft: -45 }}>
                            <Text style={{ fontSize: 12, fontWeight: '800' }}>4.9</Text>
                        </View>
                    </View>
                    <View style={{ width: 300, marginTop: 20, borderTopColor: '#3A3A3C', borderTopWidth: 1 }} />
                </View>
                {/* Date */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ marginLeft: 20, color: 'white', marginBottom: 10 }}>Date</Text>
                    <Text style={{ ...styles.sectionTxt, marginLeft: 20, }}>20 Octuber 2023 - Wednesday</Text>
                </View>
                {/* Time */}
                <View style={{ marginTop: 10 }}>
                    <Text style={{ marginLeft: 20, color: 'white', marginBottom: 10 }}>Time</Text>
                    <Text style={{ ...styles.sectionTxt, marginLeft: 20, }}>09:30 AM</Text>
                </View>
            </View>

            <View style={styles.button}>
                <Button title='Done' color='black' onPress={() => navigation.navigate('Home')} />
            </View>


        </SafeAreaView>
    )
}

export default PaymentComplete

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        marginLeft: 15,
        fontSize: 25,
        fontWeight: '600',
        color: 'white'
    },

    text: {
        fontSize: 20,
        fontWeight: '300',
        color: 'white'
    },

    popup: {
        height: 300,
        width: 300,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: '#2C2C2E'
    },

    image: {
        height: 60,
        width: 60,
        marginLeft: 20,
        borderRadius: 50
    },

    sectionTxt: {
        marginBottom: 5,
        fontSize: 15,
        fontWeight: '500',
        color: '#fff',
    },

    button: {
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        top: '100%',
        width: 200,
        height: 45,
        borderRadius: 20,
        backgroundColor: '#FF206E',
    },
})