import Resas from "@repo/Resas";
import { getPopulationCompsReq } from "payload";

export async function POST(req: Request) {
    const request: getPopulationCompsReq = await req.json()
    const RESAS = new Resas(process.env.RESAS_KEY || "")
    const data = await RESAS.getPopulationComps(request.prefCode)
    
    return Response.json({ data })
}
