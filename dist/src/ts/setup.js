"use strict";
/* eslint-disable quotes */
const actionData = {
    'West Kingdom, Architects of the': {
        1: [
            {
                text: 'Place <b>1</b> worker in the',
                weight: 1,
                dev: 0,
            },
            {
                text: 'Place <b>2</b> workers in the',
                weight: 0.25,
                dev: 0,
            },
        ],
        2: [
            {
                text: '<b>Guildhall and move one step on the cathedral</b>.',
                weight: 1,
                dev: 0,
            },
            {
                text: '<b>Guildhall</b>.',
                weight: 1,
                dev: 0,
            },
            {
                text: '<b>Mines</b>.',
                weight: 2,
                dev: 0,
            },
            {
                text: '<b>Quarry</b>.',
                weight: 2,
                dev: 0,
            },
            {
                text: '<b>Silversmith</b>.',
                weight: 2,
                dev: 0,
            },
            {
                text: '<b>Forest</b>.',
                weight: 2,
                dev: 0,
            },
            {
                text: '<b>Towncenter. Target the location with the <b>largest group of workers of a single color</b>. Perform the <b>Capture</b> action on the <b>x largest groups of automaton workers of a single color</b>. X is the amount of automaton workers on the Towncenter.',
                weight: 0.5,
                dev: 0,
            },
            {
                text: '<b>Towncenter</b>. Target the location with the <b>largest group of workers of any color</b>. Perform the <b>Capture</b> action on the <b>x largest groups of workers of a single color</b>. X is the amount of automaton workers on the Towncenter.',
                weight: 0.5,
                dev: 0,
            },
            {
                text: '<b>Workshop. <b>Discard</b> the card on the <b>Top Row</b> and the <b>x-th Column</b> of the <b>Townsfolk</b> deck. X is the amount of automaton workers on the Workshop.',
                weight: 0.5,
                dev: 0,
            },
            {
                text: '<b>Workshop. <b>Discard</b> the card on the <b>Bottom Row</b> and the <b>x-th Column</b> of the <b>Townsfolk</b> deck. X is the amount of automaton workers on the Workshop.',
                weight: 0.5,
                dev: 0,
            },
            {
                text: '<b>Workshop. <b>Discard</b> the top card of the <b>Buildings</b> deck.',
                weight: 0.5,
                dev: 0,
            },
            {
                text: '<b>Tax Stand</b>. <b>Remove</b> all <b>coins</b> from the <b>Tax Stand</b>',
                weight: 0.5,
                dev: 0,
            },
            {
                text: '<b>Leftmost</b> free spot on the <b>Black Market</b>',
                weight: 0.5,
                dev: 0,
            },
            {
                text: '<b>Rightmost</b> free spot on the <b>Black Market</b>',
                weight: 0.5,
                dev: 0,
            },
            {
                text: "<b>King's Storehouse</b>",
                weight: 1,
                dev: 0,
            },
            {
                text: '<b>Guardhouse</b>, <b>move</b> all <b>captured workers</b> into <b>jail</b> and <b>release</b> all <b>automaton workers</b> from <b>jail</b>.',
                weight: 2,
                dev: 0,
            },
        ],
    },
    'West Kingdom, Paladins of the': {
        1: [
            {
                text: "If a <b>King's Favour</b> is available, <b>place a worker</b> onto the <b>Leftmost</b> <b>King's Favour</b>.",
                weight: 1,
                dev: 0,
            },
            {
                text: "If a <b>King's Favour</b> is available, <b>place a worker</b> onto the <b>First</b> <b>King's Favour</b> (Round 3), if this one is unavailable <b>place a worker</b> onto the <b>Leftmost</b> <b>King's Favour</b>.",
                weight: 0.2,
                dev: 0,
            },
            {
                text: "If a <b>King's Favour</b> is available, <b>place a worker</b> onto the <b>Second</b> <b>King's Favour</b> (Round 4), if this one is unavailable <b>place a worker</b> onto the <b>Leftmost</b> <b>King's Favour</b>.",
                weight: 0.2,
                dev: 0,
            },
            {
                text: "If a <b>King's Favour</b> is available, <b>place a worker</b> onto the <b>Third</b> <b>King's Favour</b> (Round 5), if this one is unavailable <b>place a worker</b> onto the <b>Leftmost</b> <b>King's Favour</b>.",
                weight: 0.2,
                dev: 0,
            },
            {
                text: "If a <b>King's Favour</b> is available, <b>place a worker</b> onto the <b>Fourth</b> <b>King's Favour</b> (Round 6), if this one is unavailable <b>place a worker</b> onto the <b>Leftmost</b> <b>King's Favour</b>.",
                weight: 0.2,
                dev: 0,
            },
            {
                text: "If a <b>King's Favour</b> is available, <b>place a worker</b> onto the <b>Fifth</b> <b>King's Favour</b> (Round 7), if this one is unavailable <b>place a worker</b> onto the <b>Leftmost</b> <b>King's Favour</b>.",
                weight: 0.2,
                dev: 0,
            },
            {
                text: "If a <b>King's Favour</b> is available, <b>place a worker</b> onto the <b>Rightmost</b> <b>King's Favour</b>.",
                weight: 1,
                dev: 0,
            },
            {
                text: "If a <b>King's Favour</b> is available, <b>place a worker</b> onto the <b>First</b> <b>King's Favour</b> (Round 3), if this one is unavailable <b>place a worker</b> onto the <b>Rightmost</b> <b>King's Favour</b>.",
                weight: 0.2,
                dev: 0,
            },
            {
                text: "If a <b>King's Favour</b> is available, <b>place a worker</b> onto the <b>Second</b> <b>King's Favour</b> (Round 4), if this one is unavailable <b>place a worker</b> onto the <b>Rightmost</b> <b>King's Favour</b>.",
                weight: 0.2,
                dev: 0,
            },
            {
                text: "If a <b>King's Favour</b> is available, <b>place a worker</b> onto the <b>Third</b> <b>King's Favour</b> (Round 5), if this one is unavailable <b>place a worker</b> onto the <b>Rightmost</b> <b>King's Favour</b>.",
                weight: 0.2,
                dev: 0,
            },
            {
                text: "If a <b>King's Favour</b> is available, <b>place a worker</b> onto the <b>Fourth</b> <b>King's Favour</b> (Round 6), if this one is unavailable <b>place a worker</b> onto the <b>Rightmost</b> <b>King's Favour</b>.",
                weight: 0.2,
                dev: 0,
            },
            {
                text: "If a <b>King's Favour</b> is available, <b>place a worker</b> onto the <b>Fifth</b> <b>King's Favour</b> (Round 7), if this one is unavailable <b>place a worker</b> onto the <b>Rightmost</b> <b>King's Favour</b>.",
                weight: 0.2,
                dev: 0,
            },
            {
                text: '',
                weight: 4,
                dev: 0,
            },
        ],
        2: [
            {
                text: '<b>Discard</b> the <b>First</b> <b>Townsfolk</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Second</b> <b>Townsfolk</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Third</b> <b>Townsfolk</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Fourth</b> <b>Townsfolk</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Fifth</b> <b>Townsfolk</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>First</b> <b>Outsider</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Second</b> <b>Outsider</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Third</b> <b>Outsider</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Fourth</b> <b>Outsider</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Fifth</b> <b>Outsider</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the top card from the <b>Wall</b> deck.',
                weight: 1,
                dev: 0,
            },
            {
                text: '<b>Place a coin</b> in the <b>rightmost then topmost Region slot</b> available with a <b>Faith</b> level equal to the player possessing the highest <b>Faith</b> (excluding any bonuses from Paladins).',
                weight: 0.25,
                dev: 0,
            },
            {
                text: '<b>Place a coin</b> in the <b>topmost then <b>Rightmost</b> Region slot</b> available with a <b>Faith</b> level equal to the player possessing the highest <b>Faith</b> (excluding any bonuses from Paladins).',
                weight: 0.25,
                dev: 0,
            },
            {
                text: '<b>Place a coin</b> in the <b>rightmost then topmost Region slot</b> available with a <b>Strength</b> level equal to the player possessing the highest <b>Strength</b> (excluding any bonuses from Paladins).',
                weight: 0.25,
                dev: 0,
            },
            {
                text: '<b>Place a coin</b> in the <b>topmost then <b>Rightmost</b> Region slot</b> available with a <b>Strength</b> level equal to the player possessing the highest <b>Strength</b> (excluding any bonuses from Paladins).',
                weight: 0.25,
                dev: 0,
            },
            {
                text: '',
                weight: 8,
                dev: 0,
            },
        ],
        3: [
            {
                text: 'Remove <b>1 Coin</b> from the <b>Tax supply</b>',
                weight: 0.75,
                dev: 0,
            },
            {
                text: 'Remove <b>2 Coin</b> from the <b>Tax supply</b>',
                weight: 0.25,
                dev: 0,
            },
            {
                text: 'Draw <b>1 Suspicion</b> card, remove the shown amount from the <b>Tax supply</b>, the automaton <b>keeps</b> the <b>Suspicion</b> card.',
                weight: 0.75,
                dev: 0,
            },
            {
                text: 'Draw <b>2 Suspicion</b> cards, remove the shown amounts from the <b>Tax supply</b>, the automaton <b>keeps</b> the <b>Suspicion</b> cards.',
                weight: 0.25,
                dev: 0,
            },
            {
                text: '',
                weight: 8,
                dev: 0,
            },
        ],
    },
    'West Kingdom, Viscounts of the': {
        1: [
            {
                text: '<b>Discard</b> the top card from the <b>Townsfolk</b> deck between <b>Region 1 and 2</b>.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the top card from the <b>Townsfolk</b> deck between <b>Region 3 and 4</b>.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the top card from the <b>Townsfolk</b> deck between <b>Region 5 and 6</b>.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the top card from the <b>Townsfolk</b> deck between <b>Region 7 and 8</b>.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the top card from the <b>Townsfolk</b> deck between <b>Region 9 and 10</b>.',
                weight: 0.2,
                dev: 0,
            },
        ],
        2: [
            {
                text: 'Perform the <b>Guildhall Action</b> on the castlewall between <b>Region 1 and 2</b>. Place workers based on all visible Noble and Criminal icons on all player boards, rounding up to the next cutoff.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: 'Perform the <b>Guildhall Action</b> on the castlewall between <b>Region 3 and 4</b>. Place workers based on all visible Noble and Criminal icons on all player boards, rounding up to the next cutoff.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: 'Perform the <b>Guildhall Action</b> on the castlewall between <b>Region 5 and 6</b>. Place workers based on all visible Noble and Criminal icons on all player boards, rounding up to the next cutoff.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: 'Perform the <b>Guildhall Action</b> on the castlewall between <b>Region 7 and 8</b>. Place workers based on all visible Noble and Criminal icons on all player boards, rounding up to the next cutoff.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: 'Perform the <b>Guildhall Action</b> on the castlewall between <b>Region 9 and 10</b>. Place workers based on all visible Noble and Criminal icons on all player boards, rounding up to the next cutoff.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Top Manuscript</b> from the manuscript stack at <b>Region 2</b>.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Top Manuscript</b> from the manuscript stack at <b>Region 4</b>.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Top Manuscript</b> from the manuscript stack at <b>Region 6</b>.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Top Manuscript</b> from the manuscript stack at <b>Region 8</b>.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Top Manuscript</b> from the manuscript stack at <b>Region 10</b>.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Left Building</b> spot at <b>Region 1</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Left Building</b> spot at <b>Region 2</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Left Building</b> spot at <b>Region 3</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Left Building</b> spot at <b>Region 4</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Left Building</b> spot at <b>Region 5</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Left Building</b> spot at <b>Region 6</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Left Building</b> spot at <b>Region 7</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Left Building</b> spot at <b>Region 8</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Left Building</b> spot at <b>Region 9</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Left Building</b> spot at <b>Region 10</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Right Building</b> spot at <b>Region 1</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Right Building</b> spot at <b>Region 2</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Right Building</b> spot at <b>Region 3</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Right Building</b> spot at <b>Region 4</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Right Building</b> spot at <b>Region 5</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Right Building</b> spot at <b>Region 6</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Right Building</b> spot at <b>Region 7</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Right Building</b> spot at <b>Region 8</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Right Building</b> spot at <b>Region 9</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'If possible, <b>Place a coin</b> on the <b>Right Building</b> spot at <b>Region 10</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '',
                weight: 1,
                dev: 0,
            },
        ],
        3: [
            {
                text: 'All players gain <b>1 Debt</b> if they have atleast <b>1 Ciminal</b> icon on their board. The Automaton takes <b>3 Deeds</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'All players gain <b>1 Corruption</b> if they have atleast <b>1 Ciminal</b> icon on their board. The Automaton takes <b>2 Deeds</b>.',
                weight: 0.1,
                dev: 0,
            },
            {
                text: 'All players gain <b>1 Corruption</b> if they have atleast <b>1 Ciminal</b> icon on their board. The Automaton takes <b>1 Deed</b>.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: 'All players may rearrange the cards on their board. The Automaton takes <b>1 Deed</b> and <b>1 Debt</b>.',
                weight: 0.3,
                dev: 0,
            },
            {
                text: 'All players gain <b>1 Virtue</b> if they have <b>no Ciminal</b> icons on their board. The Automaton takes <b>1 Debt</b>.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: 'All players gain <b>1 Virtue</b> if they have <b>no Ciminal</b> icons on their board. The Automaton takes <b>2 Debts</b>.',
                weight: 0.1,
                dev: 0,
            },
            {
                text: 'All players gain <b>1 Deed</b> if they have <b>no Ciminal</b> icons on their board. The Automaton takes <b>3 Debts</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'The Automaton takes <b>1 Deed</b>.',
                weight: 0.5,
                dev: 0,
            },
            {
                text: 'The Automaton takes <b>1 Debt</b>.',
                weight: 0.5,
                dev: 0,
            },
            {
                text: '',
                weight: 8,
                dev: 0,
            },
        ],
    },
    'South Tigris, Wayfarers of the': {
        1: [
            {
                text: '<b>Discard</b> the <b>First <b>Townsfolk</b></b> card (Counting from the deck).',
                weight: 0.15,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Second <b>Townsfolk</b></b> card (Counting from the deck).',
                weight: 0.15,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Third <b>Townsfolk</b></b>card (Counting from the deck).',
                weight: 0.15,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Fourth <b>Townsfolk</b></b> card (Counting from the deck).',
                weight: 0.15,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>First Land</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Second Land</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Third Land</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Fourth Land</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>First Space</b> card (Counting from the deck).',
                weight: 0.1,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Second Space</b> card (Counting from the deck).',
                weight: 0.1,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Third Space</b> card (Counting from the deck).',
                weight: 0.1,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Fourth Space</b> card (Counting from the deck).',
                weight: 0.1,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>First Wnspiration</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Second Wnspiration</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Third Wnspiration</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Fourth Wnspiration</b> card (Counting from the deck).',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>First Inspiration</b> card (Counting from the deck).',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Second Inspiration</b> card (Counting from the deck).',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Third Inspiration</b> card (Counting from the deck).',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Discard</b> the <b>Fourth Inspiration</b> card (Counting from the deck).',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '',
                weight: 2,
                dev: 0,
            },
        ],
        2: [
            {
                text: 'If a card was discarded and If there is an <b>Inspiration</b> token <b>on</b> this <b>card</b>, that player receives <b>1 provision</b>.',
                weight: 0.5,
                dev: 0,
            },
            {
                text: 'If a card was discarded and If there is an <b>Inspiration</b> token <b>on</b> this <b>card</b>, that player receives <b><b>1 Coin</b></b>.',
                weight: 0.5,
                dev: 0,
            },
        ],
        3: [
            {
                text: 'If a card was discarded and If there is a worker on this card, refill the market and <b>move</b> the <b>worker</b> to <b>First</b> card of the same tyoe (Counting from the deck).',
                weight: 0.25,
                dev: 0,
            },
            {
                text: 'If a card was discarded and If there is a worker on this card, refill the market and <b>move</b> the <b>worker</b> to <b>Second</b> card of the same tyoe (Counting from the deck).',
                weight: 0.25,
                dev: 0,
            },
            {
                text: 'If a card was discarded and If there is a worker on this card, refill the market and <b>move</b> the <b>worker</b> to <b>Third</b> card of the same tyoe (Counting from the deck).',
                weight: 0.25,
                dev: 0,
            },
            {
                text: 'If a card was discarded and If there is a worker on this card, refill the market and <b>move</b> the <b>worker</b> to <b>forth</b> card of the same tyoe (Counting from the deck).',
                weight: 0.25,
                dev: 0,
            },
        ],
        4: [
            {
                text: 'Move <b>one</b> step on the <b>Journal Track</b>',
                weight: 1,
                dev: 0,
            },
            {
                text: '',
                weight: 5,
                dev: 0,
            },
        ],
    },
    'South Tigris, Scholars of the': {
        1: [
            {
                text: 'Discard the Top <b>Chinese (1)</b> <b>Translator</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Hire the <b>Chinese (1)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>1 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Chinese (1)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>2 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Chinese (1)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>3 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Chinese (1)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>1 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Chinese (1)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>2 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Chinese (1)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>3 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Discard the Top <b>Sanskrit (2)</b> <b>Translator</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Hire the <b>Sanskrit (2)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>1 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Sanskrit (2)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>2 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Sanskrit (2)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>3 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Sanskrit (2)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>1 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Sanskrit (2)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>2 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Sanskrit (2)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>3 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Discard the Top <b>Greek (3)</b> <b>Translator</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Hire the <b>Greek (3)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>1 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Greek (3)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>2 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Greek (3)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>3 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Greek (3)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>1 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Greek (3)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>2 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Greek (3)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>3 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Discard the Top <b>Hebrew (4)</b> <b>Translator</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Hire the <b>Hebrew (4)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>1 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Hebrew (4)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>2 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Hebrew (4)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>3 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Hebrew (4)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>1 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Hebrew (4)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>2 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Hebrew (4)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>3 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Discard the Top <b>Persian (5)</b> <b>Translator</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Hire the <b>Persian (5)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>1 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Persian (5)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>2 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Persian (5)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>3 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Persian (5)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>1 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Persian (5)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>2 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Persian (5)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>3 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Discard the Top <b>Syriac (6)</b> <b>Translator</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Hire the <b>Syriac (6)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>1 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Syriac (6)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>2 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Syriac (6)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>3 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Syriac (6)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>1 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Syriac (6)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>2 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Syriac (6)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>3 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Discard the Top <b>Wild A (7)</b> <b>Translator</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Hire the <b>Wild A (7)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>1 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Wild A (7)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>2 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Wild A (7)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>3 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Wild A (7)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>1 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Wild A (7)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>2 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Wild A (7)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>3 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Discard the Top <b>Wild B (8)</b> <b>Translator</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Hire the <b>Wild B (8)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>1 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Wild B (8)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>2 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Wild B (8)</b> <b>Translator</b> and place them into the <b>Leftmost</b> free slot with <b>3 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Wild B (8)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>1 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Wild B (8)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>2 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: 'Hire the <b>Wild B (8)</b> <b>Translator</b> and place them into the <b>Rightmost</b> free slot with <b>3 Gold</b> Slots',
                weight: 0.01,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Topleft Scroll</b> to the <b>Purple Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Topleft Scroll</b> to the <b>Orange Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Topleft Scroll</b> to the <b>Green Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Top Scroll</b> to the <b>Purple Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Top Scroll</b> to the <b>Orange Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Top Scroll</b> to the <b>Green Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Topright Scroll</b> to the <b>Purple Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Topright Scroll</b> to the <b>Orange Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Topright Scroll</b> to the <b>Green Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Bottomleft Scroll</b> to the <b>Purple Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Bottomleft Scroll</b> to the <b>Orange Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Bottomleft Scroll</b> to the <b>Green Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Bottom Scroll</b> to the <b>Purple Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Bottom Scroll</b> to the <b>Orange Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Bottom Scroll</b> to the <b>Green Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Bottomright Scroll</b> to the <b>Purple Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Bottomright Scroll</b> to the <b>Orange Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: '<b>Deliver<b> the <b>Bottomright Scroll</b> to the <b>Green Guild</b>.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Attempt to <b>Translate<b> the <b>Top Scroll<b> in the <b>Purple Guild</b>. Place Gold and pay Silver for any used translators if successful.',
                weight: 0.25,
                dev: 0,
            },
            {
                text: 'Attempt to <b>Translate<b> the <b>Top Scroll<b> in the <b>Orange Guild</b>. Place Gold and pay Silver for any used translators if successful.',
                weight: 0.25,
                dev: 0,
            },
            {
                text: 'Attempt to <b>Translate<b> the <b>Top Scroll<b> in the <b>Green Guild</b>. Place Gold and pay Silver for any used translators if successful.',
                weight: 0.25,
                dev: 0,
            },
            {
                text: 'Attempt to <b>Translate<b> the <b>Bottom Scroll<b> in the <b>Purple Guild</b>. Place Gold and pay Silver for any used translators if successful.',
                weight: 0.25,
                dev: 0,
            },
            {
                text: 'Attempt to <b>Translate<b> the <b>Bottom Scroll<b> in the <b>Orange Guild</b>. Place Gold and pay Silver for any used translators if successful.',
                weight: 0.25,
                dev: 0,
            },
            {
                text: 'Attempt to <b>Translate<b> the <b>Bottom Scroll<b> in the <b>Green Guild</b>. Place Gold and pay Silver for any used translators if successful.',
                weight: 0.25,
                dev: 0,
            },
            {
                text: '',
                weight: 1,
                dev: 0,
            },
        ],
        2: [
            {
                text: 'Place one influence token in the Purple Guild',
                weight: 0.75,
                dev: 0,
            },
            {
                text: 'Place two influence tokens in the Purple Guild',
                weight: 0.25,
                dev: 0,
            },
            {
                text: 'Remove one influence token in the Purple Guild',
                weight: 0.25,
                dev: 0,
            },
            {
                text: 'Place one influence token in the Green Guild',
                weight: 0.75,
                dev: 0,
            },
            {
                text: 'Place two influence tokens in the Green Guild',
                weight: 0.25,
                dev: 0,
            },
            {
                text: 'Remove one influence token in the Green Guild',
                weight: 0.25,
                dev: 0,
            },
            {
                text: 'Place one influence token in the Orange Guild',
                weight: 0.75,
                dev: 0,
            },
            {
                text: 'Place two influence tokens in the Orange Guild',
                weight: 0.25,
                dev: 0,
            },
            {
                text: 'Remove one influence token in the Orange Guild',
                weight: 0.25,
                dev: 0,
            },
            {
                text: '',
                weight: 3,
                dev: 0,
            },
        ],
    },
    'South Tigris, Inventors of the': {
        1: [
            {
                text: 'Move the <b>Ship</b> <b>1 Space</b> forward and <b>Discard the <b>Workshop Tile.</b>',
                weight: 0.25,
                dev: 0,
            },
            {
                text: 'Move the <b>Ship</b> <b>2 Spaces</b> forward and <b>Discard the <b>Workshop Tile.</b>',
                weight: 0.25,
                dev: 0,
            },
            {
                text: 'Place a <b>Device Card</b> on the <b>First Device Board</b> together with a <b>random Invention Tile</b>. Gain <b>twice as much Influence</b>. If that board is unavailable, invent at the Bottommost available Device Board.',
                weight: 0.15,
                dev: 0,
            },
            {
                text: 'Place a <b>Device Card</b> on the <b>Second Device Board</b> together with a <b>random Invention Tile</b>. Gain <b>twice as much Influence</b>. If that board is unavailable, invent at the Bottommost available Device Board.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: 'Place a <b>Device Card</b> on the <b>Third Device Board</b> together with a <b>random Invention Tile</b>. Gain <b>twice as much Influence</b>. If that board is unavailable, invent at the Bottommost available Device Board.',
                weight: 0.3,
                dev: 0,
            },
            {
                text: 'Place a <b>Device Card</b> on the <b>Fourth Device Board</b> together with a <b>random Invention Tile</b>. Gain <b>twice as much Influence</b>. If that board is unavailable, invent at the Bottommost available Device Board.',
                weight: 0.35,
                dev: 0,
            },
            {
                text: '<b>Construct</b> the Device on the <b>First Device Board</b>. If no board exists there, Construct the Bottommost constructable device.',
                weight: 0.1,
                dev: 0,
            },
            {
                text: '<b>Construct</b> the Device on the <b>Second Device Board</b>. If no board exists there, Construct the Bottommost constructable device.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Construct</b> the Device on the <b>Third Device Board</b>. If no board exists there, Construct the Bottommost constructable device.',
                weight: 0.3,
                dev: 0,
            },
            {
                text: '<b>Construct</b> the Device on the <b>Fourth Device Board</b>. If no board exists there, Construct the Bottommost constructable device.',
                weight: 0.4,
                dev: 0,
            },
            {
                text: 'Roll a <b>Blue Die<b> and place it on the first constructed device if possible. If no board exists there, Attempt to test the Bottommost publishable device. Gain Influence, move the Boat and discard the workshop tile accordingly',
                weight: 0.025,
                dev: 0,
            },
            {
                text: 'Roll a <b>Orange Die<b> and place it on the first constructed device if possible. If no board exists there, Attempt to test the Bottommost publishable device. Gain Influence, move the Boat and discard the workshop tile accordingly',
                weight: 0.025,
                dev: 0,
            },
            {
                text: 'Roll a <b>Purple Die<b> and place it on the first constructed device if possible. If no board exists there, Attempt to test the Bottommost publishable device. Gain Influence, move the Boat and discard the workshop tile accordingly',
                weight: 0.025,
                dev: 0,
            },
            {
                text: 'Roll a <b>Blue Die<b> and place it on the second constructed device if possible. If no board exists there, Attempt to test the Bottommost publishable device. Gain Influence, move the Boat and discard the workshop tile accordingly',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Roll a <b>Orange Die<b> and place it on the second constructed device if possible. If no board exists there, Attempt to test the Bottommost publishable device. Gain Influence, move the Boat and discard the workshop tile accordingly',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Roll a <b>Purple Die<b> and place it on the second constructed device if possible. If no board exists there, Attempt to test the Bottommost publishable device. Gain Influence, move the Boat and discard the workshop tile accordingly',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Roll a <b>Blue Die<b> and place it on the third constructed device if possible. If no board exists there, Attempt to test the Bottommost publishable device. Gain Influence, move the Boat and discard the workshop tile accordingly',
                weight: 0.075,
                dev: 0,
            },
            {
                text: 'Roll a <b>Orange Die<b> and place it on the third constructed device if possible. If no board exists there, Attempt to test the Bottommost publishable device. Gain Influence, move the Boat and discard the workshop tile accordingly',
                weight: 0.075,
                dev: 0,
            },
            {
                text: 'Roll a <b>Purple Die<b> and place it on the third constructed device if possible. If no board exists there, Attempt to test the Bottommost publishable device. Gain Influence, move the Boat and discard the workshop tile accordingly',
                weight: 0.075,
                dev: 0,
            },
            {
                text: 'Roll a <b>Blue Die<b> and place it on the fourth constructed device if possible. If no board exists there, Attempt to test the Bottommost publishable device. Gain Influence, move the Boat and discard the workshop tile accordingly',
                weight: 0.1,
                dev: 0,
            },
            {
                text: 'Roll a <b>Orange Die<b> and place it on the fourth constructed device if possible. If no board exists there, Attempt to test the Bottommost publishable device. Gain Influence, move the Boat and discard the workshop tile accordingly',
                weight: 0.1,
                dev: 0,
            },
            {
                text: 'Roll a <b>Purple Die<b> and place it on the fourth constructed device if possible. If no board exists there, Attempt to test the Bottommost publishable device. Gain Influence, move the Boat and discard the workshop tile accordingly',
                weight: 0.1,
                dev: 0,
            },
            {
                text: '<b>Publish</b> <b>The First</b> constructed device. If no board exists there, publish the bottommost publishable device. If no player has builder influence on the device, discard the device instead.',
                weight: 0.1,
                dev: 0,
            },
            {
                text: '<b>Publish</b> <b>The Second</b> constructed device. If no board exists there, publish the bottommost publishable device. If no player has builder influence on the device, discard the device instead.',
                weight: 0.2,
                dev: 0,
            },
            {
                text: '<b>Publish</b> <b>The Third</b> constructed device. If no board exists there, publish the bottommost publishable device. If no player has builder influence on the device, discard the device instead.',
                weight: 0.3,
                dev: 0,
            },
            {
                text: '<b>Publish</b> <b>The Fourth</b> constructed device. If no board exists there, publish the bottommost publishable device. If no player has builder influence on the device, discard the device instead.',
                weight: 0.4,
                dev: 0,
            },
            {
                text: 'Place a <b>influence token</b> on the <b>First research tile</b> <b>in the same region as the boat</b>. If no available research is present, research the leftmost available research in any region.',
                weight: 0.025,
                dev: 0,
            },
            {
                text: 'Place a <b>influence token</b> on the <b>Second research tile</b> <b>in the same region as the boat</b>. If no available research is present, research the leftmost available research in any region.',
                weight: 0.025,
                dev: 0,
            },
            {
                text: 'Place a <b>influence token</b> on the <b>Third research tile</b> <b>in the same region as the boat</b>. If no available research is present, research the leftmost available research in any region.',
                weight: 0.025,
                dev: 0,
            },
            {
                text: 'Place a <b>influence token</b> on the <b>Fourth research tile</b> <b>in the same region as the boat</b>. If no available research is present, research the leftmost available research in any region.',
                weight: 0.025,
                dev: 0,
            },
            {
                text: 'Place a <b>influence token</b> on the <b>Fifth research tile</b> <b>in the same region as the boat</b>. If no available research is present, research the leftmost available research in any region.',
                weight: 0.025,
                dev: 0,
            },
            {
                text: 'Place a <b>influence token</b> on the <b>First research tile</b> <b>in the same region as the boat</b>. If no available research is present, research the rightmost available research in any region.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Place a <b>influence token</b> on the <b>Second research tile</b><b>in the same region as the boat</b>. If no available research is present, research the rightmost available research in any region.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Place a <b>influence token</b> on the <b>Third research tile</b> <b>in the same region as the boat</b>. If no available research is present, research the rightmost available research in any region.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Place a <b>influence token</b> on the <b>Fourth research tile</b> <b>in the same region as the boat</b>. If no available research is present, research the rightmost available research in any region.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Place a <b>influence token</b> on the <b>Fifth research tile</b> <b>in the same region as the boat</b>. If no available research is present, research the rightmost available research in any region.',
                weight: 0.05,
                dev: 0,
            },
            {
                text: 'Place <b>1 Influence token<b> in the <b>Blue Guild</b>',
                weight: 0.1,
                dev: 0,
            },
            {
                text: 'Place <b>1 Influence token<b> in the <b>Orange Guild</b>',
                weight: 0.1,
                dev: 0,
            },
            {
                text: 'Place <b>1 Influence token<b> in the <b>Black Guild</b>',
                weight: 0.1,
                dev: 0,
            },
            {
                text: 'Remove <b>1 Influence token<b> from the <b>Blue Guild</b>',
                weight: 0.1,
                dev: 0,
            },
            {
                text: 'Remove <b>1 Influence token<b> from the <b>Orange Guild</b>',
                weight: 0.1,
                dev: 0,
            },
            {
                text: 'Remove <b>1 Influence token<b> from the <b>Black Guild</b>',
                weight: 0.1,
                dev: 0,
            },
            {
                text: 'Remove <b>2 Influence token<b> from the <b>Blue Guild</b>',
                weight: 0.1,
                dev: 0,
            },
            {
                text: 'Remove <b>2 Influence token<b> from the <b>Orange Guild</b>',
                weight: 0.1,
                dev: 0,
            },
            {
                text: 'Remove <b>2 Influence token<b> from the <b>Black Guild</b>',
                weight: 0.1,
                dev: 0,
            },
            {
                text: '',
                weight: 3,
                dev: 0,
            },
        ],
    },
};
function setup() {
    const gameName = document.getElementById('game-setting-game').value;
    const gameActionData = actionData[gameName];
    const gameActionTables = {};
    for (const [key, value] of Object.entries(gameActionData)) {
        gameActionTables[key] = weightedRandomTable(gameActionData[key]);
    }
    localStorage.setItem('actionTables', JSON.stringify(gameActionTables));
    hide_elem('btn-setup');
    hide_elem('main-menu');
    unhide_elem('btn-draw');
    unhide_elem('game');
    draw();
}
function mainMenu() {
    unhide_elem('btn-setup');
    unhide_elem('main-menu');
    hide_elem('btn-draw');
    hide_elem('game');
}
