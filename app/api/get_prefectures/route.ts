import Resas from "@repo/Resas";

export async function GET() {
    const RESAS = new Resas(process.env.RESAS_KEY || "")
    const data = await RESAS.getPrefectures();
    
    return Response.json({ data })
}