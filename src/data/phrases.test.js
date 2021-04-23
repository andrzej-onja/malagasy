import { getAllCategoriesNames, getPhraseIdsForCat } from './phrases'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('getAllCategoriesNames ', () => {
    const received = getAllCategoriesNames('mg')
    const expected = [
        "malagasy name0",
        "malagasy name1",
        "malagasy name2",
    ]
    expect(received).toEqual(expected)
});


it('getPhraseIdsForCat ', () => {
    const received = getPhraseIdsForCat('cat1')
    const expected = [
        "phrase2",
        "phrase3",
        "phrase4",
    ]
    expect(received).toEqual(expected)
});
