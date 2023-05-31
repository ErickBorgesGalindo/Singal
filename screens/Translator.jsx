import { StyleSheet, View, Text, Pressable } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import BackBtn from '../components/BackBtn';
import Styles from '../components/Styles';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import { Octicons } from '@expo/vector-icons';
import Tts from 'react-native-tts'

const Translator = () => {
    const navigation = useNavigation();
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null)

    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, [])

    const handleVoice = () => {
        Tts.speak('Hola, mi nombre es A L E C S');
    }

    return (

        <View style={styles.container}>
            <Text style={{ ...Styles.sectionName, marginTop: 60 }}>Translator</Text>
            <BackBtn onPress={() => navigation.goBack()} />

            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Camera
                    style={styles.camera}
                    type={type}
                    flashMode={flash}
                    ref={cameraRef} />
            </View>

            <View style={{ backgroundColor: '#2C2C2E', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', width: '90%', height: '10%', borderRadius: 20, marginTop: -90 }}>
                <Text style={{ color: 'white', fontSize: 20 }} >
                    Hola, mi nombre es  A L E C S
                </Text>
            </View>

            <View style={{justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                <Pressable onPress={()=>handleVoice()}>
                    <Octicons name="unmute" size={24} color="white" />
                </Pressable>
            </View>
        </View>
    )
}

export default Translator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
    },
    camera: {
        width: '90%',
        height: '80%',
        borderRadius: 20
    },
})