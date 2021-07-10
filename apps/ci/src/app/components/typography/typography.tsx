import * as React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState } from 'react';

/* eslint-disable-next-line */
export interface TypographyProps {}

export function Typography(props: TypographyProps) {
  const [content, setContent] = useState('');

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current !== null) {
      setContent(editorRef.current.getContent());
    }
  };

  return (
    <>
      <div className="row mb-3">
        <h1 className="col-12">Welcome to typography!</h1>
        <div className="col-6">
          <h1>The five boxing wizards jump quickly.</h1>
          <h2>The five boxing wizards jump quickly.</h2>
          <h3>The five boxing wizards jump quickly.</h3>
          <h4>The five boxing wizards jump quickly.</h4>
          <h5>The five boxing wizards jump quickly.</h5>
          <h6>The five boxing wizards jump quickly.</h6>
          <p>The five boxing wizards jump quickly.</p>
        </div>
        <div className="col-6 dark-bg-text">
          <h1>The five boxing wizards jump quickly.</h1>
          <h2>The five boxing wizards jump quickly.</h2>
          <h3>The five boxing wizards jump quickly.</h3>
          <h4>The five boxing wizards jump quickly.</h4>
          <h5>The five boxing wizards jump quickly.</h5>
          <h6>The five boxing wizards jump quickly.</h6>
          <p>The five boxing wizards jump quickly.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            onKeyUp={log}
            initialValue="<p>Please enter text to test fonts.</p>"
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar: 'undo redo | formatselect ',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
        </div>
        <div
          className="col-6 align-self-stretch border border-dark"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </>
  );
}

export default Typography;
