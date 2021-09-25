import { NextApiRequest, NextApiResponse } from 'next';

import { DEFAULT_OPEN_APIS } from '@/data/open-api';
import { IOpenAPI } from '@/model/open-api';

export default (req: NextApiRequest, res: NextApiResponse<IOpenAPI[]>) => {
  res.status(200).json(DEFAULT_OPEN_APIS);
};
