<script lang="ts" setup>
import { reactive } from 'vue';
import Button from './Button.vue';

import { Size, Align, ButtonStatus, ButtonVariant } from '../../types';

const state = reactive({
  name: 'Sample text',
  size: Size.md,
  alignText: Align.center,
  status: ButtonStatus.active,
  variant: ButtonVariant.primary
});
</script>

<template>
  <Story title="Button" :layout="{ type: 'single', iframe: false }">
    <Variant title="Primary">
      <Button v-bind="state" />
    </Variant>

    <template #controls>
      <HstSelect v-model="state.size" title="Size" :options="Size" />
      <HstSelect v-model="state.alignText" title="Align text" :options="Align" />
      <HstSelect v-model="state.status" title="Status" :options="ButtonStatus" />
      <HstSelect v-model="state.variant" title="Variant" :options="ButtonVariant" />
    </template>
  </Story>
</template>