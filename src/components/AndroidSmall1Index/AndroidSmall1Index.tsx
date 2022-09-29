import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _5340275_ask_fm_media_owl_socia } from './_5340275_ask_fm_media_owl_socia';
import classes from './AndroidSmall1Index.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2:4 */
export const AndroidSmall1Index: FC<Props> = memo(function AndroidSmall1Index(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes._5340275_ask_fm_media_owl_socia}>
        <_5340275_ask_fm_media_owl_socia className={classes.icon} />
      </div>
    </div>
  );
});
