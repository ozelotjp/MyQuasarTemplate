<script lang="ts" setup>
const leftDrawerOpen = ref(false);
</script>

<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <layout-header v-model="leftDrawerOpen" />
    <layout-sidebar v-model="leftDrawerOpen" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
