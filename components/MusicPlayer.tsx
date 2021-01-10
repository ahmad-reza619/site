import { useRef, useEffect } from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';

export default function MusicPlayer() {
  const ref = useRef(null);
  const theme = useColorModeValue("#fff", "#000");
  useEffect(function firstMount() {
    let ap = new APlayer({
      container: ref.current,
      theme: '',
      audio: [
        {
          name: "Can't Help falling in Love with You",
          artist: "Elvis Persley",
          url: "Elvis Presley - Can't Help Falling In Love (Audio).mp3",
          cover: "Can't_Help_Falling_in_Love.png",
        },
        {
          name: "Fly me to the moon",
          artist: "Frank Sinatra",
          url: "Frank Sinatra Fly Me To The Moon.mp3",
          cover: "f08dcc36e3a5439b5b53a0f45bfa83b3.png",
        },
      ],
      listFolded: true,
    });
    return function cleanup() {
      ap = null;
    }
  }, [theme]);
  return <div ref={ref} />
}