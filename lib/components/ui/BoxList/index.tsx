"use client";
import { CheckBox } from "@components";
import "./style.css";

const BoxList: React.FC = () => {
    return (
        <div className="boxlist-body">
            <CheckBox label="北海道" handler={()=>console.log(1)}/>
            <CheckBox label="青森県" handler={()=>console.log(2)}/>
            <CheckBox label="岩手県" handler={()=>console.log(3)}/>
            <CheckBox label="宮城県" handler={()=>console.log(4)}/>
            <CheckBox label="秋田県" handler={()=>console.log(5)}/>
            <CheckBox label="山形県" handler={()=>console.log(6)}/>
            <CheckBox label="福島県" handler={()=>console.log(7)}/>
            <CheckBox label="茨城県" handler={()=>console.log(8)}/>
        </div>
    );
}

export default BoxList;