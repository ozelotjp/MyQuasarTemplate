<script lang="ts" setup>
const leftDrawerOpen = ref(false);
</script>

<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <the-header v-model="leftDrawerOpen" />
    <the-sidebar v-model="leftDrawerOpen" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
