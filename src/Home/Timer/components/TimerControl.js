import { View, StyleSheet } from 'react-native';

import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';

import { TimerControlButton, ButtonText } from './styles';

const TimerControl = ({ handleStartAndPause, handleReset, handleDone, showStart }) => {
  return (
    <View style={styles.container}>
      <View style={styles.controller}>
        {showStart ? (
          <TimerControlButton
            color="#B5EAD7"
            width={125}
            onPress={handleStartAndPause}
          >
            <ButtonText color="#B5EAD7">
              <FontAwesome name="play" size={24} />
            </ButtonText>
          </TimerControlButton>
        ) : (
          <TimerControlButton
            color="#FF9AA2"
            width={125}
            onPress={handleStartAndPause}
          >
            <ButtonText color="#FF9AA2">
              <FontAwesome name="pause" size={24} />
            </ButtonText>
          </TimerControlButton>
        )}
        <TimerControlButton color="#C7CEEA" width={125} onPress={handleReset}>
          <ButtonText color="#C7CEEA">
            <MaterialCommunityIcons
              name="arrow-projectile-multiple"
              size={24}
            />
          </ButtonText>
        </TimerControlButton>
      </View>
      <TimerControlButton width={275} color="#FFDAC1" onPress={handleDone}>
        <ButtonText color="#FFDAC1">
          <MaterialIcons name="done-all" size={24} />
        </ButtonText>
      </TimerControlButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  controller: {
    height: 100,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 100,
  },
});

export default TimerControl;
