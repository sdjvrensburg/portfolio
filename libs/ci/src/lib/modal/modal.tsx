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
  return (
    <div className={`c-modal ${props.backgroundClass} ${props.backgroundImg ? 'c-modal--bg-img' : ''}`}>
      {props.backgroundImg && <img src={props.backgroundImg} className="c-modal-bg-img"/>}
      <div className={`c-modal-dialog ${props.sizeClass} ${props.alignClass}`}>
        <button type="button" className="c-modal-close">
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
  );
}

export default Modal;
