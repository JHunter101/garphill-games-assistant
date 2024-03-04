"use strict";
function quickImage(src, divClasses, imgClasses) {
    const div = document.createElement('div');
    div.classList.add(...divClasses);
    const img = document.createElement('img');
    img.src = src;
    img.classList.add(...imgClasses);
    div.appendChild(img);
    return div;
}
function decodeAction(input) {
    const actionDiv = document.createElement('div');
    actionDiv.classList.add('action');
    const createObjectDiv = (subActionDiv, subAction) => {
        const objectDiv = document.createElement('div');
        objectDiv.classList.add('object');
        ['main', 'mod-1', 'mod-2'].forEach((objectPart) => {
            if (objectPart == 'main' ||
                objectPart == 'mod-1' ||
                objectPart == 'mod-2' ||
                objectPart == 'connect') {
                const iconCode = subAction[objectPart];
                if (iconCode) {
                    const iconData = myIconDatabase[iconCode];
                    if (iconData['class-parent'].length > 0) {
                        subActionDiv.classList.add(...iconData['class-parent']);
                    }
                    const src = '/res/icons/' + iconData.code + '.png';
                    const classes = [objectPart];
                    if (iconData['class-self'].length > 0 && objectPart != 'main') {
                        classes.push(...iconData['class-self']);
                    }
                    objectDiv.appendChild(quickImage(src, classes, []));
                }
            }
        });
        subActionDiv.appendChild(objectDiv);
        return subActionDiv;
    };
    let subActionDiv = document.createElement('div');
    ['e', 'd', 'c', 'b', 'a'].forEach((subActionID) => {
        if (input['action'][subActionID]) {
            const subAction = input['action'][subActionID];
            subActionDiv.classList.add('subaction');
            subActionDiv = createObjectDiv(subActionDiv, subAction);
            const connect = subAction.connect;
            if (connect !== 'gen-and') {
                if (connect !== '') {
                    if (myIconDatabase[connect]['class-parent'].length > 0) {
                        subActionDiv.classList.add(...myIconDatabase[connect]['class-parent']);
                    }
                    const src = '/res/icons/' + myIconDatabase[connect].code + '.png';
                    const classes = ['connect'];
                    if (myIconDatabase[connect]['class-self'].length > 0) {
                        classes.push(...myIconDatabase[connect]['class-self']);
                    }
                    subActionDiv.appendChild(quickImage(src, classes, []));
                }
                if (connect !== 'gen-place') {
                    actionDiv.appendChild(subActionDiv);
                    subActionDiv = document.createElement('div');
                }
            }
        }
    });
    return actionDiv;
}
function testDecoder(a, b, c) {
    const actionBox = document.getElementById('action-text');
    actionBox.innerHTML = '';
    actionBox.appendChild(decodeAction(myActionDatabase[a][b][c]));
}
