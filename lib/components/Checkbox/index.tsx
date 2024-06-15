"use client";
import "./style.css";

type Props = {
    label: string;
    handler: () => void;
};

const CheckBox: React.FC<Props> = (props) => {
    return (
        <div className="checkbox-body">
            <input className="checkbox-btn" type="checkbox" onChange={() => props.handler}/>
            <label className="checkbox-label">{props.label}</label>
        </div>
    );
}

export default CheckBox;