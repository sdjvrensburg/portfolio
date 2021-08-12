import React, { ReactEventHandler, SyntheticEvent } from 'react';
import './logo.module.scss';

/* eslint-disable-next-line */
export interface LogoProps {
  src: string;
  logoClass?: string;
}
function imageErrorHandler(ev: SyntheticEvent<HTMLImageElement, Event>): void {
  (ev.target as HTMLImageElement).style.opacity = '0';

  return undefined;
}

export function Logo(props: LogoProps) {
  return (
    <div className={'logo ' + props.logoClass}>
      <img src={props.src} onError={(ev) => imageErrorHandler(ev)} />
    </div>
  );
}

export default Logo;
