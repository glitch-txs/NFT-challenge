import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//Specific fetch function
const getNFTsMetadata = async (contractAddress: string)=>{

    if(contractAddress == '') return null

    const { data } = await axios.get(`api/getNFTs?contractAddress=${contractAddress}`)
    return data
}

//React query hook, ready to deconstruct the data, isLoading, error, etc.
export const useNFTsMetadata = (contractAddress: string) =>{
    return useQuery(['metadata-nfts', contractAddress], ()=> getNFTsMetadata(contractAddress))
}