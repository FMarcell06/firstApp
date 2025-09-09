import React from 'react'
import { galleryDataFromDatabase } from '../gallery'
import { useState } from 'react'

export const Gallery = () => {
    //state : gallery
    //inicializalod a statet a galleryFromDatabase-el

    const [gallery, setGallery] = useState(galleryDataFromDatabase)
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"1rem"}}>
      {/*a staten meghivod a map-t es csak az objektumok url-t megjleenited egy img tagben*/}

      {gallery.map((obj) =>(
        <img src={obj.url} className='img-fluid' alt="" style={{flex:"1 0 auto",maxHeight:"20vh",borderRadius:"15px",objectFit:"fill"}} />
      ))}
    </div>
  )
}

