import { useState } from 'react'
import { Form, Input } from 'semantic-ui-react'

export function SearchBar (props) {
  const [query, setQuery] = useState('')

  function handleSubmit (event) {
    event.preventDefault()
    props.onSubmit(query)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        action={{ icon: 'search' }}
        placeholder='Search cards...'
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </Form>
  )
}
