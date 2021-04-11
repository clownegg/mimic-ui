<template>
  <div :class="['mi-image']">
    <slot v-if="loading" name="loading">
      <div class="mi-image--loading">LOADING</div>
    </slot>

    <slot v-else-if="error" name="error">
      <div class="mi-image--error">FAILED</div>
    </slot>

    <img v-else class="mi-image--inner" :src="src" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { props } from './props';

import { useImage } from './useImage';

export default defineComponent({
  name: 'MiImage',
  props,
  setup(props) {
    const { loading, error } = useImage(props.src);

    return { loading, error };
  },
});
</script>
