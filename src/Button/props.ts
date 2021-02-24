import { PropType } from 'vue';

const ButtonThemes = [
  'primary',
  'success',
  'warning',
  'danger',
  'hazard',
  'happiness',
  'tradition',
  'info',
  'light',
  'dark',
  '',
] as const;

type ButtonThemeType = typeof ButtonThemes[number];
type ButtonTheme = PropType<ButtonThemeType>;
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
    default: '',
    validator: (val: ButtonThemeType): boolean => {
      return ButtonThemes.includes(val);
    },
  },
  outline: Boolean,
  loading: Boolean,
  disabled: Boolean,
  autoFocus: Boolean,
  block: Boolean,
};
