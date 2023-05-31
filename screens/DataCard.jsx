import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet, SafeAreaView, ImageBackground, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import MaskedInput from '../components/MaskedInput';
import Styles from '../components/Styles';
import BackBtn from '../components/BackBtn';
import CustomBtn from '../components/CustomBtn';



const DataCard = () => {
  const navigation = useNavigation();
  const [textName, setTextName] = useState('');
  const [textNumber, setTextNumber] = useState('');
  const [textExpiry, setTextExpiry] = useState('');
  const [textCVC, setTextCVC] = useState('');
  const [isCardPresed, setIsCardPressed] = useState(false);


  const handleTextNameChange = (inputText) => {
    setTextName(inputText);
  };
  const handleTextNumberChange = (inputText) => {
    setTextNumber(inputText);
  };
  const handleTextExpiryChange = (inputText) => {
    setTextExpiry(inputText);
  };
  const handleTextCVCChange = (inputText) => {
    setTextCVC(inputText);
  };
  const handleCardPressed = () => {
    setIsCardPressed(!isCardPresed);
  };

  return (
    <View style={{ ...styles.container }}>
      <Text style={{ ...Styles.sectionName, marginTop: 60 }}>Nueva Tarjeta</Text>
      <BackBtn onPress={() => navigation.goBack()} />

      {/* Card Imge */}
      <ImageBackground source={require('../images/newCard.png')} style={styles.card}>
        <Pressable>
          <Image source={require('../images/vcard.png')} style={styles.cardlogo} />
          <View style={styles.info}>
            <Text style={{ ...styles.infoTxt, fontWeight: '300' }}>{textName != '' ? textName : 'HOLDER NAME'}</Text>
            <Text style={styles.infoTxt}>{textNumber != '' ? textNumber : '0000 0000 0000 0000'}</Text>

          </View>
        </Pressable>
      </ImageBackground>

      {/* Input */}
      <View style={{ marginTop: 20 }}>
        <MaskedInput
          style={styles.input}
          value={textName}
          onValueChange={handleTextNameChange}
          placeholder='Card Holder Name'
          placeholderTextColor='white'
          mask='name'
        />

        <MaskedInput
          style={styles.input}
          value={textNumber}
          onValueChange={handleTextNumberChange}
          placeholder='Card Number'
          placeholderTextColor='white'
          mask='creditCard'
        />

        <View style={{ flexDirection: 'row' }}>
          <MaskedInput
            style={styles.inputExpires}
            value={textExpiry}
            onValueChange={handleTextExpiryChange}
            placeholder='Expiry(MM/YY)'
            placeholderTextColor='white'
            mask='expiry'
          />
          <MaskedInput
            style={styles.inputExpires}
            value={textCVC}
            onValueChange={handleTextCVCChange}
            placeholder='CVC'
            placeholderTextColor='white'
            mask='cvc'
          />
        </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Pressable onPress={handleCardPressed} style={{ marginLeft: 20 }}>
          {isCardPresed ?
            <FontAwesome name="check-square" size={33} color="#FF206E" /> :
            <FontAwesome name="check-square" size={33} color="rgba(255,255,255,0.4)" />
          }
        </Pressable>
        <Text style={{ marginLeft: 10, color: 'white', fontSize: 16 }}>Set as default payment card</Text>
      </View>

      <View style={{ top: '15%' }}>
        <CustomBtn title='Done' onPress={() => navigation.goBack()} />
      </View>


    </View>
  )
}

export default DataCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },

  backContainer: {
    position: 'absolute',
    marginTop: 65,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },

  titleTxt: {
    marginTop: 25,
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: '900',
    color: '#fff',
  },

  sectionTxt: {
    marginLeft: '5%',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },

  card: {
    height: 176,
    width: 327,
    marginTop: 30,
    alignSelf: "center",
  },

  cardlogo: {
    width: 80,
    height: 80,
    marginRight: 30,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },

  info: {
    alignItems: 'start',
    flexDirection: 'col',
    marginLeft: 20,
    marginTop: 30
  },

  infoTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },

  input: {
    height: 60,
    width: 350,
    alignSelf: 'center',
    marginBottom: 30,
    color: 'white',
    fontSize: 20,
    borderBottomColor: 'gray',
    borderTopColor: '#1C1C1E',
    borderLeftColor: '#1C1C1E',
    borderRightColor: '#1C1C1E',
    borderWidth: 1,
  },

  inputExpires: {
    height: 60,
    width: 150,
    alignSelf: 'center',
    alignContent: 'space-between',
    marginLeft: 20,
    marginBottom: 30,
    color: 'white',
    fontSize: 20,
    borderBottomColor: 'gray',
    borderTopColor: '#1C1C1E',
    borderLeftColor: '#1C1C1E',
    borderRightColor: '#1C1C1E',
    borderWidth: 1,
  }
})