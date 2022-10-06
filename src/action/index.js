export const addDish = (groupId, dishID) => {
    // console.log('addDish groupId: ' + groupId + ' dishID: ' + dishID)
    return {
        type : "ADD_DISH",
        // dishID: dishID,
        // groupId: groupId,
        payload: {
            groupId: groupId,
            dishID: dishID,
        }
    }
}

export const removeDish = (groupId, dishID) => {
    // console.log('removeDish groupId: ' + groupId + ' dishID: ' + dishID)
    return {
        type : "REMOVE_DISH",
        dishID: dishID,
        groupId: groupId,
        payload: {
            dishID: dishID,
            groupId: groupId,
        }
    }
}
