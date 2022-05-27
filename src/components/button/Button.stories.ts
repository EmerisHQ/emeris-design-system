import Button from './Button.vue';
import { Size, Align, ButtonStatus, ButtonVariant } from '../../types';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    size: {
      options: Object.values(Size).filter(x => typeof x === "string"),
      mapping: Size,
      control: {
        type: 'select',
      },
    },
    alignText: {
      options: Object.values(Align).filter(x => typeof x === "string"),
      mapping: Align,
      control: {
        type: 'select',
      },
    },
    status: {
      options: Object.values(ButtonStatus).filter(x => typeof x === "string"),
      mapping: ButtonStatus,
      control: {
        type: 'select',
      },
    },
    variant: {
      options: Object.values(ButtonVariant).filter(x => typeof x === "string"),
      mapping: ButtonVariant,
      control: {
        type: 'select',
      },
    }
  }
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
  variant: 'link',
};
