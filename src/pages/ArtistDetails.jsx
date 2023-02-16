import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs ,ArtistLoader} from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';
import { playPause } from '../redux/features/playerSlice';

const ArtistDetails = () => {
  const dispatch = useDispatch();
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  if (isFetchingArtistDetails) return <ArtistLoader title="Loading artist details..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col animate-slowfade">
      <DetailsHeader
        artistId={artistId}
        artistData={artistData}
      />

      <RelatedSongs
      data={artistData?.data[0].views['top-songs']?.data}        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default ArtistDetails;