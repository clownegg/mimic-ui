<template>
  <button
    :class="[
      'mi-button',
      theme ? 'mi-button--' + theme : '',
      {
        'is-text': text,
        'is-outline': outline,
        'is-disabled': buttonDisabled,
        'is-block': block,
      },
    ]"
    :disabled="buttonDisabled"
    :autofocus="autoFocus"
    :type="type"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { props } from './props';

export default defineComponent({
  name: 'MiButton',
  props,
  emits: ['click', 'focus', 'blur'],
  setup(props, ctx) {
    const buttonDisabled = computed(() => {
      return props.disabled || props.loading;
    });

    const handleClick = (event: MouseEvent) => {
      ctx.emit('click', event);
    };

    const handleFocus = (event: FocusEvent) => {
      ctx.emit('focus', event);
    };

    const handleBlur = (event: FocusEvent) => {
      ctx.emit('blur', event);
    };

    return {
      buttonDisabled,
      handleClick,
      handleFocus,
      handleBlur,
    };
  },
});
</script>
