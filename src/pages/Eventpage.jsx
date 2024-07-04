import React from 'react'
import SearchForm from '../components/SearchForm'
import records from '../components/helpers'
import RecordCards from '../components/RecordCards'

const Eventpage = () => {
  const recordCards = records.map(element => (
    <RecordCards
      id={element.id}
      title={element.title}
      venue={element.venue}
      date={element.date}
      time={element.time}
      price={element.price}
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