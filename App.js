/**
 * Lesson 05 Activities
 */

import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./src/img/doctor-sleep.jpg'),
  },
  {title: 'Midway', year: '2019', poster: require('./src/img/midway.jpg')},
];
let App;
App = () => {
  let moviesArr = [];
  for (let i = 0; i < MOVIES_DATA.length; i++) {
    let movies = MOVIES_DATA[i];
    moviesArr.push(<Text key={movies.title}>{movies.title}</Text>);
    moviesArr.push(<Text key={movies.year}>{movies.year}</Text>);
    moviesArr.push(<Image source={movies.poster} />);
    console.log(MOVIES_DATA[i]);
  }
  return (
      <ScrollView>
        <View>{moviesArr}</View>
      </ScrollView>
  );
};

export default App;
