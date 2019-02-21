import axios from 'axios'

const CardApi = {
  getAll: () => (
    axios.get('http://localhost:3030/api/cards')
    .then(res => {
      console.log(res.data.cards)
      return res.data.cards
    })
  ),
}

export default CardApi
