import { Story, Meta } from '@storybook/react';
import { Logo, LogoProps } from './logo';
// @ts-ignore
import LogoRequirements from './logo.requirements.mdx';

export default {
  component: Logo,
  title: 'Logo',
  argTypes: {
    src: {
      type: { name: 'string', required: true },
      description: 'Overwritten description',
      control: { type: 'text', expanded: true },
    },
    logoClass: {
      type: { name: 'string', required: false },
      description: 'Overwritten description',
      control: { type: 'text', expanded: true },
    },
  },
  parameters: {
    docs: {
      page: LogoRequirements,
      source: {
        type: 'code',
      },
    },
  },
} as Meta;

export const Undefined_State = (args: LogoProps) => {
  const src = 'undefined';
  const logoClasses = ['logo-128', 'logo-64', 'logo-32', 'logo-16'];
  const logoVClasses = ['logo-v-128', 'logo-v-64', 'logo-v-32', 'logo-v-16'];

  return (
    <>
      <div className="d-flex flex-row">
        {logoClasses.map((classItem) => {
          return (
            <div className="logoBlock">
              <Logo src={src} logoClass={classItem} />
              <p className="classText">{classItem}</p>
            </div>
          );
        })}
      </div>
      <div className="d-flex flex-row">
        {logoVClasses.map((classItem) => {
          return (
            <div className="logoBlock">
              <Logo src={src} logoClass={classItem} />
              <p className="classText">{classItem}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export const Defined_State = (args: LogoProps) => {
  const src = args.src ? args.src : 'svg-logo.svg';
  const logoClasses = ['logo-128', 'logo-64', 'logo-32', 'logo-16'];
  const logoVClasses = ['logo-v-128', 'logo-v-64', 'logo-v-32', 'logo-v-16'];

  return (
    <>
      <div className="d-flex flex-row">
        {logoClasses.map((classItem) => {
          return (
            <div className="logoBlock">
              <Logo src={src} logoClass={classItem} />
              <p className="classText">{classItem}</p>
            </div>
          );
        })}
      </div>
      <div className="d-flex flex-row">
        {logoVClasses.map((classItem) => {
          return (
            <div className="logoBlock">
              <Logo src={src} logoClass={classItem} />
              <p className="classText">{classItem}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const Scaled_State = (args: LogoProps) => {
  const src = args.src ? args.src : 'svg-logo.svg';

  return (
    <>
      <Logo src={src} logoClass="logo-res" />
      <p className="classText">
        Please use the "change viewport" button in the toolbar
      </p>
    </>
  );
};

export const Variable_Class_State = (args: LogoProps) => {
  const src = args.src ? args.src : 'svg-logo.svg';
  const varClass = args.logoClass ? args.logoClass : '';

  return (
    <>
      <Logo src={src} logoClass={'logo-res ' + varClass} />
      <p className="classText">Please edit the class in the control tab</p>
    </>
  );
};

export const LogoExample = (args: LogoProps) => {
  const src = args.src ? args.src : 'svg-logo.svg';
  const varClass = args.logoClass ? args.logoClass : '';
  return <Logo src={src} logoClass={'logo-res ' + varClass} />;
};
