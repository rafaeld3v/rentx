import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Title = styled.View`
  font-size: 30px;
  background-color: ${({ theme }) => theme.fonts.secondary_600};
`;
