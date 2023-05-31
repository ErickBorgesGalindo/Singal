import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Styles from '../components/Styles';
import BackBtn from '../components/BackBtn';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import TabBar from '../components/TabBar';
import ProgressBar from '../components/ProgressBar';
import Review from '../components/Review';
import CustomBtn from '../components/CustomBtn';

const ReviewScreen = () => {
    const navigation = useNavigation();
    const [isRecentPressed, setIsRecentPressed] = useState(true);
    const [isCriticalPressed, setIsCriticalPressed] = useState(false);
    const [isFavourablePressed, setIsFavourablePressed] = useState(false);

    const handleRecentPress = () => {
        setIsRecentPressed(true);
        setIsCriticalPressed(false);
        setIsFavourablePressed(false);
    };

    const handleCriticalPress = () => {
        setIsRecentPressed(false);
        setIsCriticalPressed(true);
        setIsFavourablePressed(false);
    };

    const handleFavourablePress = () => {
        setIsRecentPressed(false);
        setIsCriticalPressed(false);
        setIsFavourablePressed(true);
    };

    return (
        <View style={styles.container}>
            <Text style={{ ...Styles.sectionName, marginTop: 60 }}>REVIEWS</Text>
            <BackBtn onPress={() => navigation.goBack()} />

            {/* TabView */}
            <View style={Styles.tabView}>
                <TabBar onPress={handleRecentPress} isSelected={isRecentPressed} label='Recent' />
                <TabBar onPress={handleCriticalPress} isSelected={isCriticalPressed} label='Critical' />
                <TabBar onPress={handleFavourablePress} isSelected={isFavourablePressed} label='Favourable' />
            </View>
            {/* ProgressBar */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, alignItems: 'center' }}>
                <Text style={{ ...Styles.header }}>4.6</Text>
                <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                    <ProgressBar progress={5} position={5} />
                    <ProgressBar progress={4} position={4} />
                    <ProgressBar progress={3} position={3} />
                    <ProgressBar progress={2} position={2} />
                    <ProgressBar progress={1} position={1} />
                </View>
            </View>
            {/* Rating */}
            <View style={{ marginTop: 10, width: '100%', height: 'auto' }}>
                <Text style={{ ...Styles.text, alignSelf: 'flex-end', marginHorizontal: '8%' }}>174 Ratings</Text>
            </View>
            {/* Reviews */}
            <View style={{ marginBottom: 150 }}>
                <ScrollView showsVerticalScrollIndicator={false} marginBottom={250} style={{ alignSelf: 'center' }}>
                    <Review
                        user={'Nayely Morales'}
                        time={'2'}
                        image={require('../images/00_image.jpg')}
                        review={'Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits. '} />
                    <Review
                        user={'Erick Borges'}
                        time={'2'}
                        image={require('../images/04_image.jpg')}
                        review={'Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits. Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits. Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits. '} />
                    <Review
                        user={'Luis Davila'}
                        time={'2'}
                        image={require('../images/05_image.jpg')}
                        review={'Had such an amazing session with Maria.'} />
                </ScrollView>
            </View>
            {/* Button */}
            <View style={{ top: '-45%' }}>
                <CustomBtn title='Write a Review' onPress={() => navigation.navigate('Write')} />
            </View>
        </View>
    )
}

export default ReviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
    },
})