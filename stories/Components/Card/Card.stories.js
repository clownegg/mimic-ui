import { MiCard } from '../../../src';
import '../../../css/card.css';

export default {
  title: 'Components/Card',
  component: MiCard,
  argTypes: {},
};

const Template = (args) => ({
  components: { MiCard },
  setup() {
    return { args };
  },
  template: `<mi-card>card</mi-card>`,
});

export const Card = Template.bind({});

Card.args = {};
