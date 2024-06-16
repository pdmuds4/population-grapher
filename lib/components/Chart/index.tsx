"use client";
import "./style.css";
import { useContext, useEffect, useState } from "react";
import Selector from "./Selector";
import { LineChart } from "@mui/x-charts/LineChart";
import { Context } from "app/page";

const Chart: React.FC = () => {
    const { context_data } = useContext(Context);
    const [label_index, setLabelIndex] = useState(0); 

    const [chartWidth, setChartWidth] = useState(0);
    useEffect(() => {
        const defaultWidth = window.innerWidth;;
        setChartWidth(defaultWidth > 480 ? defaultWidth*0.88 : 1000);
    },[]);

    return (
        <div className="chart-graph">
            <Selector changehandler={(e)=>setLabelIndex(Number(e.target.value))}/>
            <LineChart
                width={chartWidth}
                height={400}
                margin={{ left: 90, bottom: 100 }}
                series={context_data.series.map((prefData)=>{
                    return {
                        data: prefData.data[label_index],
                        label: prefData.label
                    }
                })}
                xAxis={[{ scaleType: 'point', data: context_data.axisLabel }]}
                grid={{ vertical: true, horizontal: true }}
                slotProps={{
                    legend: {
                        position: {vertical: 'bottom', horizontal: 'middle'},
                        
                    }
                }}
            />
        </div>
    )
}

export default Chart;