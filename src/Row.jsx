export function emptyRow() {
    return <div className="grid-row-empty">No data</div>
}

function dataRow({item, filterActive, isHead = false, childrenCount = 0, setParentMap, parentMap}) {
    const groupClassName = isHead ? 'grid-group' : '';
    const groupHeadClassName = childrenCount > 0 ? 'grid-group-head' : ''// grid-group-head <- cursor: pointer
    const nodisplayClassName = !item.isActive && filterActive  ? 'nodisplay' : ''
    return <div className={`grid-row ${groupClassName} ${groupHeadClassName} ${nodisplayClassName}`}
                key={item.id}
                data-id={item.id}
                data-active={item.isActive}
                onClick={(e) => {
                    /*
                    if (isHead && e.target.tagName.toLowerCase() === 'div') {
                        const key = item.id
                        const {childrenVisible, children} = parentMap.get(key)
                        parentMap.set(key, {childrenVisible: !childrenVisible, children})
                    }
                    */
                }}
    >
        <div className="grid-cell">{item.name}</div>
        <div className="grid-cell"><a href={`mailto:${item.email}`}>{item.email}</a>
        </div>
        <div className="grid-cell">{item.balance}</div>
    </div>
}

export default function Row({ data, parentMap, setParentMap, filterActive }){
    const items = data.map( item => {
        /*const children = parentMap && parentMap.has(item.id)
            ? parentMap.get(item.id).children.map(itemChild => dataRow({
                item: itemChild,
                filterActive,
                isHead: false,
            }))
            : [];*/

        return dataRow({item, filterActive, isHead:true, })
            {/*{ children }*/}

    });
    return (<>{items}</>)
}
