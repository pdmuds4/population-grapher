// "use client";
import CheckBox from "./Checkbox";
import "./style.css";
import { useEffect, useState } from "react";
import { callAPI } from "@utils/callAPI";
import { prefecture } from "Resas";

const BoxList: React.FC = () => {

    const [prefs, setPrefs] = useState<prefecture[]>([]);
    useEffect(() => {
        const session = sessionStorage.getItem("apidata");
        if (session) {
            setPrefs(JSON.parse(session));
            console.log("[CheckBox]: Use Session Storage")
        } else {
            callAPI("/api/get_prefectures", "GET")
                .then((res) => {
                    setPrefs(res.data);
                    sessionStorage.setItem("apidata", JSON.stringify(res.data));
            })
            console.log("[CheckBox]: Session Storage Reloaded")
        }
    }, []);

    return (
        <div className="boxlist-body">
            {
                prefs.map((pref) => 
                    <CheckBox
                        key={pref.prefCode}
                        code={pref.prefCode}
                        label={pref.prefName}
                    />
                )
            }
        </div>
    );
}

export default BoxList;