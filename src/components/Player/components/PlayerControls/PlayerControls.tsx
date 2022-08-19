import clsx from 'clsx';
import { ReactComponent as ArrowIcon } from '../../../../assets/arrow-icon.svg';
import { playerStore } from '../../../../stores';
import { ButtonIcon } from '../../../ButtonIcon';
import styles from './PlayerControls.module.scss';
import type { FC } from 'react';

const { nextTrack, prevTrack } = playerStore;

export const PlayerControls: FC = () => {
  return (
    <div className={styles.controls}>
      <ButtonIcon
        aria-label="Previous audio"
        title="Previous audio"
        SvgIcon={ArrowIcon}
        className={clsx(styles.arrow, styles.inverse)}
        onClick={() => prevTrack()}
      />
      <ButtonIcon
        aria-label="Next audio"
        title="Next audio"
        SvgIcon={ArrowIcon}
        className={styles.arrow}
        onClick={() => nextTrack()}
      />
    </div>
  );
};