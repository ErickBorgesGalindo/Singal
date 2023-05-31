import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import FlatCardView from '../components/FlatCard';
import BackBtn from '../components/BackBtn';
import Styles from '../components/Styles';


const ClassScren = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Image style={Styles.imageBackground} source={require('../images/00_image.jpg')} />
            <BackBtn onPress={() => navigation.goBack()} />

            {/* Container */}
            <View style={Styles.ViewContainer}>
                {/* Title and subtitle */}
                <Text style={{ ...Styles.text, marginTop: 30, marginLeft: 30, }}>Señas básicas</Text>
                <Text style={{ ...Styles.textColor, marginTop: 10, marginLeft: 30 }}>10 lexiones para principiantes</Text>

                <ScrollView marginTop={10} marginBottom={80}>
                    {/* Description of the Class */}
                    <Text style={Styles.description}>
                        Conoce desde lo básico. Únete a esta clase donde conoceremos las bases para inicar con la lengua de señas. 
                        Aumenta tus conocimeintos y adquiere una nueva habilidad.
                        Mantente actualizado y conoce las señas base más importantes.
                    </Text>

                    {/* Excercise Cards */}
                    <FlatCardView
                        ClassName='El origen de la lengua de señas'
                        duration='0:30'
                        ImageSource={require('../images/00_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />

                    <FlatCardView
                        ClassName='El A - B - C paso a paso'
                        duration='0:30'
                        ImageSource={require('../images/04_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />

                    <FlatCardView
                        ClassName='El respeto a la gente sorda'
                        duration='0:30'
                        ImageSource={require('../images/05_image.jpg')}
                        onPress={() => navigation.navigate('Video')} />

                    <FlatCardView
                        ClassName='Próximos pasos'
                        duration='0:30'
                        ImageSource={require('../images/02_image.jpeg')}
                        onPress={() => navigation.navigate('Video')} />

                </ScrollView>
            </View>
        </View>
    )
}

export default ClassScren