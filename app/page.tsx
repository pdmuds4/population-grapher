import { Header, MainBody, BoxList, Chart } from '@components';
import ContextProvider from '@components/provider';

export default function Home() {
    return (
        <ContextProvider>
            <Header />
            <MainBody>
                <h1>都道府県</h1>
                <BoxList />
                <h1>Chart</h1>
                <Chart />
            </MainBody>
        </ContextProvider>
    );
}
