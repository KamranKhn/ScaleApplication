import React, {useState} from 'react';
import Slider from '@react-native-community/slider';
import {StyleSheet, View, Text} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const BASE_SIZE = 280;

export const CircularScale = () => {
  const [progress, setProgress] = useState(0);

  return (
    <View style={styles.mainContainer}>
      <AnimatedCircularProgress
        width={8}
        rotation={0} //Angle from which the progress starts
        fill={progress}
        size={BASE_SIZE - 10}
        tintColor="#f5f5f5"
        backgroundColor="#35565e">
        {() => (
          <View style={styles.circlesContainer}>
            <View style={styles.circle_1} />
            <View style={styles.circle_2} />
            <Text style={styles.progressText}>{progress}</Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <View style={styles.sliderContainer}>
        <Slider
          step={1} //Step value of the slider
          tapToSeek={true}
          minimumValue={0}
          value={progress}
          maximumValue={100}
          onValueChange={setProgress} //We are setting the progress of circular scale
          thumbTintColor="#40ecff"
          minimumTrackTintColor="#40ecff"
          maximumTrackTintColor="#f5f5f5"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 64,
    alignItems: 'center',
  },
  circlesContainer: {
    width: BASE_SIZE,
    height: BASE_SIZE,
    alignItems: 'center',
  },
  circle_1: {
    width: BASE_SIZE,
    height: BASE_SIZE,
    backgroundColor: '#608087',
    borderRadius: BASE_SIZE / 2,
  },
  circle_2: {
    top: BASE_SIZE * 0.18,
    left: BASE_SIZE * 0.18,
    position: 'absolute',
    width: BASE_SIZE * 0.65, // 65% of the base size
    height: BASE_SIZE * 0.65,
    backgroundColor: '#40ecff',
    borderRadius: BASE_SIZE / 2,
  },
  progressText: {
    fontSize: 40,
    color: '#f5f5f5',
    fontWeight: 'bold',
    position: 'absolute',
    alignItems: 'center',
    top: BASE_SIZE * 0.4,
  },
  sliderContainer: {
    width: '90%',
    marginTop: 60,
  },
});
