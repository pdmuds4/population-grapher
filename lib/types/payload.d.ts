import { prefecture, populationComp } from "Resas"

export type getPrefecturesRes = {
    data: prefecture[]
}

export type getPopulationCompsReq = {
    prefCodes: number[],
    label: 0 | 1 | 2 | 3
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