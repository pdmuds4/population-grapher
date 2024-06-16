import { chartLavel, contextData, sessionPref } from "lib/types/context"

export const toSeriesFormatter = (prefdata: sessionPref, context_data: contextData): contextData  => {
    return {
        ...context_data,
        axisLabel: prefdata.data[0].data.map((v)=>v.year),
        series: [
            ...context_data.series,
            {
                data: prefdata.data.map((v)=>v.data.map((v)=>v.value)),
                label: prefdata.prefName
            }
        ]
    }
}