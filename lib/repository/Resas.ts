import type { populationComp, prefecture, resasErrorStatus } from "lib/types/Resas";

export default class Resas {
    baseUrl: string;
    apiKey: string;

    constructor(RESASapiKey: string) {
        this.baseUrl = 'https://opendata.resas-portal.go.jp/api/v1';
        this.apiKey =  RESASapiKey;
    }

    // すべての都道府県を取得
    /**
     * @param none
     */
    async getPrefectures(): Promise<prefecture[]|resasErrorStatus> {
        
        return fetch(`${this.baseUrl}/prefectures`, {
            headers: {
                'X-API-KEY': this.apiKey
            }})
        .then(response => {
            if(!response.ok){
                throw response.status
            } else {
                return response.json()
            }})
        .then(
            data => {
            if (data.result) {
                return data.result as prefecture[]
            } else {
                return data as resasErrorStatus
            }})
    }


    // 人口構成を取得
    /**
     * @param prefCode - 都道府県コード
     * @param label - `0`: 総人口 | `1`: 年少人口 | `2`: 生産年齢人口 | `3`: 老年人口
     */
    async getPopulationComps(prefCode: number, label: 0|1|2|3): Promise<populationComp|resasErrorStatus> {
        if (prefCode < 1 || prefCode > 47) {
            throw new Error("Invalid prefCode")
        } 

        return fetch(`${this.baseUrl}/population/composition/perYear?prefCode=${prefCode}`, {
            headers: {
                'X-API-KEY': this.apiKey
            }})
        .then(response => {
            if(!response.ok){
                throw response.status
            } else {
                return response.json()
            }})
        .then(
            data => {
            if (data.result) {
                return data.result.data[label] as populationComp
            } else {
                return data as resasErrorStatus
            }})
    }
}