<script lang="ts" setup>
const props = defineProps<{ modelValue: boolean }>();
const emits = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>();

const drawer = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value),
});

type Menu = {
  header?: string;
  links: Link[];
};

type Link = {
  label: string;
  to?: string;
  href?: string;
  icon?: string;
  openInNew?: boolean;
};

const menus: Menu[] = [
  { links: [{ label: 'ホーム', to: '/', icon: 'home' }] },
  {
    header: 'いろは歌',
    links: [
      { label: '色は匂へど', to: '/aaa', icon: 'web' },
      { label: '散りぬるを', to: '/bbb', icon: 'person' },
      { label: '我が世誰そ', to: '/ccc', icon: 'star_border' },
      { label: '常ならむ', to: '/ddd', icon: 'search' },
    ],
  },
  {
    links: [
      { label: '設定', to: '/setting', icon: 'settings' },
      { label: 'ヘルプ', to: '/help', icon: 'help' },
      { label: 'フィードバックを送信', to: '/feedback', icon: 'feedback' },
      { label: 'Vue', href: 'https://vuejs.org/index.html', openInNew: true },
      { label: 'Quasar', href: 'https://quasar.dev/', openInNew: true },
    ],
  },
];
</script>

<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    bordered
    :width="280"
    class="bg-white"
  >
    <q-scroll-area class="fit">
      <q-list padding class="text-grey-8">
        <template v-for="(menu, i) in menus" :key="i">
          <q-separator v-if="i > 0" inset class="q-my-sm" />
          <q-item-label v-if="menu.header" header>
            {{ menu.header }}
          </q-item-label>
          <q-item
            v-for="(link, j) in menu.links"
            :key="`${i}-${j}`"
            v-ripple
            :to="link.to"
            :tag="link.href ? 'a' : undefined"
            :href="link.href"
            :target="link.href ? '_blank' : undefined"
            class="drawer-item"
          >
            <q-item-section v-if="link.icon" avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>
                {{ link.label }}
                <q-icon v-if="link.openInNew" name="open_in_new" />
              </q-item-label>
            </q-item-section>
          </q-item>
        </template>
        <div class="q-mt-md">
          <div class="flex flex-center q-gutter-xs">
            <router-link to="/tos" class="drawer-footer-link">
              利用規約
            </router-link>
            <span> · </span>
            <router-link to="/privacy" class="drawer-footer-link">
              プライバシー
            </router-link>
          </div>
        </div>
        <div class="q-mt-md">
          <div class="flex flex-center q-gutter-xs">&copy; 2021 ozelot.dev</div>
        </div>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<style lang="sass" scoped>
.drawer-item
  line-height: 24px
  border-radius: 0 24px 24px 0
  margin-right: 12px
  .q-item__section--avatar
    .q-icon
      /* color: #5f6368 */
  .q-item__label
    /* color: #3c4043 */
    letter-spacing: .01785714em
    font-size: .875rem
    font-weight: 500
    line-height: 1.25rem
.drawer-footer-link
  color: inherit
  text-decoration: none
  font-weight: 500
  font-size: .75rem
  &:hover
    color: #000
</style>
