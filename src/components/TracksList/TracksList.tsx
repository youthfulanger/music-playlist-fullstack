import { TracksListProps } from './TracksList.props';
import styles from './TracksList.module.css';
import { TrackItem } from '../TrackItem';
import { useReactiveVar } from '@apollo/client';
import { Track } from '../../generated';
import { PlayerStore } from '../../store/PlayerStore';

export const TracksList = ({ data }: TracksListProps): JSX.Element => {
  const { currentTrackVar } = PlayerStore;
  const currentTrack = useReactiveVar(currentTrackVar);
  const onClickTrack = (track: Track) => () => currentTrackVar(track);

  return (
    <ul className={styles.tracksBlock}>
      {data.map((track) => (
        <li key={track.id}>
          <TrackItem
            active={track.id === currentTrack?.id}
            onClick={onClickTrack(track)}
            title={track.title}
            subtitle={track.author}
          />
        </li>
      ))}
    </ul>
  );
};