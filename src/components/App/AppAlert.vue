<script lang="ts" setup>
import { PropType } from 'vue';

type Variant = 'positive' | 'negative' | 'info' | 'warning';

const props = defineProps({
  variant: {
    type: String as PropType<Variant>,
    required: true,
  },
});
</script>

<template>
  <q-banner :class="props.variant">
    <slot />
  </q-banner>
</template>

<style scoped>
.positive {
  background-color: #d1fae5;
  color: #047857;
}

.negative {
  background-color: #fee2e2;
  color: #b91c1c;
}

.info {
  background-color: #dbeafe;
  color: #1d4ed8;
}

.warning {
  background-color: #fef3c7;
  color: #b45309;
}
</style>
