"use client"
import { Header, MainBody, BoxList, Chart } from '@components';
// import { BoxList, Chart } from '@components/ui';

export default function Home() {
    return (
        <>
            <Header />
            <MainBody>
                <h1>都道府県</h1>
                <BoxList />
                <h1>Chart</h1>
                <Chart />
            </MainBody>
        </>
    );
}
