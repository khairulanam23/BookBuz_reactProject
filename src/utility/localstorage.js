const getStoredReadingList = (key) => {
    const storedList = localStorage.getItem(key);
    if (storedList) {
        return JSON.parse(storedList);
    }
    return [];
}

const saveReadingList = (id) => {
    const storedReadingList = getStoredReadingList('reading-list');
    const exist = storedReadingList.includes(id);
    if (!exist) {
        storedReadingList.push(id);
        localStorage.setItem('reading-list', JSON.stringify(storedReadingList));
    }
}

const saveWishList = (id) => {
    const storedWishList = getStoredReadingList('wish-list');
    const exist = storedWishList.includes(id);
    if (!exist) {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
    }
}

export { getStoredReadingList, saveReadingList, saveWishList };