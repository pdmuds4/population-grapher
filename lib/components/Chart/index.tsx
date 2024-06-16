"use client";
import "./style.css";
import { useEffect, useState } from "react";
import Selector from "./Selector";
import { LineChart } from "@mui/x-charts/LineChart";

const Chart: React.FC = () => {
    const [chartWidth, setChartWidth] = useState(0);
    useEffect(() => {
        const defaultWidth = window.innerWidth;;
        setChartWidth(defaultWidth > 480 ? defaultWidth*0.88 : 1000);
    },[]);

    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];

    return (
        <div className="chart-graph">
            <Selector changehandler={(e)=>console.log(e.target.value)}/>
            <LineChart
                width={chartWidth}
                height={400}
                series={[
                    { data: pData, label: 'ui' },
                    { data: uData, label: 'uv' },
                ]}
                
                //xAxis={[{ scaleType: 'point', data: xLabels }]}
            />
        </div>
    )
}

export default Chart;