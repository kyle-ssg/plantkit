import { NextApiRequest, NextApiResponse } from 'next'
import sdk from 'common/sdk-server'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await sdk.updateData('kyle', req.body)
  res.status(200).json({ res: 'ok' })
}
