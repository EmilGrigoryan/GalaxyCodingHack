import { Intent } from '@blueprintjs/core/lib/esm/common/intent';
import { Icon } from '@blueprintjs/core/lib/esm/components/icon/icon';
import React from 'react';
import { ICardsResponse } from '../../utils/response/ICardsResponse';

import s from './FullMap.module.scss';

interface ICardItem {
  info: ICardsResponse;
}

const Card: React.FC<ICardItem> = ({ info }) => {

  const iconSize = 150;

  return (
    <a href={`/full-map/${info.id}`}>
      <div className={s.card}>
        <h1 className={s.title}>{info.title}</h1>
        {
          info.status === "OK" && <div className={s.icon}>
          <Icon icon="confirm" iconSize={iconSize} intent={Intent.SUCCESS} />
        </div>
        }

        {
          info.status === "WR" && <div className={s.icon}>
            <Icon icon="disable" iconSize={iconSize} intent={Intent.WARNING} />
          </div>
        }

        {
          info.status === "ER" && <div className={s.icon}>
            <Icon icon="delete" iconSize={iconSize} intent={Intent.DANGER} />
          </div>
        }

        <h3 className={s.description}>{info.description}</h3>

        {
          info.status === "OK" && <div className={s.success}>
            <h3>{info.status}</h3>
          </div>
        }

        {
          info.status === "WR" && <div className={s.warning}>
            <h3>{info.status}</h3>
          </div>
        }

        {
          info.status === "ER" && <div className={s.error}>
            <h3>{info.status}</h3>
          </div>
        }
      </div>
    </a>
  );
};

export default Card;
