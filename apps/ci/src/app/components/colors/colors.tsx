import * as React from 'react';

/* eslint-disable-next-line */
export interface ColorsProps {}

export function Colors(props: ColorsProps) {
  return (
    <div className="primary-block">
      <h1>Welcome to colors!</h1>

      <div className="color-row active-theory">
        <div className="pallette-block bg-orange">
          <p>#e27d60</p>
        </div>
        <div className="pallette-block bg-lt-orange">
          <p>#85dcba</p>
        </div>
        <div className="pallette-block bg-green">
          <p>#e8a87c</p>
        </div>
        <div className="pallette-block bg-lt-green">
          <p>#c38d9e</p>
        </div>
        <div className="pallette-block bg-red">
          <p>#41b3a3</p>
        </div>
      </div>
    </div>
  );
}

export default Colors;
