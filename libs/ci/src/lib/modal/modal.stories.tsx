import { Story, Meta } from '@storybook/react';
import { Modal, ModalProps } from './modal';
// @ts-ignore
import ModalRequirements from './modal.requirements.mdx';

export default {
  component: Modal,
  title: 'Modal',
  argTypes: {
    sizeClass: {
      options: [
        'c-modal-dialog--small',
        'c-modal-dialog--medium',
        'c-modal-dialog--large',
      ],
      control: 'radio',
      defaultValue: null,
    },
    content: {
      options: [
        '<div class="c-modal-header"></div><div class="c-modal-body"></div><div class="c-modal-footer"></div>',
        '<div class="c-modal-body"></div>',
      ],
      control: 'radio',
    },
    alignClass: {
      options: [
        'c-modal-dialog--align-top-left',
        'c-modal-dialog--align-top-center',
        'c-modal-dialog--align-top-right',
        'c-modal-dialog--align-mid-left',
        'c-modal-dialog--align-center',
        'c-modal-dialog--align-mid-right',
        'c-modal-dialog--align-bottom-left',
        'c-modal-dialog--align-bottom-center',
        'c-modal-dialog--align-bottom-right',
      ],
      control: 'select',
      defaultValue: null,
    },
  },
  parameters: {
    docs: {
      page: ModalRequirements,
      source: {
        type: 'code',
      },
    },
    controls: { expanded: false },
  },
} as Meta;

export const Basic = (args: ModalProps) => <Modal {...args} />;
