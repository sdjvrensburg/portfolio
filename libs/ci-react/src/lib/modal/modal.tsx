import { MouseEventHandler, useState } from 'react';
import './modal.module.scss';

/* eslint-disable-next-line */
export interface ModalProps {
  content: string;
  sizeClass?: string;
  alignClass?: string;
  backgroundClass?: string;
  backgroundImg?: string;
}

export function Modal(props: ModalProps) {
  const [modalClose, setModalClose] = useState(false);

  function closeModal(ev: MouseEvent) {
    const target: any = ev.target;
    if (target && target.classList) {
      const tokenList = target.classList as DOMTokenList;

      if (
        tokenList.contains('c-modal') ||
        tokenList.contains('c-modal--button-close')
      ) {
        setModalClose(true);
      }
    }
  }
  function openModal() {
    setModalClose(false);
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          openModal();
        }}
      >
        Open
      </button>
      <div
        className={`c-modal ${modalClose ? 'c-modal--close' : ''} ${
          props.backgroundClass
        } ${props.backgroundImg ? 'c-modal--bg-img' : ''}`}
        onClick={(ev: any) => closeModal(ev)}
      >
        {props.backgroundImg && (
          <img src={props.backgroundImg} className="c-modal-bg-img" />
        )}
        <div
          className={`c-modal-dialog ${props.sizeClass} ${props.alignClass}`}
        >
          <button
            type="button"
            className="c-modal--button-close"
            onClick={(ev: any) => closeModal(ev)}
          >
            X
          </button>

          <div
            className="c-modal-content"
            dangerouslySetInnerHTML={{
              __html: props.content ? props.content : '',
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Modal;
