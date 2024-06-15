import Resas from "@repo/Resas";
import { getPopulationCompsReq } from "payload";

export async function POST(req: Request) {
    const request: getPopulationCompsReq = await req.json()
    const RESAS = new Resas(process.env.RESAS_KEY || "")
    
    const data = await Promise.all(request.prefCodes.map(async (code) => {
        let prefData = await RESAS.getPopulationComps(code, request.label)
        return {
            prefCode: code,
            data: prefData
        }
    }))
    
    return Response.json({ data })
}
