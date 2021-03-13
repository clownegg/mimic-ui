import { PropType } from 'vue';

const AlertThemes = [
  'primary',
  'success',
  'warning',
  'danger',
  'hazard',
  'happiness',
  'tradition',
  'dark',
] as const;

type AlertThemeType = typeof AlertThemes[number];

export const props = {
  title: String,
  description: String,
  theme: {
    type: String as PropType<AlertThemeType>,
  },
  closable: {
    type: Boolean,
    default: true,
  },
};
