import {Meta, StoryObj} from '@storybook/react';
import CustomDateTimePicker from "../../UI/CustomDateTimePicker.tsx";
import * as dayjs from "dayjs";

const meta: Meta<typeof F> = {
    title: 'UI/CustomDateTimePicker',
    component: CustomDateTimePicker
};

export default meta;
type Story = StoryObj<typeof CustomDateTimePicker>;

export const DateTimePickerWithoutLabel: Story = {
    args: {
        value: null,
        setValue: () => {
        },
        sx: {width: '300px'}
    }
};

export const DateTimePickerWithLabel: Story = {
    args: {
        value: null,
        setValue: () => {
        },
        sx: {width: '300px'},
        label: 'Label',
        labelSx: {m: 1}
    }
};

export const DateTimePickerWithLabelAndTime: Story = {
    args: {
        value: dayjs(new Date()),
        setValue: () => {
        },
        sx: {width: '300px'},
        label: 'Label',
        labelSx: {m: 1}
    }
};

