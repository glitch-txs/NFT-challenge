import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//Specific fetch function
const getNFTsMetadata = async ()=>{
    const { data } = await axios.get('api/getNFTs')
    return data
}

//React query hook, ready to deconstruct the data, isLoading, error, etc.
export const useNFTsMetadata = () =>{
    return useQuery(['metadata-nfts'], getNFTsMetadata)
}