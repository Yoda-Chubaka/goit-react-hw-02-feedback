import styled from 'styled-components';

export const StaticList = styled.ul`
  padding: 12px;
  max-width: 480px;
  margin: 0 auto;

  border-radius: 4px;
  border: 1px solid green;
  background-color: #9ACD32;
`;

export const DescrStatistics = styled.p`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  font-weight: 500;
  margin: ${p => p.theme.space[3]};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  color: #000;
  cursor: pointer;
`;