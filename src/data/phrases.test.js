
import {getPhrasesIdsByIdContains, getAllCategoriesNames, getPhraseIdsForCat, getPhrasesByIdContains } from './phrases'

// it('getAllCategoriesNames ', () => {
//     const received = getAllCategoriesNames('mg')
//     const expected = [
//         "malagasy name0",
//         "malagasy name1",
//         "malagasy name2",
//     ]
//     expect(received).toEqual(expected)
// });


// it('getPhraseIdsForCat ', () => {
//     const received = getPhraseIdsForCat('###greet###')
//     const expected = [
//         "phrase2",
//         "phrase3",
//         "phrase4",
//     ]
//     expect(received).toEqual(expected)
// });

// it('getPhrasesByIdContains ', () => {
//     const received = getPhrasesByIdContains('greet')
//     const expected = [
//         "phrase2",
//         "phrase3",
//         "phrase4",
//     ]
//     expect(received).toEqual(expected)
// });
it('getPhrasesIdsByIdContains ', () => {
    const received1 = getPhrasesIdsByIdContains('negation')
    const received2 = getPhrasesIdsByIdContains('prepositions-single')
    const received3 = getPhrasesIdsByIdContains('prepositions-two-words')
    const received4 = getPhrasesIdsByIdContains('prepositions-three-words')
    const expected = [
        "phrase2",
        "phrase3",
        "phrase4",
    ]

    console.log(received1);
    console.log(received2);
    console.log(received3);
    console.log(received4);
    expect(received1).toEqual(expected)
});