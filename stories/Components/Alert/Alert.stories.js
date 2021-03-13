import { MiAlert } from '../../../src';
import '../../../css/alert.css';

export default {
  title: 'Components/Alert',
  component: MiAlert,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
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
    closable: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args) => ({
  components: { MiAlert },
  setup() {
    return { args };
  },
  template: `<mi-alert v-bind="args" />`,
});

export const Alert = Template.bind({});

Alert.args = {
  title: 'Title',
  description: 'Description',
};
