import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Timer from './Timer/index';
import EventModal from './EventModal/index';
import EventsList from './EventsList/index';

const Home = () => {
  const [time, setTime] = useState(0);
  const [events, setEvents] = useState([]);
  const [modalActive, setModalActive] = useState(false);

  const handleDone = () => {
    setModalActive(!modalActive);
  };

  const createEvent = (desc) => {
    const event = {
      startTime: '',
      endTime: '',
      time,
      description: desc
    };
    setEvents([...events, event]);
    setTime(0);
  };

  return (
    <View style={styles.container}>
      <Text>Home Component</Text>
      <Timer handleDone={handleDone} time={time} setTime={setTime} />
      <EventsList events={events} />
      <EventModal modalActive={modalActive} setModalActive={setModalActive} createEvent={createEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default Home;
