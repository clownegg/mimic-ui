<template>
  <div
    :class="[
      'mimic-input',
      {
        'is-disabled': disabled,
        'mimic-input-group': $slots.prepend || $slots.append,
        'mimic-input-group--append': $slots.append,
        'mimic-input-group--prepend': $slots.prepend,
      },
    ]"
  >
    <!-- prepend -->
    <div v-if="$slots.prepend" class="mimic-input--prepend">
      <slot name="prepend" />
    </div>

    <input
      class="mimic-input--inner"
      :value="modelValue"
      :name="name"
      :type="type"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :minlength="minLength"
      :maxlength="maxLength"
      @input="handleInput"
      @change="handleChange"
      @keydown="handleKeydown"
      @focus="handleFocus"
      @blur="handleBlur"
    />

    <!-- append -->
    <div v-if="$slots.append" class="mimic-input--append">
      <slot name="append" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { props } from './props';

export default defineComponent({
  name: 'MimicInput',
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
