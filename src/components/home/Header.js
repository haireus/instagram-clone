import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import logo from '../../assets/images/logo.png';
import icMessage from '../../assets/icons/message.png';
import icPlus from '../../assets/icons/plus.png';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={logo} />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image style={styles.icon} source={icPlus} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>11</Text>
          </View>
          <Image style={styles.icon} source={icMessage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  unreadBadge: {
    backgroundColor: '#f72f2f',
    position: 'absolute',
    borderRadius: 50,
    left: 25,
    bottom: 19,
    zIndex: 10,
    width: 15,
    height: 15,
    alignItems: 'center',
  },
  unreadText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default Header;
