import Row, {emptyRow} from "./Row";

function Table(props) {
    const {data} = props
    const rows = data?.length
        ? <Row {...props}/>
        : emptyRow()

    return (
        <div className="grid">
            <div className="grid-row">
                <div className="grid-cell grid-cell-title">Name</div>
                <div className="grid-cell grid-cell-title">Email</div>
                <div className="grid-cell grid-cell-title">Balance</div>
            </div>

            { rows }
        </div>
    )
}

export default Table
