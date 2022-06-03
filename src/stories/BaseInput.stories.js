import BaseInput from '../components/BaseInput.vue';

export default {
  component: BaseInput,
  title: 'BaseInput',
};

const Template = args => ({
  components: { BaseInput },
  setup() {
    return { args };
  },
  template: '<BaseInput v-bind="args" />',
});
export const Default = Template.bind({});
