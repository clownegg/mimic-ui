import { PropType } from 'vue';

type ButtonTheme = PropType<
  'primary' | 'success' | 'warning' | 'danger' | 'dark' | 'default'
>;
type ButtonType = PropType<'button' | 'submit' | 'reset'>;

export const props = {
  type: {
    type: String as ButtonType,
    default: 'button',
    validator: (val: string): boolean => {
      return ['button', 'submit', 'reset'].includes(val);
    },
  },
  theme: {
    type: String as ButtonTheme,
    default: 'default',
    validator: (val: string): boolean => {
      return [
        'default',
        'primary',
        'success',
        'warning',
        'danger',
        'dark',
      ].includes(val);
    },
  },
  loading: Boolean,
  disabled: Boolean,
  autoFocus: Boolean,
  block: Boolean,
};
