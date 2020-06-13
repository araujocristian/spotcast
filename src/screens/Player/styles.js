import styled from 'styled-components/native';

export const TopBar = styled.View`
  flex-direction: row;
`;

TopBar.Left = styled.View`
  flex: 1;
  padding-left: 16px;
`;

TopBar.Middle = styled.View`
  flex: 2;
  align-items: center;
`;

TopBar.Right = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: flex-end;
`;

TopBar.Title = styled.Text`
  color: white;
  text-transform: uppercase;
`;

TopBar.SubTitle = styled.Text`
  color: white;
  font-weight: bold;
`;