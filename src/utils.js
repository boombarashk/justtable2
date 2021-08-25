function getRootNodeIndexById(parentMap, id) {
    let index = id
    do {
        index = parentMap.get(index)
    } while (index >= 1 || index == 0)
    return index > 0 ? +(index + '').substr(2) : 0
}

export function getParentNode({dataArray, parentMap, parentId}) {
    let index = getRootNodeIndexById(parentMap, parentId)

    const checkChildren = (node) => {
        let result = node
        if (node.id == parentId) return result;

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
