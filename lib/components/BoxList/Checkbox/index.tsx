"use client";
import "./style.css";
import { useContext } from "react";
import { callAPI } from "@utils/callAPI";
import { Context } from "@components/provider";
import { toSeriesFormatter } from "@utils/toSeriesFormatter";

type Props = {
    code: number;
    label: string;
};

const CheckBox: React.FC<Props> = (props) => {
    const { context_data, setContextData } = useContext(Context);

    const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) { // チェックボックスがチェックされた場合
            const session = sessionStorage.getItem("apidata");
            if (session) { // session storageの確認
                const apidata = JSON.parse(session);
                if (apidata[props.code-1].data) { // 人口構成データの確認
                    // [!]Contextの更新
                    setContextData(toSeriesFormatter(apidata[props.code-1], context_data));
                    console.log("[CheckBox]: Use Session Storage")
                } else { // 人口構成データがない場合
                    callAPI("/api/get_population_composition", "POST", {prefCode: props.code})
                        .then((res) => {
                            apidata[props.code-1].data = res.data;
                            // [!]Contextの更新
                            setContextData(toSeriesFormatter(apidata[props.code-1], context_data));
                            sessionStorage.setItem("apidata", JSON.stringify(apidata));
                    })
                    console.log("[CheckBox]: Session Storage Reloaded")
                }
            } else { // session storageがない場合
                alert("Session Storage Not Available")
            }
        } else { // チェックボックスがチェック解除された場合
            setContextData({
                ...context_data,
                series: context_data.series.filter((series) => series.label !== props.label)
            });
        }
    }

    return (
        <div className="checkbox-body">
            <input className="checkbox-btn" type="checkbox" onChange={(e)=>onCheck(e)}/>
            <label className="checkbox-label">{props.label}</label>
        </div>
    );
}

export default CheckBox;