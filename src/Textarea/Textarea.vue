<template>
  <div
    :class="[
      'mi-textarea',
      {
        'is-disabled': disabled,
      },
    ]"
  >
    <textarea
      class="mi-textarea--inner"
      :value="modelValue"
      :name="name"
      :disabled="disabled"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :minlength="minLength"
      :maxlength="maxLength"
      :rows="rows"
      :cols="cols"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { props } from './props';

export default defineComponent({
  name: 'MiTextarea',
  props,
  emits: ['update:modelValue', 'change', 'focus', 'blur', 'keydown'],
  setup(props, ctx) {
    const handleInput = (event: InputEvent) => {
      ctx.emit('update:modelValue', (event.target as HTMLInputElement).value);
    };

    const handleChange = (event: Event) => {
      ctx.emit('change', event);
    };

    const handleFocus = (event: FocusEvent) => {
      ctx.emit('focus', event);
    };

    const handleBlur = (event: FocusEvent) => {
      ctx.emit('blur', event);
    };

    const handleKeydown = (event: KeyboardEvent) => {
      ctx.emit('keydown', event);
    };

    return {
      handleInput,
      handleChange,
      handleKeydown,
      handleFocus,
      handleBlur,
    };
  },
});
</script>
