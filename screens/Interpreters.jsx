import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import Back from '../components/BackBtn';
import Styles from '../components/Styles';
import TeacherCard from '../components/TeacherCard';

const Interpreters = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text style={{ ...Styles.sectionName, marginTop: 60 }}>Maestros</Text>
            <Back onPress={() => navigation.goBack()} />

            <View style={{ marginTop: 30 }}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor='rgba(255,255,255,0.4)'
                    placeholder='Escibre el nombre' />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 30 }}>
                <TeacherCard
                    ImageSource={require('../images/00_image.jpg')}
                    teacherName='Erick Borges'
                    description='Lic. En Comunicación'
                    experience='5 años de experiencia'
                    score='4.9'
                    onPress={() => navigation.navigate('TrainerDetail')} />

                <TeacherCard
                    ImageSource={require('../images/04_image.jpg')}
                    teacherName='Nayely Morales'
                    description='Ing. Computación'
                    experience='2 años de experiencia'
                    score='4.0'
                    onPress={() => console.log('PRESS')} />


                <TeacherCard
                    ImageSource={require('../images/05_image.jpg')}
                    teacherName='Enrique Galindo'
                    description='Lic. Gastronomia'
                    experience='0.5 años de experiencia'
                    score='2.5'
                    onPress={() => console.log('PRESS')} />


                <TeacherCard
                    ImageSource={require('../images/00_image.jpg')}
                    teacherName='Daniel Valencia'
                    description='Lic. Lenguas'
                    experience='10 yaños de experiencia'
                    score='4.9'
                    onPress={() => console.log('PRESS')} />

                <TeacherCard
                    ImageSource={require('../images/04_image.jpg')}
                    teacherName='Ivana Gomez'
                    description='Lic. Administración'
                    experience='5 años de experiencia'
                    score='4.9'
                    onPress={() => console.log('PRESS')} />
                <TeacherCard
                    ImageSource={require('../images/05_image.jpg')}
                    teacherName='Enrique Galindo'
                    description='Lic. Gastronomia'
                    experience='0.5 años de experiencia'
                    score='2.5'
                    onPress={() => console.log('PRESS')} />


                <TeacherCard
                    ImageSource={require('../images/00_image.jpg')}
                    teacherName='Daniel Valencia'
                    description='Lic. Lenguas'
                    experience='10 yaños de experiencia'
                    score='4.9'
                    onPress={() => console.log('PRESS')} />

                <TeacherCard
                    ImageSource={require('../images/04_image.jpg')}
                    teacherName='Ivana Gomez'
                    description='Lic. Administración'
                    experience='5 años de experiencia'
                    score='4.9'
                    onPress={() => console.log('PRESS')} />
            </ScrollView>

        </View>
    )
}

export default Interpreters

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
    },

    input: {
        height: 60,
        width: 350,
        alignSelf: 'center',
        marginBottom: 10,
        color: 'white',
        fontSize: 20,
        borderBottomColor: 'gray',
        borderTopColor: '#1C1C1E',
        borderLeftColor: '#1C1C1E',
        borderRightColor: '#1C1C1E',
        borderWidth: 1,
    },
})