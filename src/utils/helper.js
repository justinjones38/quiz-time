export const shuffleArr = (arr) => {
  let newArr = [...arr]
  for(let index = newArr.length - 1; index > 0; index--) {
    let randomIndex = Math.floor(Math.random() * index);
    [newArr[index], newArr[randomIndex]] = [newArr[randomIndex], newArr[index]]
  }
  return newArr;
}