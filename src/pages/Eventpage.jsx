import React, { useEffect, useState } from 'react'
import SearchForm from '../components/SearchForm'
import records from '../components/helpers'
import RecordCards from '../components/RecordCards'
import axios from 'axios'

const Eventpage = () => {
  // Define a state to store events
  const [events, setEvents] = useState([]);

  // Define a function to fetch events
  const getEvents = async () => {
    const response = await axios.get('https://backend-work-qwbo.onrender.com/events');
    if (response.status === 200) {
      setEvents(response.data);
    } else {
      setEvents([]);
    }
  }
  
  // Get events
  useEffect(() =>{
    getEvents();
  }, []);

  const recordCards = events.map(event=> (
    <RecordCards
      key={event.id}
      title={event.eventName}
      date={event.date}
      price={event.price}
      flyer={`https://savefiles.org/secure/uploads/${event.flyer}?shareable_link=251`}
    />
  )) 
  return (
    <div>
      <SearchForm />
      {recordCards}
    </div>
  )
}

export default Eventpage