import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const TeacherCard = ({ teacherName, experience, ImageSource, onPress, description, score, showArrow = true }) => {
    return (
        <View style={styles.flatCard}>
            <Image style={styles.flatCardImg} source={ImageSource} />
            <View style={{ flexDirection: 'column' }}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.flatCardTxtMain}>{teacherName}</Text>
                    <View style={{ height: 15, width: 45, borderRadius: 5, backgroundColor: '#FF206E', alignItems: 'center', justifyContent: 'center', marginLeft: -20 }}>
                        <Text style={{ fontSize: 12, fontWeight: '600' }}>{score}</Text>
                    </View>
                </View>

                <Text style={styles.description}>{description}</Text>
                <Text style={styles.flatCardExperience}>{experience}</Text>
            </View>
            {showArrow === false ? null :
                <Entypo name="chevron-right" size={24} color="#fff" marginLeft={20} onPress={onPress} />
            }
        </View>
    )
}

export default TeacherCard

const styles = StyleSheet.create({

    flatCard: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 330,
        height: 100,
        marginTop: 20,
        marginLeft: 30,
        borderRadius: 20,
        backgroundColor: '#2C2C2E',
    },

    flatCardImg: {
        height: 60,
        width: 60,
        marginLeft: '4%',
        borderRadius: 60
    },

    flatCardTxtMain: {
        fontSize: 15,
        marginLeft: 20,
        fontWeight: 800,
        width: 150,
        color: '#fff',
    },

    description: {
        width: 150,
        marginLeft: 20,
        marginTop: 3,
        fontSize: 14,
        fontWeight: 400,
        color: '#fff',
    },

    flatCardExperience: {
        width: 170,
        marginLeft: 20,
        marginTop: 10,
        fontSize: 15,
        fontWeight: 600,
        color:  '#FF206E',
    },
})