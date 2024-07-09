function getRandomCat(catsArr){
    return catsArr[Math.floor(Math.random() * catsArr.length)];
}

module.exports = {
    getRandomCat: getRandomCat,
}
