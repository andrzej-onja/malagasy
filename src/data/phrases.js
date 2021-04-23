// const categories = [
//     { id: 'cat0', name: { en: 'engish name0', mg: 'malagasy name0' }, phrasesIds: ['phrase0', 'phrase1',] },
//     { id: 'cat1', name: { en: 'engish name1', mg: 'malagasy name1' }, phrasesIds: ['phrase2', 'phrase3', 'phrase4'] },
//     { id: 'cat2', name: { en: 'engish name2', mg: 'malagasy name2' }, phrasesIds: [] },
// ]




const categoriesData = require('./categories.json')

const phrasesData = require('./phrases.json')


export const getAllCategoriesNames = (lang) => {
    return categoriesData.categories.map((cat) => cat.name[lang])
}

export const getPhraseIdsForCat = (catId) => {
    return categoriesData.categories.find((cat) => cat.id === catId).phrasesIds
}

export const getAllPhrases = () => {
    return phrasesData.phrases
}



// used for preparing the data json
export const getPhrasesByIdContains = (partOfId) => {
    return getAllPhrases().filter((phraseData) => {
        console.log(phraseData);

        return phraseData.id.includes(partOfId)
    })
}
export const getPhrasesIdsByIdContains = (partOfId) => {
    return getPhrasesByIdContains(partOfId).map((phrase)=>phrase.id)
}

