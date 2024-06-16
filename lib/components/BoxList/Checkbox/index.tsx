"use client";
import "./style.css";
import { callAPI } from "@utils/callAPI";

type Props = {
    code: number;
    label: string;
};

const CheckBox: React.FC<Props> = (props) => {
    const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            const session = sessionStorage.getItem("apidata");
            if (session) {
                const apidata = JSON.parse(session);
                if (apidata[props.code-1].data) {
                    // [!]setContext
                    console.log("[CheckBox]: Use Session Storage")
                } else {
                    callAPI("/api/get_population_composition", "POST", {prefCode: props.code})
                        .then((res) => {
                            // [!]setContext
                            apidata[props.code-1].data = res.data;
                            sessionStorage.setItem("apidata", JSON.stringify(apidata));
                    })
                    console.log("[CheckBox]: Session Storage Reloaded")
                }
            } else {
                alert("Session Storage Not Available")
            }
        } else {
            // [!]Contextからデータを削除
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