import { ScrollView, View } from 'react-native';

import Event from "./Event";

const EventsList = ({ events }) => {
  console.log(events)
  return (
    <View>
      {events.map((event, index) => (
        <Event key={index} event={event}/>
      ))}
    </View>
  )

}

export default EventsList;