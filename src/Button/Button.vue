<template>
  <button
    :class="[
      'mimic-button',
      theme ? 'mimic-button--' + theme : '',
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
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { props } from './props';

export default defineComponent({
  name: 'MimicButton',
  props,
  emits: ['click'],
  setup(props, ctx) {
    const buttonDisabled = computed(() => {
      return props.disabled || props.loading;
    });

    const handleClick = (event: MouseEvent) => {
      ctx.emit('click', event);
    };

    return {
      buttonDisabled,
      handleClick,
    };
  },
});
</script>
