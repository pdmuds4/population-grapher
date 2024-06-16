// "use client"
import "./style.css"


type Props = {
    changehandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Selector: React.FC<Props> = (props) => {
    return (
        <select className="selector-body" onChange={(e)=>props.changehandler(e)}>
            <option value="0">総人口</option>
            <option value="1">年少人口</option>
            <option value="2">生産年齢人口</option>
            <option value="3">老年人口</option>
        </select>
    )
}

export default Selector;