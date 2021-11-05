<script lang="ts" setup>
const props = defineProps({ modelValue: { type: Boolean, required: true } });
const emits = defineEmits(['update:modelValue']);

const drawer = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value),
});
</script>

<template>
  <q-header elevated class="bg-white text-grey-8" height-hint="64">
    <q-toolbar style="height: 64px">
      <q-btn
        flat
        dense
        round
        icon="menu"
        class="q-mr-sm"
        @click="drawer = !drawer"
      />
      <q-toolbar-title
        v-if="$q.screen.gt.xs"
        shrink
        class="row items-center no-wrap"
      >
        MyQuasarTemplate
      </q-toolbar-title>
      <q-space />
      <div class="q-gutter-sm row items-center no-wrap">
        <q-btn
          v-if="$q.screen.gt.sm"
          round
          dense
          flat
          icon="apps"
          color="text-grey-7"
        >
          <q-tooltip>Google Apps</q-tooltip>
        </q-btn>
        <q-btn round dense flat color="grey-8" icon="notifications">
          <q-badge color="red" text-color="white" floating> 2 </q-badge>
          <q-tooltip>Notifications</q-tooltip>
        </q-btn>
        <q-btn round flat>
          <q-avatar size="26px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <q-tooltip>Account</q-tooltip>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>
