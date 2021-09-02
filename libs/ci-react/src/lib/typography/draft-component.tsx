import { useState } from 'react';

// @ts-ignore
import { EditorState } from 'draft-js';
// @ts-ignore
import { Editor } from 'react-draft-wysiwyg';
import './draft.scss';

/* eslint-disable-next-line */
export interface DraftProps {}

/* DEAD COMPONENT TO SHOW OFF CSS */

export function DraftComponent(props: DraftProps) {
  return (
    <Editor
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
      toolbar={{
        options: ['inline', 'fontSize', 'blockType'],
        inline: {
          options: ['bold', 'underline'],
          bold: { className: 'fw-bold' },
          underline: { className: 'text-decoration-underline' },
        },
        blockType: {
          inDropdown: true,
          options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
          className: undefined,
          component: undefined,
          dropdownClassName: undefined,
        },
      }}
    />
  );
}

export default DraftComponent;
