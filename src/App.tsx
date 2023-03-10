import { Button, Grid, Input, Spacer, Card as NextUiCard, Text } from '@nextui-org/react';
import { useState } from 'react';
import Card from './components/Card';
import NavBar from './components/NavBar';

function App() {
  const [url, setUrl] = useState('');
  const [alertDiv, setAlert] = useState(<div></div>);
  const [formats, setFormats] = useState<any[]>([]);

  // const mergeAudioAndVideo = (videoUrl: any, audioUrl: any) => {
  //   const videoElement: any = document.createElement('video');
  //   videoElement.src = URL.createObjectURL(videoUrl);
  //   document.body.appendChild(videoElement);

  //   const audioElement: any = document.createElement('audio');
  //   audioElement.src = URL.createObjectURL(audioUrl);
  //   document.body.appendChild(audioElement);

  //   // Merge the audio and video streams
  //   const mediaStream = new MediaStream();
  //   mediaStream.addTrack(videoElement.captureStream().getVideoTracks()[0]);
  //   mediaStream.addTrack(audioElement.captureStream().getAudioTracks()[0]);

  //   const mergedVideoElement = document.createElement('video');
  //   mergedVideoElement.srcObject = mediaStream;
  //   document.body.appendChild(mergedVideoElement);
  //   return mergedVideoElement;
  // }

  const onClick = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/download/ssyoutube?video_url=${encodeURIComponent(url)}`
      )
      if (res.ok) {
        const jsn = await res.json();
        setAlert(
          <NextUiCard style={{ width: 'auto', margin: '2rem' }}>
            <NextUiCard.Body>
              <Text h3>Video: {jsn.meta.title}</Text>
            </NextUiCard.Body>
          </NextUiCard>
        )
        setFormats([...jsn.url].reverse());
        return
      }
    } catch (err) {
      setAlert(
        <NextUiCard style={{ backgroundColor: 'red', width: 'auto', margin: '2rem' }}>
          <NextUiCard.Body>
            <Text>Error: {new String(err)}</Text>
          </NextUiCard.Body>
        </NextUiCard>
      )
    }
  }
  return (
    <div>
      <NavBar />
      <div>
        {alertDiv}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem',
          marginLeft: '2rem',
          marginRight: '2rem',
        }}
      >
        <Grid>
          <Input
            rounded
            size="lg"
            width='100%'
            // style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            bordered
            label="Enter a youtube video link"
            placeholder="https://www.youtube.com/watch"
            color="primary"
          />
          <Spacer y={0.6} />
          <Button
            onPress={onClick}
            shadow
            color="gradient"
            auto
          >
            Download
          </Button>
          <Spacer y={2} />
          <Grid.Container gap={2} justify="center">
            {formats.map(data => {
              return <Grid xs={12} md={3}>
                <Card key={data.ext} ext={data.ext} format={data.name} format_note={data.quality} container={data.attr.title} url={data.url} />
              </Grid>
            })}
          </Grid.Container>
        </Grid>

      </div>
    </div>
  );
}

export default App;
