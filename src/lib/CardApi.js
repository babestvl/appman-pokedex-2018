import axios from 'axios'

const CardApi = {
  getAll: () => (
    axios.get('http://localhost:3030/api/cards')
    .then(res => res.data.cards)
  ),
}

export default CardApi
