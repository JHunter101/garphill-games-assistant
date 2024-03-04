function setup(): void {
  const gameName = (
    document.getElementById('game-setting-game') as HTMLInputElement
  ).value;
  const gameActionData = myActionDatabase[gameName];
  const gameActionTables: { [key: string]: codedAction } = {};

  for (const [key, value] of Object.entries(gameActionData)) {
    gameActionTables[key] = weightedRandomTable(value);
  }

  localStorage.setItem('actionTables', JSON.stringify(gameActionTables));
  hide_elem('btn-setup');
  hide_elem('main-menu');
  unhide_elem('btn-draw');
  unhide_elem('game');
}

function mainMenu(): void {
  unhide_elem('btn-setup');
  unhide_elem('main-menu');
  hide_elem('btn-draw');
  hide_elem('game');
}
