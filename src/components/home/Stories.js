import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {USER_DATA} from '../../data/user';
import Story from '../story';

const Stories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={USER_DATA}
        keyExtractor={({id}) => id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <Story
              name={item.name}
              uri={item.uri}
              isMine={item.isMine || false}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

export default Stories;
