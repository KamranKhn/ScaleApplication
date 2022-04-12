import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {CircularScale} from '../components/CircularScale';
import {PyramidScale} from '../components/PyramidScale';

/**
 * RouteConfig, Render the component which is currently active.
 */
const RouteConfig = [
  {key: 'circularScale', active: true},
  {key: 'pyramidScale', active: false},
  {key: null, active: false},
  {key: null, active: false},
  {key: null, active: false},
];

/**
 * Component mapping config wrt. keys
 */
const ComponentConfig = {
  circularScale: CircularScale,
  pyramidScale: PyramidScale,
};

/**
 * Component: Header caption and subCaption text and cross icon
 */
const CaptionContent = () => (
  <>
    <View style={styles.captionContainer}>
      <Text style={styles.caption}>Rescue session: anger & frustation</Text>
      <Pressable onPress={() => {}}>
        <Image style={styles.icons} source={require('../assets/close.png')} />
      </Pressable>
    </View>
    <Text style={styles.subCaption}>
      Pick the level you anger & frustation right now
    </Text>
  </>
);

/**
 * Component: Next cta
 */
const Button = ({handleNext}) => (
  <Pressable style={styles.nextCta} onPress={handleNext}>
    <Text style={styles.nextText}>Next</Text>
  </Pressable>
);

export default function Dashboard(props) {
  const key = RouteConfig.filter(value => value.active)[0]?.key; //Filter the active component key
  const [route, setRoute] = useState(RouteConfig);
  const [componentKey, setComponentKey] = useState(key);

  /**
   * Function: 1. Change the active status on next press
   *           2. Update the next component (UI)
   */
  const handleNext = () => {
    const currentIndex = [...route.keys()].filter(i => route[i].active)?.[0];
    let newArray = [...route];
    for (let i = 0; i < newArray.length; i++) {
      if (i === currentIndex + 1 && currentIndex !== newArray.length - 1) {
        newArray[i] = {...newArray[i], active: true};
      } else {
        if (currentIndex === newArray.length - 1) {
          newArray[0] = {...newArray[0], active: true};
        } else {
          newArray[i] = {...newArray[i], active: false};
        }
      }
    }
    const key = newArray.filter(value => value.active)[0]?.key;
    setRoute(newArray);
    setComponentKey(key);
  };

  /**
   * Function: Return the mapped component
   */
  const getScaleComponent = () => {
    if (!componentKey) {
      return null;
    }
    const Component = ComponentConfig[componentKey];
    return <Component />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressBarContainer}>
        {route.map((val, index) => (
          <View
            key={index}
            style={[
              styles.progressBar,
              {backgroundColor: val.active ? '#f5f5f5' : '#608087'},
            ]}
          />
        ))}
      </View>
      <CaptionContent />
      {getScaleComponent()}
      <Button handleNext={handleNext} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    backgroundColor: '#35565e',
  },
  progressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressBar: {
    height: 5,
    width: 60,
    borderRadius: 4,
  },
  captionContainer: {
    marginTop: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  caption: {
    fontSize: 14,
    color: '#f5f5f5',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subCaption: {
    fontSize: 20,
    marginTop: 38,
    paddingRight: 20,
    color: '#f5f5f5',
    fontWeight: 'bold',
  },
  nextCta: {
    height: 44,
    bottom: 40,
    width: '99%',
    borderRadius: 25,
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  nextText: {
    fontSize: 15,
    color: '#2b3536',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});
