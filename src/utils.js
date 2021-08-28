export function parseDataJSON(data, setOpenedMap) {
    if (typeof data === 'undefined' || data.length === 0) {
        return []
    }
    /**
     * parentMap в зависимости от вложенности хранит 0.[индекс в массиве 1го уровня] либо id родителя
     **/
    const parentMap = new Map()
    const openedMap = new Map()
    const reformattedData = [];
    let counter = 0;
    sortByField(data, 'parentId')
    data.forEach(item => {
        const funcTransform = (item) => {
            return {
                children: [],
                opened: false,
                balanceNum: +item.balance.replace(/[\$\,]/g,''),
                ...item
            }
        }

        if (item.parentId === 0) {
            reformattedData.push(funcTransform(item));
            parentMap.set(item.id, +`0.${counter}`);
            counter++
        } else {
            parentMap.set(item.id, item.parentId)

            const node = getParentNode({dataArray: reformattedData, parentMap, parentId: item.parentId})
            if (node) {
                // NB no save item.parent = node <-- sort broke
                node.children.push(funcTransform(item));
            }
        }
        openedMap.set(item.id, false)
    });
    setOpenedMap(openedMap);
    return reformattedData
}

function getRootNodeIndexById(parentMap, id) {
    let index = id
    do {
        index = parentMap.get(index)
    } while (index >= 1 || index == 0)
    return index > 0 ? +(index + '').substr(2) : 0
}

function getParentNode({dataArray, parentMap, parentId}) {
    let index = getRootNodeIndexById(parentMap, parentId)

    const checkChildren = (node) => {
        if(typeof node === 'undefined') return null;
        let result = node
        if (node.id === parentId) return result;

        node.children.forEach(childNode => {
            result =  childNode.id === parentId
                ? childNode
                : checkChildren(childNode)
        })
        return result
    }
    return checkChildren(dataArray[index])
}

function simpleClone(arr) {
    return arr.map(obj => JSON.parse(JSON.stringify(obj)))
}

function sortByField(arr, fieldName, desc = false) {
    if (arr.length > 0 && fieldName in arr[0]) {
        const mult = desc ? -1 : 1;
        return arr.sort((a,b) => (a[fieldName] > b[fieldName]) ? 1*mult : ((b[fieldName] > a[fieldName]) ? -1*mult : 0))
    } else return arr
}

export function deepSort(arr, fieldName, desc = false) {
    if (!arr) return arr;

    const subj = simpleClone(arr)

    const sortLevel = (arr) => {
        arr.forEach(node => {
            if (node.children.length > 0) {
                node.children = sortLevel(node.children)
            }
        })

        return sortByField(arr, fieldName, desc)
    }
    return sortLevel(subj)
}
