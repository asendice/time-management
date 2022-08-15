import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

import TimerControl from './components/TimerControl';

import { convertTime } from '../../utils/index';

const Timer = ({ handleDone, time, setTime }) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [showStart, setShowStart] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStartAndPause = () => {
    if (isActive === false) {
      setIsActive(true);
      setIsPaused(false);
      setShowStart(false);
      return;
    }
    if (isActive === true && isPaused === false) {
      setIsActive(false);
      setIsPaused(true);
      setShowStart(true);
      return;
    }
  };

  const handlePause = () => {
    setIsActive(false);
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{convertTime(time)}</Text>
      <TimerControl
        handleStartAndPause={handleStartAndPause}
        handlePause={handlePause}
        handleReset={handleReset}
        handleDone={handleDone}
        showStart={showStart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 48,
    marginTop: 100,
    color: '#fff'
  },
});

export default Timer;
