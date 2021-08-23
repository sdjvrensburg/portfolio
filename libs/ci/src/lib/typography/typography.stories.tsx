import { Story, Meta } from '@storybook/react';
import { Typography, TypographyProps } from './typography';
// @ts-ignore
import TypographyRequirements from './typography.requirements.mdx';

export default {
  component: Typography,
  title: 'Typography',
  parameters: {
    docs: {
      page: TypographyRequirements,
      source: {
        type: 'code',
      },
    },
    controls: { expanded: false },
  },
} as Meta;

export const Basic = (args: TypographyProps) => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h1>The five boxing wizards jumped quickly.</h1>
          <h2>The five boxing wizards jumped quickly.</h2>
          <h3>The five boxing wizards jumped quickly.</h3>
          <h4>The five boxing wizards jumped quickly.</h4>
          <h5>The five boxing wizards jumped quickly.</h5>
          <h6>The five boxing wizards jumped quickly.</h6>
          <p>The five boxing wizards jumped quickly.</p>
        </div>
        <div className="col-6 bg-dark text-white">
          <h1>The five boxing wizards jumped quickly.</h1>
          <h2>The five boxing wizards jumped quickly.</h2>
          <h3>The five boxing wizards jumped quickly.</h3>
          <h4>The five boxing wizards jumped quickly.</h4>
          <h5>The five boxing wizards jumped quickly.</h5>
          <h6>The five boxing wizards jumped quickly.</h6>
          <p>The five boxing wizards jumped quickly.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>Standard</p>
          <p className="fw-bold">fw-bold</p>
          <p className="fw-bolder">fw-bolder</p>
          <p className="text-decoration-underline">text-decoration-underline</p>
          <p className="text-start">text-start</p>
          <p className="text-center">text-center</p>
          <p className="text-end">text-end</p>
        </div>
        <div className="col-6 bg-dark text-white">
          <p>Standard</p>
          <p className="fw-bold">fw-bold</p>
          <p className="fw-bolder">fw-bolder</p>
          <p className="text-decoration-underline">text-decoration-underline</p>
          <p className="text-start">text-start</p>
          <p className="text-center">text-center</p>
          <p className="text-end">text-end</p>
        </div>
      </div>
    </>
  );
};
