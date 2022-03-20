import { makeVar } from '@apollo/client';
import {
  CurrentTrack,
  IsPlaying,
  CanChangeTime,
  Volume,
  CurrentTime,
  Duration,
  Playlist,
  SwitchTrackActions,
} from './PlayerStore.d';

class PlayerStore {
  private DISABLE_TIME: number = 200;
  private DEFAULT_VOLUME: number = 0.2;

  audio = new Audio();

  currentTrackVar = makeVar<CurrentTrack>(null);

  isPlayingVar = makeVar<IsPlaying>(false);
  canChangeTimeVar = makeVar<CanChangeTime>(true);

  volumeVar = makeVar<Volume>(this.DEFAULT_VOLUME);
  currentTimeVar = makeVar<CurrentTime>(0);
  durationVar = makeVar<Duration>(0);

  switchTrack = (playlist: Playlist, action: SwitchTrackActions) => {
    const currentTrack = this.currentTrackVar();
    if (!playlist || !currentTrack) return;
    const currentIndex = playlist.findIndex((t) => t.id === currentTrack.id);
    switch (action) {
      case 'NEXT':
        currentIndex === playlist.length - 1
          ? this.currentTrackVar(playlist[0])
          : this.currentTrackVar(playlist[currentIndex + 1]);
        break;
      case 'PREV':
        currentIndex === 0
          ? this.currentTrackVar(playlist[playlist.length - 1])
          : this.currentTrackVar(playlist[currentIndex - 1]);
        break;
    }
  };

  prevTrack = (playlist: Playlist) => this.switchTrack(playlist, 'PREV');

  nextTrack = (playlist: Playlist) => this.switchTrack(playlist, 'NEXT');

  toggleAudio = async () => {
    if (this.audio.paused) {
      this.isPlayingVar(true);
      try {
        await this.audio.play();
      } catch (error) {
        console.log(error);
      }
    } else {
      this.isPlayingVar(false);
      this.audio.pause();
    }
  };

  initializeAudio = (audioSrc: string, playlist: Playlist) => {
    this.audio.src = audioSrc;
    this.audio.ontimeupdate = () => this.currentTimeVar(this.audio.currentTime);
    this.audio.onloadeddata = () => {
      setTimeout(() => {
        this.canChangeTimeVar(true);
      }, this.DISABLE_TIME);
      this.durationVar(this.audio.duration);
    };
    this.audio.onended = () => {
      this.canChangeTimeVar(false);
      this.nextTrack(playlist);
    };
    this.audio.volume = this.DEFAULT_VOLUME;
  };
}

const PlayerStoreInstance = new PlayerStore();

export { PlayerStoreInstance as PlayerStore };