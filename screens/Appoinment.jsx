import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import React, {useState} from 'react';
import Styles from '../components/Styles';
import BackBtn from '../components/BackBtn';
import { useNavigation } from '@react-navigation/native';
import TeacherCard from '../components/TeacherCard';
import CalendarPicker from 'react-native-calendar-picker';
import { AntDesign } from '@expo/vector-icons';
import CustomBtn from '../components/CustomBtn';
import TimeBtn from '../components/TimeBtn';



const Appoinment = () => {
    const navigation = useNavigation();
    const [selectedBtn, setSelectedBtn] = useState(null);

    const handleBtnPress = (btnIndex) => {
        setSelectedBtn(btnIndex);
    };

    return (
        <View style={styles.container}>
            <Text style={{ ...Styles.sectionName, marginTop: 60 }}>Reservación</Text>
            <BackBtn onPress={() => navigation.goBack()} />

            <View style={{ justifyContent: 'center', marginTop: 10 }}>
                <TeacherCard
                    teacherName='Emily Kevin'
                    experience={'2 years experience'}
                    ImageSource={require('../images/00_image.jpg')}
                    onPress={() => console.log('Papoi')}
                    description={'Lic. Lenguas'}
                    score={'4.9'}
                    showArrow={false} />
            </View>

            <View style={{ backgroundColor: '#2C2C2E', borderRadius: 20, marginTop: 20, padding: 20, width: '95%', alignSelf: 'center' }}>
                <CalendarPicker
                    backgroundColor="red"
                    textStyle={{ color: '#FFF', fontSize: 15 }}
                    selectedDayStyle={{ backgroundColor: '#FF206E' }}
                    previousTitle={<AntDesign name="left" size={20} color="white" />}
                    previousTitleStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        height: 30,
                        width: 30,
                        borderRadius: 15,
                        overflow: 'hidden',
                        textAlign: 'center',
                        alignItems: 'center', // Alinea verticalmente el contenido al centro
                        padding: 5
                    }}
                    nextTitle={<AntDesign name="right" size={20} color="white" />}
                    nextTitleStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        height: 30,
                        width: 30,
                        borderRadius: 15,
                        overflow: 'hidden',
                        textAlign: 'center',
                        alignItems: 'center', // Alinea verticalmente el contenido al centro
                        padding: 5
                    }}
                    monthTitleStyle={{ fontSize: 25, fontWeight: '600' }}
                    yearTitleStyle={{ fontSize: 25, fontWeight: '600' }}
                />

                <View style={{ width: '100%', borderWidth: 1, marginTop: 20, borderTopColor: 'rgba(255,255,255,0.4)' }} />

                <View style={{ marginTop: 20 }}>
                    <Text style={Styles.text}>Time</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }}>
                        <TimeBtn
                            title="09:00 AM"
                            onPress={() => handleBtnPress(1)}
                            selected={selectedBtn === 1}
                        />
                        <TimeBtn
                            title="09:30 AM"
                            onPress={() => handleBtnPress(2)}
                            selected={selectedBtn === 2}
                        />
                        <TimeBtn
                            title="10:00 AM"
                            onPress={() => handleBtnPress(3)}
                            selected={selectedBtn === 3}
                        />
                        <TimeBtn
                            title="10:30 AM"
                            onPress={() => handleBtnPress(4)}
                            selected={selectedBtn === 4}
                        />
                        <TimeBtn
                            title="11:00 AM"
                            onPress={() => handleBtnPress(5)}
                            selected={selectedBtn === 5}
                        />
                    </ScrollView>
                </View>
            </View>

            <View style={{ marginTop: 40 }}>
                <CustomBtn title={'Siguiente'} onPress={() => navigation.navigate('PaymentMethod')} />
            </View>


        </View>
    )
}

export default Appoinment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
    },
})