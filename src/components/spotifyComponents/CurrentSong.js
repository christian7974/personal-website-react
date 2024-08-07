import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CurrentSong() {
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        // URL to fetch the current track and get the refresh token
        const response = await axios.get('https://spotify-backend-pg71.onrender.com/api/current-track');

        if (response.status === 200 && response.data) {
          setCurrentTrack(response.data);
        } else {
          setCurrentTrack(null);
        }
      } catch (error) {
        console.error('Error fetching current track:', error.message);
      }
    };

    fetchCurrentTrack();
    
    const interval = setInterval(fetchCurrentTrack, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='text-center items-center'>
      {currentTrack ? (
        <div className='border-slate-50'>
          <img src={currentTrack.imageUrl} alt="Album cover" className='w-[30%] phone:w-[200px] h-auto' style={{margin: '0 auto'}} />
          <div className='tablet:text-[20px] tall:text-[20px] text-[18px]'>
            <h2>{currentTrack.name}</h2>
            <p>Artist: {currentTrack.artist}</p>
            <p>Album: {currentTrack.album}</p>
          </div>
        </div>
      ) : (
        <p className='text-4xl'>No track currently playing.</p>
      )}
    </div>
  );
};

