import React from 'react'
import Notes from './Notes'

const Home = (props) => {
  return (
    <div>
      <Notes setalert={props.setalert}/>
    </div>
  )
}
export default Home
