function draw(): void {
  const actionTables = JSON.parse(
    localStorage.getItem('actionTables') as string,
  );

  const actionBox = document.getElementById('action-text') as HTMLInputElement;
  actionBox.innerHTML = '';
  for (const [key, value] of Object.entries(actionTables)) {
    const codedAction = weightedRandom(actionTables[key]);
    actionBox.appendChild(decodeAction(codedAction));
  }
}
