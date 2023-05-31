import { View, Text, Pressable, StyleSheet, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import Styles from '../components/Styles';
import BackBtn from '../components/BackBtn';
import CardPreview from '../components/CardPreview';
import CustomBtn from '../components/CustomBtn';

const PaymentMethod = () => {
    const navigation = useNavigation();
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardPressed = (cardIndex) => {
        setSelectedCard(cardIndex);
    };


    return (
        <View style={styles.container}>

            <Text style={{ ...Styles.sectionName, marginTop: 60 }}>PAGO</Text>
            <BackBtn onPress={() => navigation.goBack()} />

            {/* Paymenth Method */}
            <View style={{ marginTop: 30, height: 200 }}>
                <Text style={{ ...Styles.text, left: '5%' }}>Método de Pago</Text>
                {/* Cards Section */}
                <ScrollView horizontal style={{ width: '100%', height: '10%' }} showsHorizontalScrollIndicator={false} >
                    {/* Add new card */}
                    <Pressable style={styles.addContainer} onPress={() => navigation.navigate("DataCard")}>
                        <Entypo name="plus" size={24} color="white" alignSelf='center' />
                    </Pressable>

                    {/* Cards */}
                    <CardPreview
                        backgroundImage={require('../images/cardbg.png')}
                        logoImage={require('../images/vcard.png')}
                        numberText='2048'
                        selected={selectedCard === 0}
                        onPress={() => handleCardPressed(0)} />

                    <CardPreview
                        backgroundImage={require('../images/mcbg.png')}
                        logoImage={require('../images/mcard.png')}
                        numberText='2071'
                        selected={selectedCard === 1}
                        onPress={() => handleCardPressed(1)} />

                </ScrollView>
            </View>

            {/* Order details */}
            <View style={{}}>
                {/* Order Details Title */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ ...Styles.text, marginLeft: 20, marginBottom: 10 }}>Detalles de la orden</Text>
                    <View style={{ borderTopColor: '#3A3A3C', borderTopWidth: 1, width: 350, marginHorizontal: 20 }} />
                </View>

                {/* Trainer */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ marginLeft: 25, color: 'white', marginBottom: 10 }}>Intérprete</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../images/00_image.jpg')} style={styles.image} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ ...styles.sectionTxt, marginLeft: 20, }}>Luis Dávila</Text>
                            <Text style={{ marginLeft: 20, color: '#FF206E' }}>Lic. en Lenguas</Text>
                        </View>
                        {/* Puntuation */}
                        <View style={{ height: 22, width: 45, borderRadius: 5, backgroundColor: '#FF206E', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: '800' }}>4.9</Text>
                        </View>
                    </View>
                    <View style={{ width: 350, marginHorizontal: 20, marginTop: 20, borderTopColor: '#3A3A3C', borderTopWidth: 1 }} />
                </View>
                {/* Date */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ marginLeft: 20, color: 'white', marginBottom: 10 }}>Fecha</Text>
                    <Text style={{ ...styles.sectionTxt, marginLeft: 20, }}>20 0ctubre 2023 - Miércoles</Text>
                </View>
                {/* Time */}
                <View style={{ marginTop: 10 }}>
                    <Text style={{ marginLeft: 20, color: 'white', marginBottom: 10 }}>Hora</Text>
                    <Text style={{ ...styles.sectionTxt, marginLeft: 20, }}>09:30 AM</Text>
                    <View style={{ borderTopColor: '#3A3A3C', borderTopWidth: 1, width: 350, marginHorizontal: 20 }} />
                </View>
                {/* Estimated Cost */}
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ marginLeft: 20, color: 'white' }}>Costo estimado</Text>
                    <Text style={{ ...styles.sectionTxt, marginRight: 20 }}>$175.99</Text>
                </View>
                <View style={{ width: 350, marginHorizontal: 20, marginTop: 10, borderTopColor: '#3A3A3C', borderTopWidth: 1 }} />
            </View>

            <View style={{ marginTop: 40 }}>
                <CustomBtn title='Confirm' onPress={() => navigation.navigate("Complete")} />
            </View>

        </View>
    )
}

export default PaymentMethod;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
    },

    backContainer: {
        position: 'absolute',
        marginTop: 65,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },

    sectionTxt: {
        marginLeft: '5%',
        marginBottom: 10,
        fontSize: 20,
        fontWeight: '500',
        color: '#fff',
    },

    addContainer: {
        justifyContent: 'center',
        height: 130,
        width: 80,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: '#2C2C2E',
    },

    image: {
        height: 60,
        width: 60,
        marginLeft: 20,
        borderRadius: 50
    }

})