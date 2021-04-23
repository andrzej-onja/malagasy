const categories = [
    { id: 'cat0', name: { en: 'engish name0', mg: 'malagasy name0' }, phrasesIds: ['phrase0', 'phrase1',] },
    { id: 'cat1', name: { en: 'engish name1', mg: 'malagasy name1' }, phrasesIds: ['phrase2', 'phrase3', 'phrase4'] },
    { id: 'cat2', name: { en: 'engish name2', mg: 'malagasy name2' }, phrasesIds: [] },
]


const phrases = [
    { id: 'phrase0', name: { en: 'engish name0', mg: 'malagasy name0' } },
    { id: 'phrase1', name: { en: 'engish name1', mg: 'malagasy name1' } },
    { id: 'phrase2', name: { en: 'engish name2', mg: 'malagasy name2' } },
    { id: 'phrase3', name: { en: 'engish name3', mg: 'malagasy name3' } },
    { id: 'phrase4', name: { en: 'engish name4', mg: 'malagasy name4' } },
    { id: 'phrase5', name: { en: 'engish name5', mg: 'malagasy name5' } },
]


export const getAllCategoriesNames = (lang) => {
    return categories.map((cat) => cat.name[lang])
}

export const getPhraseIdsForCat = (catId) => {
    return categories.find((cat)=>cat.id===catId).phrasesIds
}

