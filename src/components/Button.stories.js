import Button from './Button.vue';

export default {
  component: Button,
  title: 'Button',
};

const Template = (args) => ({
  components: { Button },
  setup() { return { args }; },
  template: '<Button v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  name: 'Default'
};

export const Link = Template.bind({});
Link.args = { 
  name: 'Link',
  variant: 'link'
};
