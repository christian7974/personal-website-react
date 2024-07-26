import { useEffect, useState } from 'react';
import axios from 'axios';

const CurrentSong = () => {
  const [accessToken, setAccessToken] = useState('');
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const getAccessToken = async () => {
      const clientId = process.env.REACT_APP_CLIENT_ID;
      const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
      const refreshToken = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;
      console.log(clientId);
      console.log(clientSecret);
      console.log(refreshToken);
      try {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
          params: {
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
          },
        });

        setAccessToken(response.data.access_token);
      } catch (error) {
        console.error('Error getting access token:', error);
      }
    };

    getAccessToken();
  }, []);

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      if (!accessToken) return;

      try {
        const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200 && response.data) {
          const track = response.data.item;
          console.log(track);
          setCurrentTrack({
            name: track.name,
            artist: track.artists.map((artist) => artist.name).join(', '),
            album: track.album.name,
            imageUrl: track.album.images[0].url,
          });
        } else {
          setCurrentTrack(null);
        }
      } catch (error) {
        console.error('Error fetching current track:', error);
      }
    };

    fetchCurrentTrack();

    const interval = setInterval(fetchCurrentTrack, 10000);

    return () => clearInterval(interval);
  }, [accessToken]);

  return (
    <div>
      {currentTrack ? (
        <>
          <img src={currentTrack.imageUrl} alt="Album cover" width="100" />
          <h2>{currentTrack.name}</h2>
          <p>Artist: {currentTrack.artist}</p>
          <p>Album: {currentTrack.album}</p>
        </>
      ) : (
        <p>No track currently playing.</p>
      )}
    </div>
  );
};

export default CurrentSong;
