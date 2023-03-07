import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { contractAddress } = req.query
  // 0x59325733eb952a92e069C87F0A6168b29E80627f
  const {data} = await axios.get(`https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}/getNFTsForCollection?contractAddress=${contractAddress}&withMetadata=true`)
  res.status(200).json(data)
}
