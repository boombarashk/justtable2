export function emptyRow() {
    return <div className="grid-row-empty">No data</div>
}

function dataRow({item, filterActive, isHead = false, childrenCount = 0, openedMap, setOpenedMap}) {
    const groupClassName = isHead ? 'grid-group' : '';
    const groupHeadClassName = item.children.length > 0 ? 'grid-group-head' : ''// <- add cursor: pointer
    const nodisplayClassName = !item.isActive && filterActive  ? 'nodisplay' : ''
    return <div className={`grid-row ${groupClassName} ${groupHeadClassName} ${nodisplayClassName}`}
                key={item.id}
                data-id={item.id}
                data-active={item.isActive}
                onClick={() => {
                    if (item.children.length > 0) {
                        const cloneOpenedMap = new Map(openedMap)
                        cloneOpenedMap.set(item.id, !cloneOpenedMap.get(item.id))
                        setOpenedMap(cloneOpenedMap)
                    }
                }}
    >
        <div className="grid-cell">{item.name}</div>
        <div className="grid-cell"><a href={`mailto:${item.email}`}>{item.email}</a>
        </div>
        <div className="grid-cell">{item.balance}</div>
    </div>
}

export default function Row({ data, openedMap, setOpenedMap, filterActive }){
    const getItems = (data, isHead = false) => data.map( item => {
        const children = openedMap && openedMap.get(item.id)
            ? getItems(item.children, false)
            : null;

        return <>
            { dataRow({item, filterActive, isHead, openedMap, setOpenedMap}) }
            { children }
        </>
    });
    return (<>{ getItems(data, true) }</>)
}
