export const props = {
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  placeholder: String,
  name: String,
  disabled: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  maxLength: Number,
  minLength: Number,
};
