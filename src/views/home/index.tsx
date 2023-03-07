import React, { useState } from 'react'
import Card from './components/card/Card'
import s from './index.module.scss'
type Props = {}

const Home = (props: Props) => {

    const [contractAddress, setContractAddress] = useState<string>('')

  return (
    <div className={s.container} >
        <div className={s.title} >
            <span className={s.first} >Find </span> 
            Your Favorite 
            <span className={s.second} > Collections</span>
        </div>
        <input
        type="text"
        className={s.input}
        placeholder="Collection Contract Address"
        value={contractAddress}
        onChange={((e)=>setContractAddress(e.target.value))}
        />

        <div className={s.NFTsContainer} >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Home