function randItem(myList: any[]): any {
  if (myList.length === 0) {
    return '';
  }
  const value = myList[Math.floor(seededRandom() * myList.length)];
  return value;
}

function shuffleList(myList: any[]): any[] {
  for (let i = myList.length - 1; i > 0; i--) {
    const j = randItem([...Array(i + 1).keys()]);
    [myList[i], myList[j]] = [myList[j], myList[i]];
  }
  return myList;
}

function randUniqueItems(myList: any[], amount: number): any[] {
  myList = shuffleList(myList);

  if (amount >= myList.length) {
    return myList;
  }

  myList = myList.slice(0, amount);
  return myList;
}

function weightedRandom(tableData: { [key: number]: any }) {
  const i = Math.floor(seededRandom() * Object.keys(tableData).length);
  return tableData[i];
}

function weightedRandomTable(myList: { weight: number }[]) {
  const slices = smallestCommonDenominator(myList.map((x) => x.weight));
  const table: any = {};

  let j = 0;
  for (let i = 0; i < myList.length; i++) {
    const sliceSize = myList[i].weight * slices;
    for (let k = 0; k < sliceSize; k++) {
      table[j] = myList[i];
      j += 1;
    }
  }

  console.log(Object.keys(table).length);

  return table;
}
