import { useState } from 'react'
import { Container, Header } from 'semantic-ui-react'
import { SearchBar } from '../components/SearchBar'
import { CardList } from '../components/CardList'
import { searchCards } from '../utils/api'

function Home () {
  const [cards, setCards] = useState([])

  async function handleSearch (query) {
    const result = await searchCards(query)
    setCards(result)
  }

  return (
    <Container style={{ marginTop: '2em' }}>
      <Header as='h1'>Pokemon TCG Card Search</Header>
      <SearchBar onSubmit={handleSearch} />
      {cards.length > 0
        ? (
          <CardList cards={cards} />
          )
        : (
          <p>No results found.</p>
          )}
    </Container>
  )
}

export default Home
