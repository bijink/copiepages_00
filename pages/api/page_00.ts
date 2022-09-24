import type { NextApiRequest, NextApiResponse } from "next"
import { responseData } from "../../data/page_00.data"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   res.status(200).json(responseData)
}
