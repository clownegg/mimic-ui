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
      ref="textareaRef"
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
import { defineComponent, ref, onMounted } from 'vue';
import { props } from './props';

export default defineComponent({
  name: 'MiTextarea',
  props,
  emits: ['update:modelValue', 'change', 'focus', 'blur', 'keydown'],
  setup(props, ctx) {
    const textareaRef = ref<HTMLTextAreaElement | null>(null);

    const resize = () => {
      if (!textareaRef.value) return;

      textareaRef.value.style.height = 'auto';
      textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
    };

    const handleInput = (event: InputEvent) => {
      resize();
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

    onMounted(() => {
      resize();
    });

    return {
      handleInput,
      handleChange,
      handleKeydown,
      handleFocus,
      handleBlur,
      textareaRef,
    };
  },
});
</script>
