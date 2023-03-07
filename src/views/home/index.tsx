import Loader from '@/components/loader'
import { useNFTsMetadata } from '@/queries/hooks/useNFTsMetadata'
import Image from 'next/image'
import React, { useState } from 'react'
import Card from './components/card/Card'
import Modal from './components/modal/Modal'
import s from './index.module.scss'

const Home:React.FC = () => {

  const [contractAddress, setContractAddress] = useState<string>('')
  const [modal, setModal] = useState<boolean>(false)
  const [selectedNFT, setSelectedNFT] = useState<any>({
    media:[
      {
        gateway:''
      }
    ],
    title:'',
    description:'',
    contract:{
      address:""
    },
    id:{
      tokenId:""
    }
  })

  const {data} = useNFTsMetadata(contractAddress)
  
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

        {
          (contractAddress == '' && !data) ?
          <div className={s.searchPlaceholder} >
            Search For the best NFTs
          </div>
          : data?.nfts ?
          <div className={s.NFTsContainer} >
            {data.nfts.map((nft: any, index: number)=>(
              <span key={index} onClick={()=>{
                setSelectedNFT(nft)
                setModal(true)
              }} >
              <Card title={nft.title} image={nft.media[0].gateway} description={nft.description} />
              </span>
            ))}       
          </div>:
          <div className={s.loader}>
            <Loader/>
          </div>
        }      

        {/* Modal */}
        <Modal modal={modal} setModal={setModal} >
          <div className={s.modalImage} >
            <Image src={selectedNFT.media[0].gateway} width={250} height={250} alt=''/> 
          </div>
          <div className={s.modalDescriptionContainer} >
            <div className={s.modalTitle} >{selectedNFT.title}</div>
            <div className={s.modalDescription} >{selectedNFT.description}</div>
            <a
            target="_blank"
            href={`https://opensea.io/es/assets/ethereum/${selectedNFT.contract.address}/${Number(selectedNFT.id.tokenId)}`} 
            rel="noopener noreferrer" 
            className={s.modalBTN} >
              Buy Now
            </a>
          </div>
        </Modal>
    </div>
  )
}

export default Home