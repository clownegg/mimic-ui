import { MiTextarea } from '../../../src';
import '../../../css/textarea.css';

export default {
  title: 'Components/Textarea',
  component: MiTextarea,
  argTypes: {},
};

const Template = (args) => ({
  components: { MiTextarea },
  setup() {
    return { args };
  },
  template: `<mi-textarea />`,
});

export const Textarea = Template.bind({});

Textarea.args = {};
