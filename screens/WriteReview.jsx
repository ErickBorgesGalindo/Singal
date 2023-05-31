import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import Styles from '../components/Styles';
import BackBtn from '../components/BackBtn';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
import MaskedInput from '../components/MaskedInput';
import CustomBtn from '../components/CustomBtn';

const WriteReview = () => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0); // Estado para almacenar la calificación seleccionada
  const showRate = rating / 2;
  const [review, setReview] = useState('');


  const handleRatingChange = (value) => {
    setRating(value); // Actualizar el estado cuando se cambia la calificación
  };


  return (
    <View style={styles.container}>
      <Text style={{ ...Styles.sectionName, fontSize: 28, marginTop: 60 }}>WRITE A REVIEW</Text>
      <BackBtn onPress={() => navigation.goBack()} />

      <View style={{ alignItems: 'center', marginTop:40 }}>
        <Rating
          type='custom'
          ratingImage={require('../images/invisble.png')}
          ratingColor='#FF206E'
          ratingBackgroundColor='#2C2C2E'
          startingValue={0}
          ratingCount={10}
          imageSize={30}
          fractions={1}
          jumpValue={0.1}
          onSwipeRating={handleRatingChange}
          style={{ borderRadius: 50, backgroundColor: '#2C2C2E', width: '90%' }}
        />
        <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ ...Styles.text }}>Rating:</Text>
          <Text style={{ ...Styles.text, fontWeight: 800, }}>{showRate.toFixed(1)}</Text>
        </View>
      </View>

      <View style={{marginTop:30}}>
        <MaskedInput
          style={styles.input}
          value={review}
          placeholder='Review (Optional)'
          placeholderTextColor='white'
          mask='review' />
      </View>

      <View>
        <CustomBtn title={'Send'} onPress={()=>navigation.goBack()}/>
      </View>
    </View>
  )
}

export default WriteReview

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },

  input: {
    height: 235,
    width: 320,
    alignSelf: 'center',
    marginBottom: 30,
    color: 'white',
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#2C2C2E',
    backgroundColor: '#2C2C2E',
    borderRadius: 20,
    padding:20,
    paddingTop:20
  },


})