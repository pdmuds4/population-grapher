export type prefecture = {
    prefCode: number,
    prefName: string
}

export type populationComp = {
    label: string,
    data: {
        year: number,
        value: number
    }[]
}

export type resasErrorStatus = {
    statusCode: number
    message: string,
    description: string
}