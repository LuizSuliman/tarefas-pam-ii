import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #033b93;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  color: #36fbcf;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;
export default () => (
  <Container>
    <Title>I'M HERE!</Title>
    <Title>Reaching far across this new frontier</Title>
  </Container>
);