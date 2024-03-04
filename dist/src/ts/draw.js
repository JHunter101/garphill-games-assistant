"use strict";
function draw() {
    const actionTables = JSON.parse(localStorage.getItem('actionTables'));
    const actionBox = document.getElementById('action-text');
    actionBox.innerHTML = '';
    for (const [key, value] of Object.entries(actionTables)) {
        const codedAction = weightedRandom(actionTables[key]);
        actionBox.appendChild(decodeAction(codedAction));
    }
}
