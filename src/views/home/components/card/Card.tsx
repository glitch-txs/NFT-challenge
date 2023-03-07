import Image from 'next/image'
import React from 'react'
import s from './Card.module.scss'

type Props = {
  title: string
  description: string
  image: string
}

const Card = ({title, description, image}: Props) => {
  return (
    <div className={s.container} >
        <div className={s.imgContainer} >
            <Image src={image} width={250} height={250} alt='' />
        </div>
        <div className={s.title} >
            {title}
        </div>
        <div className={s.description} >
            {description}
        </div>
    </div>
  )
}

export default Card