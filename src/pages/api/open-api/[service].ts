import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import { getOpenAPIs } from '@/data/open-api';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { service } = req.query;
  const openAPI = getOpenAPIs().find((element) => element.service === service);
  if (openAPI) {
    const response = await axios.get(openAPI.url);
    return res.status(200).json(response.data);
  }
  return res.status(404);
};
