import styled from 'styled-components';

const Container = styled.div``;

export interface params {};

const App = (params: params): JSX.Element => {
  return (
    <Container>
      <h1>Titulo App</h1>
    </Container>
  )
};

export default App;