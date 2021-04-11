import { MiInput } from '../../../src';
import '../../../css/input.css';

export default {
  title: 'Components/Input',
  component: MiInput,
  argTypes: {},
};

const Template = (args) => ({
  components: { MiInput },
  setup() {
    return { args };
  },
  template: `<mi-input />`,
});

export const Input = Template.bind({});

Input.args = {};
