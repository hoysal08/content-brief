import type { NextApiRequest, NextApiResponse } from 'next'
import { getSummary } from '~/helper/llama-helper.ts'

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const body = req.body
    console.log(body)
    const response = await getSummary(body.content)
    res.status(200).json({ message: response })
}