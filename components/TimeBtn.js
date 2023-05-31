import { View, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const TimeBtn = ({ title, onPress, selected }) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <View style={selected ? styles.selectedButton : styles.disableButton}>
      <Button title={title} color={selected ? 'white' : 'rgba(255,255,255,0.4)'} onPress={handlePress} />
    </View>
  );
};

export default TimeBtn;

const styles = StyleSheet.create({
  selectedButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 110,
    height: 45,
    borderRadius: 20,
    backgroundColor: 'transparent',
    borderColor: '#FF206E',
    borderWidth: 1,
    marginRight:10,
    marginTop:10
  },

  disableButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 110,
    height: 45,
    borderRadius: 20,
    backgroundColor: 'transparent',
    borderColor: 'rgba(255,255,255,0.4)',
    borderWidth: 1,
    marginRight:10,
    marginTop:10
  },
});
