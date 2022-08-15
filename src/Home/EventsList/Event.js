import { View, Text } from 'react-native';

const Event = (event) => {
  const { time, description, startTime, endTime } = event;
  return (
    <View>
      <Text>
        {time}
      </Text>
    </View>
  );
};

export default Event;
