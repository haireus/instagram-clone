import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import icPlusBlue from '../../assets/icons/plus-blue.png';

const Story = ({name, uri, isMine}) => {
  return (
    <View style={style.containter}>
      {isMine ? (
        <View style={style.myContainer}>
          <Image source={{uri}} style={style.image} />
          <View style={style.icPlusContainer}>
            <Image source={icPlusBlue} style={style.icPlus} />
          </View>
        </View>
      ) : (
        <View style={style.imageContainer}>
          <Image source={{uri}} style={style.image} />
        </View>
      )}

      <Text style={style.text}>{name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  containter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {},
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: '#ed458e',
    width: 76,
    height: 76,
    margin: 5,
    borderRadius: 50,
  },

  myContainer: {
    borderWidth: 3,
    borderColor: 'white',
    width: 76,
    height: 76,
    margin: 5,
    borderRadius: 50,
  },

  icPlusContainer: {
    position: 'absolute',
    zIndex: 1000,
    right: 0,
    bottom: 4,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 3,
  },
  icPlus: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },
});
export default Story;
