function draw(): void {
  const actionTables = JSON.parse(
    localStorage.getItem('actionTables') as string,
  );
  let str = '';

  for (const [key, value] of Object.entries(actionTables)) {
    str += weightedRandom(actionTables[key])['text'];
    str += '<br>';
  }

  console.log(str);
  (document.getElementById('action-text') as HTMLInputElement).innerHTML = str;
}
