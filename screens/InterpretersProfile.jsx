import { StyleSheet, View, Text, Image, Pressable, Linking, ScrollView } from 'react-native';
import React from 'react';
import BackBtn from '../components/BackBtn';
import Styles from '../components/Styles';
import { Ionicons } from '@expo/vector-icons';
import CustomBtn from '../components/CustomBtn';
import Review from '../components/Review';
import { useNavigation } from '@react-navigation/native';

const InterpretersProfile = () => {
    const navigation = useNavigation();
    const handleCall = async () => {
        try {
            const phoneNumber = '7821466173';
            const url = `tel:${phoneNumber}`;
            const supported = await Linking.canOpenURL(url);

            if (supported) {
                await Linking.openURL(url);
            } else {
                console.log(`No se puede abrir el número de teléfono: ${phoneNumber}`);
            }
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <View>
            {/* First Image, TOP */}
            <Image style={styles.Img} source={require('../images/00_image.jpg')} />
            {/* Back Icon */}
            <BackBtn onPress={() => navigation.goBack()} />

            <View style={styles.ViewContainer}>
                {/* Title and call */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'col' }}>
                        <Text style={{ ...Styles.text, fontSize: 30, marginTop: 17, marginLeft: 30, }}>Richard Will</Text>
                        <Text style={{ ...Styles.textColor, marginTop: 8, marginLeft: 30 }}>Functional Strength</Text>
                    </View>
                    <Pressable style={styles.cell} onPress={handleCall}>
                        <Ionicons name="call" size={24} color="#1C1C1E" />
                    </Pressable>
                </View>

                {/* Trainer Meassures */}
                <View style={styles.dataSection}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ ...Styles.text, fontSize: 30 }}>6</Text>
                            <Text style={{ color: 'white' }}>Experience</Text>
                        </View>
                        <View style={{ height: 65, marginLeft: 10, marginRight: 10, borderLeftColor: 'rgba(255,255,255,0.2)', borderLeftWidth: 1 }} />
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ ...Styles.text, fontSize: 30 }}>46</Text>
                            <Text style={{ color: 'white' }}>Participations</Text>
                        </View>
                        <View style={{ height: 65, marginLeft: 10, marginRight: 10, borderLeftColor: 'rgba(255,255,255,0.2)', borderLeftWidth: 1 }} />
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ ...Styles.text, fontSize: 30 }}>25</Text>
                            <Text style={{ color: 'white' }}>Active Clients</Text>
                        </View>
                    </View>
                </View>
                {/* Calification */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={{ ...Styles.text, marginLeft: '6%', marginTop: 10 }}> Reviews </Text>
                    <View style={{ height: 20, width: 50, borderRadius: 5, marginTop: 14, marginRight: 30, backgroundColor: '#FF206E', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: '600' }}>4.6</Text>
                    </View>
                </View>
                {/* ReviewsIcons */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', marginLeft: '7%', marginTop: 20 }}>
                        <Image source={require('../images/01_image.jpeg')} style={[styles.image, { zIndex: 5 }]} />
                        <Image source={require('../images/02_image.jpeg')} style={[styles.image, { zIndex: 4, left: 25 }]} />
                        <Image source={require('../images/03_image.webp')} style={[styles.image, { zIndex: 3, left: 50 }]} />
                        <Image source={require('../images/00_image.jpg')} style={[styles.image, { zIndex: 2, left: 75 }]} />
                        <View style={{ width: 40, height: 40, backgroundColor: '#FF206E', borderRadius: 50, zIndex: 1, left: 110, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>174</Text>
                        </View>
                    </View>
                    <Pressable style={{ marginTop: 30, marginRight: 30 }} onPress={() => navigation.navigate('Reviews')}>
                        <Text style={Styles.textColor}>Read all reviews</Text>
                    </Pressable>
                </View>

                {/* ReviewText */}
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} snapToInterval={330} snapToAlignment={'center'} style={{ alignSelf: 'center' }}>
                        <Review user={'Nayely Morales'} time={'2'} image={require('../images/04_image.jpg')} review={'Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits.'} />
                        <Review user={'Nayely Morales'} time={'2'} image={require('../images/05_image.jpg')} review={'Had such an amazing session with Maria.'} />
                        <Review user={'Nayely Morales'} time={'2'} image={require('../images/00_image.jpg')} review={'Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits.'} />
                    </ScrollView>
                </View>

            </View>

            {/* Button */}
            <View style={{ top: '160%' }}>
                <CustomBtn title='Hacer una cita' onPress={() => navigation.navigate('Reviews')} />
            </View>
        </View>
    )
}

export default InterpretersProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
    },

    Img: {
        width: 400,
        height: 300,
    },

    ViewContainer: {
        position: 'absolute',
        top: '93%',
        width: 390,
        height: 600,
        borderRadius: 25,
        backgroundColor: '#1C1C1E',

    },

    cell: {
        width: 54,
        height: 54,
        borderRadius: 50,
        marginTop: 17,
        marginRight: 40,
        backgroundColor: '#FF206E',
        alignItems: 'center',
        justifyContent: 'center'
    },

    dataSection: {
        height: 100,
        width: 340,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 20,
        backgroundColor: '#3A3A3C',
    },

    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
        position: 'absolute',
        top: 0,
        left: 0,
    },
})