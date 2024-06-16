// "use client"
import { createContext, useState } from 'react';
import { Header, MainBody, BoxList, Chart } from '@components';
import { contextConfig, contextData } from 'context';

export const Context = createContext<contextConfig>({
    context_data: {
        axisLabel: [],
        series: [],
    } as contextData,
    setContextData: () => {}
});

export default function Home() {
    const [context_data, setContextData] = useState({
        axisLabel: [],
        series: []
    } as contextData);

    return (
        <Context.Provider value={{context_data, setContextData}}>
            <Header />
            <MainBody>
                <h1>都道府県</h1>
                <BoxList />
                <h1>Chart</h1>
                <Chart />
            </MainBody>
        </Context.Provider>
    );
}
