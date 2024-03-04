type actionDatabase = {
  [key: string]: {
    [key: number]: codedAction[];
  };
};

type codedAction = {
  action: { [key: string]: codedSubAction };
  weight: number;
};

type codedSubAction = {
  connect: string;
  main: string;
  'mod-1': string;
  'mod-2': string;
};

type iconObject = {
  code: string;
  type: string;
  name: string;
  desc: string;
  draw: boolean;
  end: boolean;
  stack: boolean;
  attachType: string;
  attachWhere: string;
  color: string;
  'class-parent': string[];
  'class-self': string[];
};

function quickImage(src: string, divClasses: string[], imgClasses: string[]) {
  const div = document.createElement('div');
  div.classList.add(...divClasses);
  const img = document.createElement('img');
  img.src = src;
  img.classList.add(...imgClasses);
  div.appendChild(img);
  return div;
}

function decodeAction(input: codedAction) {
  const actionDiv = document.createElement('div');
  actionDiv.classList.add('action');

  const createObjectDiv = (
    subActionDiv: HTMLDivElement,
    subAction: codedSubAction,
  ) => {
    const objectDiv = document.createElement('div');
    objectDiv.classList.add('object');

    ['main', 'mod-1', 'mod-2'].forEach((objectPart) => {
      if (
        objectPart == 'main' ||
        objectPart == 'mod-1' ||
        objectPart == 'mod-2' ||
        objectPart == 'connect'
      ) {
        const iconCode = subAction[objectPart];
        if (iconCode) {
          const iconData = myIconDatabase[iconCode];
          subActionDiv.classList.add(...iconData['class-parent']);
          if (myIconDatabase[subAction[objectPart]]['draw']) {
            const src = '/res/icons/' + iconData.code + '.png';
            const classes: string[] = [objectPart];
            if (objectPart != 'main') {
              classes.push(...iconData['class-self']);
            }
            objectDiv.appendChild(quickImage(src, classes, []));
          }
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
      if (myIconDatabase[connect]['draw']) {
        const src = '/res/icons/' + myIconDatabase[connect].code + '.png';
        const classes = ['connect'];
        classes.push(...myIconDatabase[connect]['class-self']);
        subActionDiv.appendChild(quickImage(src, classes, []));
      }
      subActionDiv.classList.add(...myIconDatabase[connect]['class-parent']);
      if (myIconDatabase[connect]['end']) {
        actionDiv.appendChild(subActionDiv);
        subActionDiv = document.createElement('div');
      }
    }
  });
  return actionDiv;
}

function testDecoder(a: string, b: number, c: number) {
  const actionBox = document.getElementById('action-text') as HTMLInputElement;
  actionBox.innerHTML = '';
  actionBox.appendChild(decodeAction(myActionDatabase[a][b][c]));
}
