import { MiButton } from '../../../src';
import '../../../css/button.css';

export default {
  title: 'Components/Button',
  component: MiButton,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['button', 'reset', 'submit'],
      },
    },
    theme: {
      control: {
        type: 'select',
        options: [
          '',
          'primary',
          'success',
          'warning',
          'danger',
          'hazard',
          'happiness',
          'tradition',
          'dark',
        ],
      },
    },
    outline: {
      control: {
        type: 'boolean',
      },
    },
    text: {
      control: {
        type: 'boolean',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    block: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args) => ({
  components: { MiButton },
  setup() {
    return { args };
  },
  template: `<mi-button v-bind="args">${args.label}</mi-button>`,
});

export const Button = Template.bind({});

Button.args = {
  label: 'Mimic',
};
