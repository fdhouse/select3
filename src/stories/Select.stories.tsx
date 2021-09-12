import {ComponentMeta, ComponentStory} from "@storybook/react";
import {LinkSelect} from "../page/LinkSelect";

export default {
    title: 'Select Plugin',
    component: LinkSelect
} as ComponentMeta<typeof LinkSelect>

const Template: ComponentStory<typeof LinkSelect> = (args) => <LinkSelect {...args} />;

export const Three = Template.bind([]);
Three.args = {
    data: [
        [{value: 11, title: 'one'}, {value: 22, title: 'two'}, {value: 33, title: 'three'}],
        [{value: 111, title: 'one'}, {value: 222, title: 'two'}, {value: 333, title: 'three'}],
        [{value: 1111, title: 'one'}, {value: 2222, title: 'two'}, {value: 3333, title: 'three'}]
    ],
    value: [2, 1, 3]
}