import React, {useState} from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient as Background } from 'expo-linear-gradient';
import { TopBar, ScreenArea, CoverArea, PlayerArea, Controls, AudioSlider } from './styles';

const PlayerScreen = () => {
  const [seconds, setSeconds] = useState(0)
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
          <MaterialCommunityIcons name="chevron-down" size={20} color="#fff" />
        </TopBar.Left>
        <TopBar.Middle>
          <TopBar.Title>Tocando Podcast</TopBar.Title>
          <TopBar.SubTitle>Hipster Ponto Tech </TopBar.SubTitle>
        </TopBar.Middle>
        <TopBar.Right>
          <MaterialIcons name="more-vert" size={20} color="#fff" />
        </TopBar.Right>
      </TopBar>
      <ScreenArea>
        <CoverArea>
          <CoverArea.Image
            resizeMode="contain"
            source={{
              uri: 'https://placehold.it/750x750',
            }}
          />
        </CoverArea>

        <PlayerArea>
          <PlayerArea.Title>Angular vs React - Hipsters #142 </PlayerArea.Title>
          <PlayerArea.Author>Hipsters Ponto Tech</PlayerArea.Author>
          <Controls>
            <Controls.Slider>
              <AudioSlider
                thumbTintColor="#ffffff"
                minimumTrackTintColor="#1dd65f"
                maximumTrackTintColor="#777777"
                minimumValue={0}
                maximumValue={100}
                value={seconds}
                onValueChange={(value) => setSeconds(value)}
              />
              <Controls.Slider.CurrentTime>
                {seconds}
              </Controls.Slider.CurrentTime>
              <Controls.Slider.TotalTime>
                52:07
              </Controls.Slider.TotalTime>
            </Controls.Slider>

            <Controls.Play>
              <MaterialCommunityIcons
                name="play-circle"
                size={106}
                color="#fff"
              />
            </Controls.Play>
          </Controls>
        </PlayerArea>
      </ScreenArea>
    </Background>
  );
};

export default PlayerScreen;
