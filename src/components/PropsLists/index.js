import React from 'react'
import Link from 'gatsby-link'
import PropsList from './PropsList'

const PropsLists = ({block}) => {
  var imgs = []
  var titles = []
  var descs =  []
  if(block == 'first') {
    imgs = ['../../assets/image/homepage@2x/distribute-icon.svg', '../../assets/image/homepage@2x/grow-icon.svg', '../../assets/image/homepage@2x/monetize-icon.svg']
    titles = ['Distribute', 'Grow', 'Monetize']
    descs =  [
              'Package your sounds as art track videos and your creations can go anywhere that video can go. It’s like a video space suit ;)', 
              'Increase your reach and grow your fanbase. Bigger platforms mean bigger connected audiences.', 
              'Make money from streams of your audio content on platforms like YouTube where billions of views are happening every day.'
            ]
  } else {
    imgs = ['../../assets/image/homepage@2x/upload-icon.svg', '../../assets/image/homepage@2x/artwork-icon.svg', '../../assets/image/homepage@2x/generate-icon.svg']
    titles = ['Upload Audio', 'Add Artwork', 'Generate Video']
    descs =  [
              'Easily access your audio and Import from SoundCloud, Dropbox, Gmail, Instagram, Facebook and many more.', 
              'Make your audio content stand out with visual design templates, photo-grid layouts, cool photo filters and effects.', 
              'Press a button, we take it from here. Once your video has been created, it will be available for download and publishing.'
            ]
  }
  return (
    <PropsList imgs={imgs} titles={titles} descs={descs} />
  )
}

export default PropsLists
