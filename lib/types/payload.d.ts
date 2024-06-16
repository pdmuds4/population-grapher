import { prefecture, populationComp } from "Resas"

export type getPrefecturesRes = {
    data: prefecture[]
}

export type getPopulationCompsReq = {
    prefCode: number
}