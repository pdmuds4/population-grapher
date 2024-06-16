import { prefecture, populationComp } from "Resas"

export type getPrefecturesRes = {
    data: prefecture[]
}

export type getPopulationCompsReq = {
    prefCodes: number[]
}

export type getPopulationCompsRes = {
    data: {
        prefCode: number,
        data: {
            year: number,
            value: number
        }[]
    }[]
}