import React from 'react'
import Medialist from './Medialist'

const Medialists = () => {
  const titles = [
                  'Song Title', 
                  'Podcast Title', 
                  'Ambient Sounds Title'
               ]
  const imgs = [
                  './assets/image/homepage@2x/bg-artist1.png', 
                  './assets/image/homepage@2x/bg-artist2.png',
                  './assets/image/homepage@2x/bg-artist3.png'
               ]
  const names = [
                  'Artist Name',
                  'Host(s) Name',
                  'Artist Name'
                ]
  return (
    <Medialist titles={titles} imgs={imgs} names={names} />
  )
}

export default Medialists
