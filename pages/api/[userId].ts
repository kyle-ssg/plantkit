import { NextApiRequest, NextApiResponse } from 'next'
import sdk from 'common/sdk-server'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await sdk.getData('kyle')
    res.status(200).json({ data })
  } catch (e) {
    console.log(e)
    res.status(200).json({ res: e })
  }
  // res.status(200).json({ res: 'ok' })
}
