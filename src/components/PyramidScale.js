import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

const BASE_SIZE = 270;

/**
 * statConfig, Mapped the selected value, wrt label.
 */
const statConfig = {
  1: 'Low',
  2: 'Low',
  3: 'Medium',
  4: 'Medium',
  5: 'High',
};

export const PyramidScale = () => {
  var list = Array(5).fill({status: false}); //Initialised the list by five elements, have status false by default
  const [statList, setStatList] = useState(list);
  const [statText, setStatText] = useState('');

  /**
   * Function: 1. Change the selected status on next cta press
   */
  const handleClick = index => {
    let newArray = [...statList];
    for (let i = 0; i < newArray.length; i++) {
      if (i >= index) {
        newArray[i] = {status: true};
      } else {
        newArray[i] = {status: false};
      }
    }
    const count = newArray.filter(value => value.status).length;
    setStatList(newArray);
    setStatText(statConfig[count]);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.statText}>{statText}</Text>
      <View style={styles.barContainer}>
        {statList.map((val, index) => (
          <Pressable key={index} onPress={() => handleClick(index)}>
            <View
              style={[
                styles.bar,
                {
                  width: BASE_SIZE - index * 55,
                  backgroundColor: val.status ? '#f5f5f5' : '#608087',
                },
              ]}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 48,
    alignItems: 'center',
  },
  statText: {
    fontSize: 15,
    color: '#f5f5f5',
    fontWeight: 'bold',
    position: 'absolute',
    alignItems: 'center',
  },
  barContainer: {
    marginTop: 38,
    alignItems: 'center',
  },
  bar: {
    height: 36,
    marginVertical: 10,
    borderRadius: 24,
  },
});
