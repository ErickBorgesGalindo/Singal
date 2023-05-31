import { StyleSheet, View, Text, Pressable } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import BackBtn from '../components/BackBtn';
import Styles from '../components/Styles';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import { Octicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

// import Tts from 'react-native-tts'

const Translator = () => {
    const navigation = useNavigation();
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null)
    const [press, setPress] = useState(false)

    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, [])

    const handlePress = () => {
        setPress(!press)
    };

    const playSound = async () => {
        const soundObject = new Audio.Sound();
        
        try {
          await soundObject.loadAsync(require('../audio.mp3'));
          await soundObject.playAsync();
          // Opcional: Puedes utilizar await soundObject.playFromPositionAsync(0) si deseas reproducir el sonido desde un punto específico.
        } catch (error) {
          console.log(error);
        }
      };

    // const handleVoice = () => {
    //     Tts.speak('Hola, mi nombre es A L E C S');
    // }

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

            <Pressable onPress={() => handlePress()} style={{ backgroundColor: 'rgba(255, 32, 110, 0.4)', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', width: '90%', height: '5%', borderRadius: 20, marginTop: -100 }}>
                {
                    press ?
                        <Text style={{ color: 'white', fontSize: 20 }} >
                            Hola mi nombre es
                        </Text>
                        :
                        <Text style={{ color: 'white', fontSize: 20 }} >
                            Press here to see the translation
                        </Text>
                }
            </Pressable>

            <Pressable onPress={playSound} style={{ backgroundColor: 'rgba(255, 32, 110, 0.4)', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', width: '90%', height: '5%', borderRadius: 20, marginTop: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }} >
                    Press here to hear the translation
                </Text>
            </Pressable>
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