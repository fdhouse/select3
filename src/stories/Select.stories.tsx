import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Select3} from "../components/Select3";

export default {
    title: 'Select Plugin',
    component: Select3
} as ComponentMeta<typeof Select3>

const Template:ComponentStory<typeof Select3> = (args) => <Select3 {...args} />;

export const Three = Template.bind([]);
Three.args = {
    data: [{value: 11, title: 'one'},{value: 22, title: 'two'},{value: 33, title: 'three'}],
    value: [2,1,3]
}