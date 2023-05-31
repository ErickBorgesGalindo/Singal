import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from '../components/Styles';
import CardView from '../components/CardView';
import CardViewSquare from '../components/SquareCard';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={Styles.mainBackground}>
            {/* Header */}
            <View style={styles.maintxtView}>
                <Text style={Styles.header}>Hola Usuario,</Text>
                <Text style={Styles.subHeader}>Bienvenido.</Text>
            </View>

            {/* Go To traduce */}
            <View style={styles.todayTextView}>
                <Text style={Styles.text}>Empezar a traducir </Text>
                <Text style={Styles.textColor}>Mon 26 Apr</Text>
            </View>
            {/* Go to traduce Card */}
            <View style={{ alignItems: 'center' }}>
                <CardView
                    text='Usa el trauctor'
                    subtitle={'De señas a texto - audio'}
                    ImageSource={require('../images/00_image.jpg')}
                    onPress={() => console.log('pachurrao')} />
            </View>

            {/* Can you learn */}
            <View style={styles.todayTextView}>
                <Text style={Styles.text}>Aprende lengua de señas</Text>
                <Text style={Styles.textColor} onPress={() => console.log('Apachurrao x2')}>Ver todo</Text>
            </View>
            {/* Can You learn Cards */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }}>
                <CardView
                    text='Señas básicas'
                    subtitle={'10 lexiones para principantes'}
                    ImageSource={require('../images/01_image.jpeg')}
                    onPress={() => navigation.navigate('Class')}
                    style={{ marginLeft: 40 }} />
                <CardView
                    text='Señas para ingenieros'
                    subtitle={'20 diferentes señas'}
                    ImageSource={require('../images/02_image.jpeg')}
                    onPress={() => navigation.navigate('Class')}
                    style={{ marginLeft: 40 }} />
                <CardView
                    text='Saludos básicos'
                    subtitle={'05 lexiones'}
                    ImageSource={require('../images/03_image.webp')}
                    onPress={() => navigation.navigate('Class')}
                    style={{ marginLeft: 40 }} />
            </ScrollView>

            {/* Contact a translator */}
            <View style={styles.todayTextView}>
                <Text style={Styles.text}>Contacta a un traductor </Text>
                <Text style={Styles.textColor} onPress={() => navigation.navigate('Interpreters')}>Ver todos</Text>
            </View>
            {/* Contact a translator cards */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0, marginRight: 20 , marginBottom:40}}>
                <CardViewSquare
                    text='Alexa Martínez'
                    subtitle='3 años de experiencia'
                    ImageSource={require('../images/04_image.jpg')}
                    isPremium={false}
                    onPress={() => console.log('Papoi')} />

                <CardViewSquare
                    text='Melissa Gonzáles'
                    subtitle='1 año de experiencia'
                    ImageSource={require('../images/05_image.jpg')}
                    isPremium={false}
                    onPress={() => console.log('Banana papoi')} />
            </ScrollView>
        </ScrollView>
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
        marginHorizontal: 40
    },

});