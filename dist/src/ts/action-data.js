"use strict";
const myActionDatabase = {
    'West Kingdom, Architects of the': {
        '2': [
            {
                action: {
                    c: {
                        connect: '',
                        main: 'aowk-cath',
                        'mod-1': 'gen-upgrade',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-card--green',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 1.0,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-card--green',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 1.0,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-gold',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.33,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-stone',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.33,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-coin',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.33,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-wood',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.33,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-gold',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-stone',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-coin',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-wood',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-gold',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-stone',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-coin',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-wood',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {
                    e: {
                        connect: 'gen-inherit',
                        main: 'gen-worker',
                        'mod-1': 'gen-count',
                        'mod-2': '',
                    },
                    d: {
                        connect: 'gen-execute',
                        main: 'aowk-capture',
                        'mod-1': 'gen-var',
                        'mod-2': '',
                    },
                    c: {
                        connect: '',
                        main: 'aowk-workergroup--singlecolor',
                        'mod-1': 'gen-space--worker',
                        'mod-2': 'gen-max',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'aowk-capture',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    e: {
                        connect: 'gen-inherit',
                        main: 'gen-worker',
                        'mod-1': 'gen-count',
                        'mod-2': '',
                    },
                    d: {
                        connect: 'gen-execute',
                        main: 'aowk-capture',
                        'mod-1': 'gen-var',
                        'mod-2': '',
                    },
                    c: {
                        connect: '',
                        main: 'aowk-workergroup--multicolor',
                        'mod-1': 'gen-space--worker',
                        'mod-2': 'gen-max',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'aowk-capture',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    c: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-01',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'aowk-ws',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-02',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'aowk-ws',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-03',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'aowk-ws',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-04',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'aowk-ws',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-05',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'aowk-ws',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-06',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'aowk-ws',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-07',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'aowk-ws',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-08',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'aowk-ws',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-max',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'aowk-ws',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 1.0,
            },
            {
                action: {
                    c: {
                        connect: '',
                        main: 'gen-tax',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-remind',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-tax',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 1.0,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'aowk-bm',
                        'mod-1': 'gen-space--worker',
                        'mod-2': 'gen-leftmost',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'aowk-bm',
                        'mod-1': 'gen-space--worker',
                        'mod-2': 'gen-rightmost',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-marble',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 1.0,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'aowk-guardh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: '',
                        main: 'aowk-capture',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'aowk-guardh',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    d: {
                        connect: 'gen-execute',
                        main: 'gen-worker--group',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: '',
                        main: 'aowk-guardh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'aowk-guardh',
                        'mod-1': 'gen-space--worker',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
        ],
        '3': [
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-tax',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-tax',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                },
                weight: 0.33,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-tax',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {},
                weight: 2.0,
            },
        ],
    },
    'West Kingdom, Paladins of the': {
        '1': [
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-04',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-05',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-06',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-07',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-04',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-05',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-06',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'powk-card--kf',
                        'mod-1': 'gen-07',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {},
                weight: 1.0,
            },
        ],
        '2': [
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-01',
                    },
                },
                weight: 0.2,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-02',
                    },
                },
                weight: 0.2,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-03',
                    },
                },
                weight: 0.2,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-04',
                    },
                },
                weight: 0.2,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-05',
                    },
                },
                weight: 0.2,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-01',
                    },
                },
                weight: 0.2,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-02',
                    },
                },
                weight: 0.2,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-03',
                    },
                },
                weight: 0.2,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-04',
                    },
                },
                weight: 0.2,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-05',
                    },
                },
                weight: 0.2,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'powk-card--wall',
                        'mod-1': 'gen-discard',
                        'mod-2': '',
                    },
                },
                weight: 1.0,
            },
            {
                action: {
                    c: {
                        connect: 'gen-inherit',
                        main: 'gen-flag--black',
                        'mod-1': 'gen-player',
                        'mod-2': 'gen-max',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'gen-tbl',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    c: {
                        connect: 'gen-inherit',
                        main: 'gen-flag--black',
                        'mod-1': 'gen-player',
                        'mod-2': 'gen-max',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'gen-ttr',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    c: {
                        connect: 'gen-inherit',
                        main: 'gen-flag--red',
                        'mod-1': 'gen-player',
                        'mod-2': 'gen-max',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'gen-tbl',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    c: {
                        connect: 'gen-inherit',
                        main: 'gen-flag--red',
                        'mod-1': 'gen-player',
                        'mod-2': 'gen-max',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'gen-ttr',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
            {
                action: {},
                weight: 9.0,
            },
        ],
        '3': [
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-tax',
                        'mod-1': 'gen-discard',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-tax',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-02',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-tax',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-var',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--purple',
                        'mod-1': 'gen-gain',
                        'mod-2': '',
                    },
                },
                weight: 0.33,
            },
            {
                action: {
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-tax',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-var',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--purple',
                        'mod-1': 'gen-gain',
                        'mod-2': 'gen-02',
                    },
                },
                weight: 0.33,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--purple',
                        'mod-1': 'gen-discard',
                        'mod-2': '',
                    },
                },
                weight: 0.33,
            },
            {
                action: {},
                weight: 8.0,
            },
        ],
    },
    'West Kingdom, Viscounts of the': {
        '1': [
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-02',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-01',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.2,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-04',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-03',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.2,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-06',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-05',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.2,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-08',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-07',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.2,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-10',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-09',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.2,
            },
        ],
        '2': [
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'vowk-guildh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-worker',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-02',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-01',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'vowk-guildh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-worker',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-04',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-03',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'vowk-guildh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-worker',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-06',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-05',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'vowk-guildh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-worker',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-08',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-07',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'vowk-guildh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-worker',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-10',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-09',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'vowk-guildh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-worker',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-02',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-01',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.06,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'vowk-guildh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-worker',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-04',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-03',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.06,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'vowk-guildh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-worker',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-06',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-05',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.06,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'vowk-guildh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-worker',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-08',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-07',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.06,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'vowk-guildh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-worker',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-10',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-09',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.06,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'vowk-guildh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-worker',
                        'mod-1': 'gen-04',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-02',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-01',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.04,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'vowk-guildh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-worker',
                        'mod-1': 'gen-04',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-04',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-03',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.04,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'vowk-guildh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-worker',
                        'mod-1': 'gen-04',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-06',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-05',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.04,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'vowk-guildh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-worker',
                        'mod-1': 'gen-04',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-08',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-07',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.04,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'vowk-guildh',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-execute',
                        main: 'gen-worker',
                        'mod-1': 'gen-04',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-between',
                        main: 'gen-10',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-09',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.04,
            },
            {
                action: {
                    b: {
                        connect: 'gen-execute',
                        main: 'vowk-manuscript',
                        'mod-1': 'gen-max',
                        'mod-2': 'gen-discard',
                    },
                    a: {
                        connect: '',
                        main: 'gen-02',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    b: {
                        connect: 'gen-execute',
                        main: 'vowk-manuscript',
                        'mod-1': 'gen-max',
                        'mod-2': 'gen-discard',
                    },
                    a: {
                        connect: '',
                        main: 'gen-04',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    b: {
                        connect: 'gen-execute',
                        main: 'vowk-manuscript',
                        'mod-1': 'gen-max',
                        'mod-2': 'gen-discard',
                    },
                    a: {
                        connect: '',
                        main: 'gen-06',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    b: {
                        connect: 'gen-execute',
                        main: 'vowk-manuscript',
                        'mod-1': 'gen-max',
                        'mod-2': 'gen-discard',
                    },
                    a: {
                        connect: '',
                        main: 'gen-08',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    b: {
                        connect: 'gen-execute',
                        main: 'vowk-manuscript',
                        'mod-1': 'gen-max',
                        'mod-2': 'gen-discard',
                    },
                    a: {
                        connect: '',
                        main: 'gen-10',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-leftmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-01',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-leftmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-03',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-leftmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-05',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-leftmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-07',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-leftmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-09',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-leftmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-02',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-leftmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-04',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-leftmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-06',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-leftmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-08',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-leftmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-10',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-rightmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-01',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-rightmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-03',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-rightmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-05',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-rightmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-07',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-rightmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-09',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-rightmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-02',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-rightmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-04',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-rightmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-06',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-rightmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-08',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {
                    c: {
                        connect: 'gen-place',
                        main: 'gen-space--square',
                        'mod-1': 'vowk-builder',
                        'mod-2': 'gen-rightmost',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-10',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.05,
            },
            {
                action: {},
                weight: 3.5,
            },
        ],
        '3': [
            {
                action: {
                    e: {
                        connect: 'gen-then',
                        main: 'gen-card--black',
                        'mod-1': 'gen-gain',
                        'mod-2': '',
                    },
                    d: {
                        connect: 'gen-if',
                        main: 'vowk-criminal',
                        'mod-1': 'gen-01-plus',
                        'mod-2': '',
                    },
                    c: {
                        connect: '',
                        main: 'gen-player--all',
                        'mod-1': 'gen-execute',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--red',
                        'mod-1': 'gen-gain',
                        'mod-2': 'gen-03',
                    },
                },
                weight: 0.04,
            },
            {
                action: {
                    e: {
                        connect: 'gen-then',
                        main: 'vowk-corruption-move',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: 'gen-if',
                        main: 'vowk-criminal',
                        'mod-1': 'gen-01-plus',
                        'mod-2': '',
                    },
                    c: {
                        connect: '',
                        main: 'gen-player--all',
                        'mod-1': 'gen-execute',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--red',
                        'mod-1': 'gen-gain',
                        'mod-2': 'gen-02',
                    },
                },
                weight: 0.07,
            },
            {
                action: {
                    e: {
                        connect: 'gen-then',
                        main: 'vowk-corruption-move',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: 'gen-if',
                        main: 'vowk-criminal',
                        'mod-1': 'gen-01-plus',
                        'mod-2': '',
                    },
                    c: {
                        connect: '',
                        main: 'gen-player--all',
                        'mod-1': 'gen-execute',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--red',
                        'mod-1': 'gen-gain',
                        'mod-2': '',
                    },
                },
                weight: 0.14,
            },
            {
                action: {
                    d: {
                        connect: 'gen-if',
                        main: 'vowk-rearrange',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: '',
                        main: 'gen-player--all',
                        'mod-1': 'gen-execute',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-and',
                        main: 'gen-card--red',
                        'mod-1': 'gen-gain',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--black',
                        'mod-1': 'gen-gain',
                        'mod-2': '',
                    },
                },
                weight: 0.11,
            },
            {
                action: {
                    e: {
                        connect: 'gen-then',
                        main: 'vowk-virtue-move',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: 'gen-if',
                        main: 'vowk-criminal',
                        'mod-1': 'gen-0',
                        'mod-2': '',
                    },
                    c: {
                        connect: '',
                        main: 'gen-player--all',
                        'mod-1': 'gen-execute',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--black',
                        'mod-1': 'gen-gain',
                        'mod-2': '',
                    },
                },
                weight: 0.14,
            },
            {
                action: {
                    e: {
                        connect: 'gen-then',
                        main: 'vowk-virtue-move',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: 'gen-if',
                        main: 'vowk-criminal',
                        'mod-1': 'gen-0',
                        'mod-2': '',
                    },
                    c: {
                        connect: '',
                        main: 'gen-player--all',
                        'mod-1': 'gen-execute',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--black',
                        'mod-1': 'gen-gain',
                        'mod-2': 'gen-02',
                    },
                },
                weight: 0.07,
            },
            {
                action: {
                    e: {
                        connect: 'gen-then',
                        main: 'gen-card--red',
                        'mod-1': 'gen-gain',
                        'mod-2': '',
                    },
                    d: {
                        connect: 'gen-if',
                        main: 'vowk-criminal',
                        'mod-1': 'gen-0',
                        'mod-2': '',
                    },
                    c: {
                        connect: '',
                        main: 'gen-player--all',
                        'mod-1': 'gen-execute',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--black',
                        'mod-1': 'gen-gain',
                        'mod-2': 'gen-03',
                    },
                },
                weight: 0.04,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--red',
                        'mod-1': 'gen-gain',
                        'mod-2': '',
                    },
                },
                weight: 0.33,
            },
            {
                action: {
                    b: {
                        connect: 'gen-and',
                        main: 'gen-card--red',
                        'mod-1': 'gen-gain',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--black',
                        'mod-1': 'gen-gain',
                        'mod-2': '',
                    },
                },
                weight: 0.33,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--black',
                        'mod-1': 'gen-gain',
                        'mod-2': '',
                    },
                },
                weight: 0.33,
            },
            {
                action: {},
                weight: 6.0,
            },
        ],
    },
    'South Tigris, Wayfarers of the': {
        '2': [
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-01',
                    },
                },
                weight: 0.19,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-02',
                    },
                },
                weight: 0.19,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-03',
                    },
                },
                weight: 0.19,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-04',
                    },
                },
                weight: 0.19,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--orange',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-01',
                    },
                },
                weight: 0.25,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--orange',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-02',
                    },
                },
                weight: 0.25,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--orange',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-03',
                    },
                },
                weight: 0.25,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--orange',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-04',
                    },
                },
                weight: 0.25,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--black',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-01',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--black',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-02',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--black',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-03',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--black',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-04',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-01',
                    },
                },
                weight: 0.25,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-02',
                    },
                },
                weight: 0.25,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-03',
                    },
                },
                weight: 0.25,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--blue',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-04',
                    },
                },
                weight: 0.25,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'wost-card--insp',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-01',
                    },
                },
                weight: 0.06,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'wost-card--insp',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-02',
                    },
                },
                weight: 0.06,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'wost-card--insp',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-03',
                    },
                },
                weight: 0.06,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'wost-card--insp',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-04',
                    },
                },
                weight: 0.06,
            },
            {
                action: {},
                weight: 1.75,
            },
            {
                action: {
                    b: {
                        connect: 'gen-else',
                        main: 'sost-translate',
                        'mod-1': 'gen-tbm',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-translate',
                        'mod-1': 'gen-ttm',
                        'mod-2': '',
                    },
                },
                weight: 0.38,
            },
            {
                action: {
                    b: {
                        connect: 'gen-else',
                        main: 'sost-translate',
                        'mod-1': 'gen-ttm',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-translate',
                        'mod-1': 'gen-tbm',
                        'mod-2': '',
                    },
                },
                weight: 0.38,
            },
        ],
        '1': [
            {
                action: {
                    b: {
                        connect: 'gen-else',
                        main: 'sost-translate',
                        'mod-1': 'gen-tbm',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-translate',
                        'mod-1': 'gen-ttm',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    b: {
                        connect: 'gen-else',
                        main: 'sost-translate',
                        'mod-1': 'gen-ttm',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-translate',
                        'mod-1': 'gen-tbm',
                        'mod-2': '',
                    },
                },
                weight: 0.5,
            },
            {
                action: {},
                weight: 9.0,
            },
        ],
        '3': [
            {
                action: {
                    d: {
                        connect: 'gen-execute',
                        main: 'gen-provision',
                        'mod-1': 'gen-gain',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-then',
                        main: 'gen-player',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-has',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: 'gen-if',
                        main: 'gen-card--grey',
                        'mod-1': 'gen-discard',
                        'mod-2': '',
                    },
                },
                weight: 1.0,
            },
            {
                action: {
                    d: {
                        connect: 'gen-execute',
                        main: 'gen-coin',
                        'mod-1': 'gen-gain',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-then',
                        main: 'gen-player',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-has',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: 'gen-if',
                        main: 'gen-card--grey',
                        'mod-1': 'gen-discard',
                        'mod-2': '',
                    },
                },
                weight: 1.0,
            },
        ],
        '4': [
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'gen-card',
                        'mod-1': 'gen-01',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-then',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-has',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: 'gen-if',
                        main: 'gen-card--grey',
                        'mod-1': 'gen-discard',
                        'mod-2': '',
                    },
                },
                weight: 1.0,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'gen-card',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-then',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-has',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: 'gen-if',
                        main: 'gen-card--grey',
                        'mod-1': 'gen-discard',
                        'mod-2': '',
                    },
                },
                weight: 1.0,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'gen-card',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-then',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-has',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: 'gen-if',
                        main: 'gen-card--grey',
                        'mod-1': 'gen-discard',
                        'mod-2': '',
                    },
                },
                weight: 1.0,
            },
            {
                action: {
                    d: {
                        connect: 'gen-place',
                        main: 'gen-card',
                        'mod-1': 'gen-04',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-then',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-has',
                        main: 'gen-worker',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: 'gen-if',
                        main: 'gen-card--grey',
                        'mod-1': 'gen-discard',
                        'mod-2': '',
                    },
                },
                weight: 1.0,
            },
        ],
    },
    'South Tigris, Scholars of the': {
        '2': [
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-01',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-01',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-01',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-01',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-01',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-01',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-01',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-02',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-03',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-04',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-04',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-04',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-04',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-04',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-04',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-04',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-05',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-05',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-05',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-05',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-05',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-05',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-05',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-06',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-06',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-06',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-06',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-06',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-06',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-06',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-07',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-07',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-07',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-07',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-07',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-07',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-07',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-discard',
                        'mod-2': 'gen-08',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-08',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-08',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-08',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-08',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-08',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    c: {
                        connect: 'gen-has',
                        main: 'gen-gold',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'gen-space--card',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--green',
                        'mod-1': 'gen-08',
                        'mod-2': '',
                    },
                },
                weight: 0.02,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--purple',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--purple',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-ttl',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--orange',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--orange',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-ttl',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--green',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--green',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-ttl',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--purple',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--purple',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-ttm',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--orange',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--orange',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-ttm',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--green',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--green',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-ttm',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--purple',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--purple',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-ttr',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--orange',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--orange',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-ttr',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--green',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--green',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-ttr',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--purple',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--purple',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-tbl',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--orange',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--orange',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-tbl',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--green',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--green',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-tbl',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--purple',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--purple',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-tbm',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--orange',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--orange',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-tbm',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--green',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--green',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-tbm',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--purple',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--purple',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-tbr',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--orange',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--orange',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-tbr',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    e: {
                        connect: 'gen-place',
                        main: 'gen-guild--green',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    d: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    c: {
                        connect: 'gen-place',
                        main: 'gen-guild--green',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-execute',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-tbr',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'sost-travel',
                        'mod-1': 'gen-here',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'sost-translate',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-has',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-topmost',
                        'mod-2': 'gen-here',
                    },
                    a: {
                        connect: '',
                        main: 'gen-guild--purple',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'sost-translate',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-has',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-topmost',
                        'mod-2': 'gen-here',
                    },
                    a: {
                        connect: '',
                        main: 'gen-guild--orange',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'sost-translate',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-has',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-topmost',
                        'mod-2': 'gen-here',
                    },
                    a: {
                        connect: '',
                        main: 'gen-guild--green',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'sost-translate',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-has',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-bottommost',
                        'mod-2': 'gen-here',
                    },
                    a: {
                        connect: '',
                        main: 'gen-guild--purple',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'sost-translate',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-has',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-bottommost',
                        'mod-2': 'gen-here',
                    },
                    a: {
                        connect: '',
                        main: 'gen-guild--orange',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'sost-translate',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-has',
                        main: 'gen-card--brown',
                        'mod-1': 'gen-bottommost',
                        'mod-2': 'gen-here',
                    },
                    a: {
                        connect: '',
                        main: 'gen-guild--green',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {},
                weight: 2.0,
            },
        ],
        '3': [
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-guild--purple',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.33,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-guild--orange',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.33,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-guild--green',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.33,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-card--brown',
                        'mod-1': 'sost-travel',
                        'mod-2': 'gen-ttl',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-card--brown',
                        'mod-1': 'sost-travel',
                        'mod-2': 'gen-ttm',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-card--brown',
                        'mod-1': 'sost-travel',
                        'mod-2': 'gen-ttr',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-card--brown',
                        'mod-1': 'sost-travel',
                        'mod-2': 'gen-tbl',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-card--brown',
                        'mod-1': 'sost-travel',
                        'mod-2': 'gen-tbm',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-card--brown',
                        'mod-1': 'sost-travel',
                        'mod-2': 'gen-tbr',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.17,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-card--brown',
                        'mod-1': 'sost-translate',
                        'mod-2': 'gen-ttl',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-card--brown',
                        'mod-1': 'sost-translate',
                        'mod-2': 'gen-ttm',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-card--brown',
                        'mod-1': 'sost-translate',
                        'mod-2': 'gen-ttr',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-card--brown',
                        'mod-1': 'sost-translate',
                        'mod-2': 'gen-tml',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-card--brown',
                        'mod-1': 'sost-translate',
                        'mod-2': 'gen-tmr',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-card--brown',
                        'mod-1': 'sost-translate',
                        'mod-2': 'gen-tbl',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-card--brown',
                        'mod-1': 'sost-translate',
                        'mod-2': 'gen-tbm',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    b: {
                        connect: 'gen-place',
                        main: 'gen-card--brown',
                        'mod-1': 'sost-translate',
                        'mod-2': 'gen-tbr',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {},
                weight: 6.0,
            },
        ],
    },
    'South Tigris, Inventors of the': {
        '2': [
            {
                action: {
                    b: {
                        connect: 'gen-execute',
                        main: 'iost-workshop-tile',
                        'mod-1': 'gen-discard',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'iost-ship',
                        'mod-1': 'gen-01',
                        'mod-2': 'gen-here',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    b: {
                        connect: 'gen-execute',
                        main: 'iost-workshop-tile',
                        'mod-1': 'gen-discard',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'iost-ship',
                        'mod-1': 'gen-02',
                        'mod-2': 'gen-here',
                    },
                },
                weight: 0.5,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'gen-bottommost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-device-board',
                        'mod-1': 'gen-01',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--brown',
                        'mod-1': 'iost-invent',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'gen-bottommost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-device-board',
                        'mod-1': 'gen-02',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--brown',
                        'mod-1': 'iost-invent',
                        'mod-2': '',
                    },
                },
                weight: 0.19,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'gen-bottommost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-device-board',
                        'mod-1': 'gen-03',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--brown',
                        'mod-1': 'iost-invent',
                        'mod-2': '',
                    },
                },
                weight: 0.31,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'gen-bottommost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-device-board',
                        'mod-1': 'gen-04',
                        'mod-2': '',
                    },
                    a: {
                        connect: '',
                        main: 'gen-card--brown',
                        'mod-1': 'iost-invent',
                        'mod-2': '',
                    },
                },
                weight: 0.38,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'iost-construct',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-invent',
                        'mod-2': 'gen-bottommost',
                    },
                    a: {
                        connect: '',
                        main: 'iost-device-board',
                        'mod-1': 'iost-invent',
                        'mod-2': 'gen-01',
                    },
                },
                weight: 0.25,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'iost-construct',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-invent',
                        'mod-2': 'gen-bottommost',
                    },
                    a: {
                        connect: '',
                        main: 'iost-device-board',
                        'mod-1': 'iost-invent',
                        'mod-2': 'gen-02',
                    },
                },
                weight: 0.38,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'iost-construct',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-invent',
                        'mod-2': 'gen-bottommost',
                    },
                    a: {
                        connect: '',
                        main: 'iost-device-board',
                        'mod-1': 'iost-invent',
                        'mod-2': 'gen-03',
                    },
                },
                weight: 0.63,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'iost-construct',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-invent',
                        'mod-2': 'gen-bottommost',
                    },
                    a: {
                        connect: '',
                        main: 'iost-device-board',
                        'mod-1': 'iost-invent',
                        'mod-2': 'gen-04',
                    },
                },
                weight: 0.75,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-bottommost',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-01',
                    },
                    a: {
                        connect: '',
                        main: 'gen-dice--blue',
                        'mod-1': 'gen-roll',
                        'mod-2': '',
                    },
                },
                weight: 0.04,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-bottommost',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-01',
                    },
                    a: {
                        connect: '',
                        main: 'gen-dice--orange',
                        'mod-1': 'gen-roll',
                        'mod-2': '',
                    },
                },
                weight: 0.04,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-bottommost',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-01',
                    },
                    a: {
                        connect: '',
                        main: 'gen-dice--black',
                        'mod-1': 'gen-roll',
                        'mod-2': '',
                    },
                },
                weight: 0.04,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-bottommost',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-02',
                    },
                    a: {
                        connect: '',
                        main: 'gen-dice--blue',
                        'mod-1': 'gen-roll',
                        'mod-2': '',
                    },
                },
                weight: 0.06,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-bottommost',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-02',
                    },
                    a: {
                        connect: '',
                        main: 'gen-dice--orange',
                        'mod-1': 'gen-roll',
                        'mod-2': '',
                    },
                },
                weight: 0.06,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-bottommost',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-02',
                    },
                    a: {
                        connect: '',
                        main: 'gen-dice--black',
                        'mod-1': 'gen-roll',
                        'mod-2': '',
                    },
                },
                weight: 0.06,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-bottommost',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-03',
                    },
                    a: {
                        connect: '',
                        main: 'gen-dice--blue',
                        'mod-1': 'gen-roll',
                        'mod-2': '',
                    },
                },
                weight: 0.1,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-bottommost',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-03',
                    },
                    a: {
                        connect: '',
                        main: 'gen-dice--orange',
                        'mod-1': 'gen-roll',
                        'mod-2': '',
                    },
                },
                weight: 0.1,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-bottommost',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-03',
                    },
                    a: {
                        connect: '',
                        main: 'gen-dice--black',
                        'mod-1': 'gen-roll',
                        'mod-2': '',
                    },
                },
                weight: 0.1,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-bottommost',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-04',
                    },
                    a: {
                        connect: '',
                        main: 'gen-dice--blue',
                        'mod-1': 'gen-roll',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-bottommost',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-04',
                    },
                    a: {
                        connect: '',
                        main: 'gen-dice--orange',
                        'mod-1': 'gen-roll',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-bottommost',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-04',
                    },
                    a: {
                        connect: '',
                        main: 'gen-dice--black',
                        'mod-1': 'gen-roll',
                        'mod-2': '',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'iost-publish',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-bottommost',
                    },
                    a: {
                        connect: '',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-01',
                    },
                },
                weight: 0.13,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'iost-publish',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-bottommost',
                    },
                    a: {
                        connect: '',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-02',
                    },
                },
                weight: 0.19,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'iost-publish',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-bottommost',
                    },
                    a: {
                        connect: '',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-03',
                    },
                },
                weight: 0.31,
            },
            {
                action: {
                    c: {
                        connect: 'gen-execute',
                        main: 'iost-publish',
                        'mod-1': '',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-else',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-bottommost',
                    },
                    a: {
                        connect: '',
                        main: 'iost-device-board',
                        'mod-1': 'iost-construct',
                        'mod-2': 'gen-04',
                    },
                },
                weight: 0.38,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-research',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-research',
                        'mod-1': 'gen-ongoing',
                        'mod-2': 'gen-01',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-research',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-research',
                        'mod-1': 'gen-tent',
                        'mod-2': 'gen-01',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-research',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-research',
                        'mod-1': 'gen-instant',
                        'mod-2': 'gen-01',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.08,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-research',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-research',
                        'mod-1': 'gen-ongoing',
                        'mod-2': 'gen-02',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.11,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-research',
                        'mod-1': 'gen-leftmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-research',
                        'mod-1': 'gen-tent',
                        'mod-2': 'gen-02',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.11,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-research',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-research',
                        'mod-1': 'gen-instant',
                        'mod-2': 'gen-02',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.11,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-research',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-research',
                        'mod-1': 'gen-ongoing',
                        'mod-2': 'gen-03',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.14,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-research',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-research',
                        'mod-1': 'gen-tent',
                        'mod-2': 'gen-03',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.14,
            },
            {
                action: {
                    c: {
                        connect: 'gen-else',
                        main: 'iost-research',
                        'mod-1': 'gen-rightmost',
                        'mod-2': '',
                    },
                    b: {
                        connect: 'gen-place',
                        main: 'iost-research',
                        'mod-1': 'gen-instant',
                        'mod-2': 'gen-03',
                    },
                    a: {
                        connect: '',
                        main: 'gen-influence',
                        'mod-1': '',
                        'mod-2': '',
                    },
                },
                weight: 0.14,
            },
            {
                action: {},
                weight: 3.0,
            },
        ],
    },
};
