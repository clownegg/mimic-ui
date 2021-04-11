<template>
  <div :class="['mi-card']">
    <div class="mi-card__header" v-if="$slots.header || header">
      <slot name="header">
        {{ header }}
      </slot>
    </div>

    <div class="mi-card__body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MiCard',
});
</script>
