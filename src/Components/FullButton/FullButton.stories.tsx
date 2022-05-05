import FullButton from "./FullButton";
import {ComponentStory} from "@storybook/react";

export default {
  title: 'FullButton',
  component: FullButton,
}

const Template: ComponentStory<typeof FullButton> = (...args) => <FullButton {...args} title={'click'} />

export const Button = Template.bind({})

Button.args = {

}