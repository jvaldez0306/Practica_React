import React from 'react';
import Modal from "./Modal.jsx"



export default {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };

/* export const Component = (args) => (<Modal {...args}/>) */
const Template = (args) => (<Modal {...args} />);
export const Component = Template.bind({});
Component.args = {
  primary: true,
  label: 'Modal',
};

