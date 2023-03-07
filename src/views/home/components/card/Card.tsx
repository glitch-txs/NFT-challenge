import Image from 'next/image'
import React, { useState } from 'react'
import s from './Card.module.scss'

type Props = {
  title: string
  description: string
  image: string
}

const Card = ({title, description, image}: Props) => {

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  return (
    <div className={isLoaded ? s.container : s.loading} >
        {
        <>
          <div className={s.imgContainer} >
              <Image src={image} width={250} height={250} alt='' onLoad={()=>{
                console.log("completed")
                setIsLoaded(true)}} />
          </div>
          <div className={s.title} >
              {isLoaded && title}
          </div>
          <div className={s.description} >
              {isLoaded && description}
          </div> 
        </>
        }
    </div>
  )
}

export default Card