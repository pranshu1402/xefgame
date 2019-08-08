
export const sortPMD = (pmd) => {
    let tempPmdArr = [];
    for (let p in pmd) {
        tempPmdArr.push([p, pmd[p]]);
    }
    tempPmdArr.sort((a, b) => (b[1] - a[1]));
    console.log(tempPmdArr);
    return tempPmdArr;
}