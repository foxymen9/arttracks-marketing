import React from 'react'
import Feature from './Feature'

const Features = () => {
  const imgs = [
                  '../../assets/image/homepage@2x/dashboard-icon.svg', 
                  '../../assets/image/homepage@2x/layouts-icon.svg', 
                  '../../assets/image/homepage@2x/video-builder-icon.svg',
                  '../../assets/image/homepage@2x/publish-icon.svg', 
                  '../../assets/image/homepage@2x/import-icon.svg', 
                  '../../assets/image/homepage@2x/stamp-icon.svg',
                  '../../assets/image/homepage@2x/metadata-icon.svg', 
                  '../../assets/image/homepage@2x/bulk-icon.svg', 
                  '../../assets/image/homepage@2x/integrations-icon.svg'
               ]
  const descs = [
                  'Professional dashboard to manage all of your projects',
                  'Choose from professional video art design layouts.',
                  'Blazingly fast video builder in the cloud',
                  'Publish and export your video to YouTube and other places',
                  'Import from SoundCloud, Facebook, Instagram & more',
                  'Brand your art track videos with logos and watermarks',
                  'Easy metadata management for automated publishing',
                  'Bulk build albums or entire audio catalogs',
                  'Third-party integrations with YouTube and SoundCloud'
                ]
  return (
    <Feature imgs={imgs} descs={descs} />
  )
}

export default Features
