import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Header from '../../components/home/Header';
import Stories from '../../components/home/Stories';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: '',
  //   flex: 1,
  // },
});

export default HomeScreen;
