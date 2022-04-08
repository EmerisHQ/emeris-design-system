import BaseInput from './BaseInput.vue';

import { action } from '@storybook/addon-actions';

export default {
  component: BaseInput,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'BaseInput',
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinBaseInput: {},
    onArchiveBaseInput: {},
  },
};

export const actionsData = {
  onPinBaseInput: action('pin-BaseInput'),
  onArchiveBaseInput: action('archive-BaseInput'),
};

const Template = args => ({
  components: { BaseInput },
  setup() {
    return { args, ...actionsData };
  },
  template: '<BaseInput v-bind="args" />',
});
export const Default = Template.bind({});
Default.args = {
  BaseInput: {
    id: '1',
    title: 'Test BaseInput',
    state: 'BaseInput_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  BaseInput: {
    ...Default.args.BaseInput,
    state: 'BaseInput_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  BaseInput: {
    ...Default.args.BaseInput,
    state: 'BaseInput_ARCHIVED',
  },
};