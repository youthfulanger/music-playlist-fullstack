import { useMemo, useState } from 'react';
import styles from './Playlist.module.css';
import { ErorrBlock } from '../errorBlock/ErorrBlock';
import { FullHeightBlock } from '../fullHeightBlock/FullHeightBlock';
import { Spinner } from '../spinner/Spinner';
import { useQuery } from '@apollo/client';
import { TracksList } from '../tracksList/TracksList';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';
import { PlaylistProps } from './Playlist.props';
import { AddNewTrack } from '../AddNewTrack';
import { SearchInput } from '../SearchInput';

const findTextMatches = (firstText: string, secondText: string) => {
  return firstText.toLowerCase().includes(secondText.toLowerCase());
};

const Playlist = ({}: PlaylistProps): JSX.Element => {
  const { data, loading, error } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);
  let tracks = data?.getAllTracks;

  const [search, setSearch] = useState<string>('');

  const filteredSongs = useMemo(
    () =>
      tracks?.filter(
        (track) =>
          findTextMatches(track.title, search) || findTextMatches(track.author, search)
      ),
    [search]
  );

  if (error)
    return (
      <FullHeightBlock>
        <ErorrBlock />
      </FullHeightBlock>
    );

  if (loading || !tracks)
    return (
      <FullHeightBlock childsCenter>
        <Spinner />
      </FullHeightBlock>
    );

  return (
    <div className={styles.playlist}>
      <div className={styles.head}>
        <h1 className={styles.title}>{`Playlist: ${tracks.length}`}</h1>
        <AddNewTrack />
      </div>
      <SearchInput
        className={styles.search}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <TracksList data={filteredSongs ?? tracks} />
    </div>
  );
};

export default Playlist;
