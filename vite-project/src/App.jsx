import { useState } from 'react';
import './App.css';
import { Button, Container, Card, Row, Text } from '@nextui-org/react';


function App() {


  return (
    <div className="App">
      <Container sm>
        <Card color="primary" css={{m:4}}>
          <Row justify="center" align="center">
            <Text h6 size={15} color="white" css={{ m: 0}}>
              NextUI gives you the best developer experience with all the features
              you need for building beautiful and modern websites and
              applications.
            </Text>
          </Row>
        </Card>
      </Container>
      <Button css={{m:5}} disabled>Hello World</Button>
    </div>
  )
}

export default App
