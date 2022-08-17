import { NextApiRequest, NextApiResponse } from 'next'
import sdk from 'common/sdk-server'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body)
  console.log(JSON.parse(req.body))
  await sdk.updateData('kyle', JSON.parse(req.body))
  res.status(200).json({ res: 'ok' })
}
