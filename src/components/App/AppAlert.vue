<script lang="ts" setup>
const props = defineProps<{
  variant: 'positive' | 'negative' | 'info' | 'warning';
}>();
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
