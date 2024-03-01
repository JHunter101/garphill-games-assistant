"use strict";
function draw() {
    const actionTables = JSON.parse(localStorage.getItem('actionTables'));
    let str = '';
    for (const [key, value] of Object.entries(actionTables)) {
        str += weightedRandom(actionTables[key])['text'];
        str += '<br>';
    }
    console.log(str);
    document.getElementById('action-text').innerHTML = str;
}
