export const props = {
  disabled: Boolean,
  maxLength: Number,
  minLength: Number,
  rows: Number,
  cols: Number,
  name: String,
  placeholder: String,
  autocomplete: {
    type: String,
    default: 'off',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
};
