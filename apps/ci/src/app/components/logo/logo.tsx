import * as React from 'react';
import './logo.module.scss';

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
  return (
    <div className="d-flex logo-container">
      <figure>
        <div className="logo logo-512">
          <img src="./assets/svg-seeklogo.com.svg" alt="" />
        </div>
        <figcaption>512X512</figcaption>
      </figure>
      <figure>
        <div className="logo logo-256">
          <img src="/assets/svg-seeklogo.com.svg" alt="" />
        </div>
        <figcaption>256X256</figcaption>
      </figure>

      <figure>
        <div className="logo logo-128">
          <img src="/assets/svg-seeklogo.com.svg" alt="" />
        </div>
        <figcaption>128X128</figcaption>
      </figure>

      <figure>
        <div className="logo logo-64">
          <img src="/assets/svg-seeklogo.com.svg" alt="" />
        </div>
        <figcaption>64X64</figcaption>
      </figure>

      <figure>
        <div className="logo logo-32">
          <img src="/assets/svg-seeklogo.com.svg" alt="" />
        </div>
        <figcaption>32X32</figcaption>
      </figure>
    </div>
  );
}

export default Logo;
