import type { populationComp, prefecture, resasErrorStatus } from "Resas";

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
     */
    async getPopulationComps(prefCode: number): Promise<populationComp[]|resasErrorStatus> {
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
                return data.result.data as populationComp[]
            } else {
                return data as resasErrorStatus
            }})
    }
}