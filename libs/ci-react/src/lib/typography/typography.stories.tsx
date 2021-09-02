import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { Typography, TypographyProps } from './typography';
// @ts-ignore
import TypographyRequirements from './typography.requirements.mdx';
import './draft.scss';
import ReactQuill from 'react-quill';
import 'node_modules/react-quill/dist/quill.snow.css';

export default {
  component: Typography,
  title: 'Typography',
  argTypes: {
    fontSrc: {
      options: ['Kaisei HarunoUmi', 'Open Sans'],
      control: 'select',
      defaultValue: null,
    },
  },
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
  const fontDictionary: any = {
    'Kaisei HarunoUmi': 'kasei',
    'Open Sans': 'open-sans',
  };

  const fontFamily = fontDictionary[args.fontSrc];
  return (
    <>
      <div className="row">
        <div className={`col-6 ${fontFamily}`}>
          <h1>The five boxing wizards jumped quickly.</h1>
          <h2>The five boxing wizards jumped quickly.</h2>
          <h3>The five boxing wizards jumped quickly.</h3>
          <h4>The five boxing wizards jumped quickly.</h4>
          <h5>The five boxing wizards jumped quickly.</h5>
          <h6>The five boxing wizards jumped quickly.</h6>
          <p>The five boxing wizards jumped quickly.</p>
        </div>
        <div className={`col-6 bg-dark text-white ${fontFamily}`}>
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
        <div className={`col-6 ${fontFamily}`}>
          <p>Standard</p>
          <p className="fw-bold">fw-bold</p>
          <p className="fw-bolder">fw-bolder</p>
          <p className="text-decoration-underline">text-decoration-underline</p>
          <p className="text-start">text-start</p>
          <p className="text-center">text-center</p>
          <p className="text-end">text-end</p>
        </div>
        <div className={`col-6 bg-dark text-white ${fontFamily}`}>
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

export const demoArea = (args: TypographyProps) => {
  const fontDictionary: any = {
    'Kaisei HarunoUmi': 'kasei',
    'Open Sans': 'open-sans',
  };

  const fontFamily = fontDictionary[args.fontSrc];
  const [typographyData, setTypographyData] = useState('');
  var toolbarOptions = [
    ['bold', 'underline'],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ];

  return (
    <div className="row">
      <div className={`col-6 ${fontFamily}`}>
        <ReactQuill
          theme="snow"
          value={typographyData}
          onChange={setTypographyData}
          modules={{ toolbar: toolbarOptions }}
        />
      </div>
      <div className={`col-6 mt-4 ${fontFamily}`}>
        <div
          className="col-12 p-1 text-check"
          dangerouslySetInnerHTML={{ __html: typographyData }}
        ></div>
        <div
          className="col-12 bg-dark text-white p-1 text-check"
          dangerouslySetInnerHTML={{ __html: typographyData }}
        ></div>
      </div>
    </div>
  );
};
