
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
    const received1 = getPhrasesIdsByIdContains('adj-tastes')
    const received2 = getPhrasesIdsByIdContains('adj-qualities')
    const expected = [
        "phrase2",
        "phrase3",
        "phrase4",
    ]

    console.log(received1);
    console.log(received2);
    expect(received1).toEqual(expected)
});