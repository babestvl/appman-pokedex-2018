import axios from 'axios'

const endPoint = 'http://localhost:3030/api/cards'

const CardApi = {
  getAll: () => axios.get(`${endPoint}?limit=50`).then(res => res.data.cards),
  getByKeyword: async keyword => {
    const resultFromName = await axios
      .get(`${endPoint}?name=${keyword}`)
      .then(res => res.data.cards)
    const resultFromType = await axios
      .get(`${endPoint}?type=${keyword}`)
      .then(res => res.data.cards)
    const result = resultFromName
      .filter(item => resultFromType.findIndex(card => item.id === card.id) === -1)
      .concat(resultFromType)
    return result
  },
  fetchCards: keyword => {
    if (keyword === '') {
      return CardApi.getAll()
    } else {
      return CardApi.getByKeyword(keyword)
    }
  },
}

export default CardApi
