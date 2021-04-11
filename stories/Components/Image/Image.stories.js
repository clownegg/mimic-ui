import { MiImage } from '../../../src';
import '../../../css/image.css';

export default {
  title: 'Components/Image',
  component: MiImage,
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args) => ({
  components: { MiImage },
  setup() {
    return { args };
  },
  template: `<mi-image v-bind="args" style="width: 300px; height: 300px;" />`,
});

export const Image = Template.bind({});

Image.args = {};
