"use client";
import "./style.css";

type Props = {
    key: number;
    label: string;
    changehandler: () => void;
};

const CheckBox: React.FC<Props> = (props) => {
    return (
        <div className="checkbox-body">
            <input className="checkbox-btn" type="checkbox" onChange={()=>props.changehandler()}/>
            <label className="checkbox-label">{props.label}</label>
        </div>
    );
}

export default CheckBox;