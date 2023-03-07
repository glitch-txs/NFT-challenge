import Image from 'next/image'
import React from 'react'
import s from './Card.module.scss'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className={s.container} >
        <div className={s.imgContainer} >
            <Image src='/nft.png' width={250} height={250} alt='' />
        </div>
        <div className={s.title} >
            DominioFi
        </div>
        <div className={s.description} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquid veritatis beatae tempora animi nemo ratione quibusdam 
            laborum exercitationem nam velit optio sequi natus illum nobis molestias, 
            ullam, voluptate quisquam. Ratione!
        </div>
    </div>
  )
}

export default Card