import { Card, Image } from 'semantic-ui-react'

function CardList ({ cards }) {
  return (
    <Card.Group>
      {cards.map((card) => (
        <Card key={card.id}>
          <Image src={card.images.small} />
          <Card.Content>
            <Card.Header>{card.name}</Card.Header>
            <Card.Meta>{card.set.name}</Card.Meta>
            <Card.Description>
              {card.supertype} - {card.subtype}
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  )
}

export { CardList }
