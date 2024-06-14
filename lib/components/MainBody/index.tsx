import React, { PropsWithChildren } from "react";
import "./style.css";

type Props = PropsWithChildren<{}>;
const MainBody: React.FC<Props> = (props) => {
    return (
        <div className="mainbody-body">
            {props.children}
        </div>
    );
}

export default MainBody;

