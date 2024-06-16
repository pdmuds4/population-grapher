export type chartLavel = {
    data: {
        year: number,
        value: number
    }[],
    label: string,
} // 1ラベルのデータ(4種類)

export type chartPref = {
    data: number[][],
    label: string, // 都道府県名
} // 1都道府県のデータ

export type sessionPref = {
    prefCode: number,
    prefName: string,
    data: chartLavel[]
} // 1都道府県のセッションデータ

export type contextData = {
    axisLabel: number[],
    series: chartPref[]
}

export type contextConfig = {
    context_data: contextData,
    setContextData: React.Dispatch<React.SetStateAction<contextData>>
}