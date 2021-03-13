<template>
  <div
    v-show="visible"
    :class="['mi-alert', theme ? 'mi-alert--' + theme : '']"
    role="alert"
  >
    <div class="mi-alert__content">
      <h3 v-if="title" class="mi-alert__title">
        {{ title }}
      </h3>

      <p v-if="description" class="mi-alert__description">
        {{ description }}
      </p>

      <i v-if="closable" class="mi-alert__close" role="button" @click="close">
        ×
      </i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { props } from './props';

export default defineComponent({
  name: 'MiAlert',
  props,
  emits: ['close'],
  setup(props, ctx) {
    const visible = ref(true);

    const close = (event: Event) => {
      visible.value = false;
      ctx.emit('close', event);
    };

    return { visible, close };
  },
});
</script>
