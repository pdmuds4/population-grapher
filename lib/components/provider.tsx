"use client"
import { createContext, PropsWithChildren, useState } from 'react';
import { contextConfig, contextData } from 'context';

export const Context = createContext<contextConfig>({
    context_data: {
        axisLabel: [],
        series: [],
    } as contextData,
    setContextData: () => {}
});

const Provider: React.FC<PropsWithChildren> = ({children}) => {
    const [context_data, setContextData] = useState({
        axisLabel: [],
        series: []
    } as contextData);

    return (
        <Context.Provider value={{context_data, setContextData}}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
