import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

import { openapiList } from '@/data/open-api'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { service } = req.query
  const openapi = openapiList.find((openapi) => openapi.service === service)
  if (openapi) {
    const response = await axios.get(openapi.url)
    return res.status(200).json(response.data)
  }
  return res.status(404)
}
