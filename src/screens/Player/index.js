import React from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient as Background } from 'expo-linear-gradient';
import { TopBar } from './styles';

const PlayerScreen = () => {
  return (
    <Background
      colors={['#464769', '#1B1A1F']}
      style={{
        flex: 1,
        paddingTop: 50,
      }}
    >
      <TopBar>
        <TopBar.Left>
          <MaterialCommunityIcons name="chevron-down" size={20} color="#fff"/>
        </TopBar.Left>
        <TopBar.Middle>
          <TopBar.Title>Tocando Podcast</TopBar.Title>
          <TopBar.SubTitle>Hipster Ponto Tech </TopBar.SubTitle>
        </TopBar.Middle>
        <TopBar.Right>
          <MaterialIcons name="more-vert" size={20} color="#fff" />
        </TopBar.Right>
      </TopBar>
    </Background>
  );
}

export default PlayerScreen;