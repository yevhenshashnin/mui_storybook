import {Meta, StoryObj} from '@storybook/react';
import CustomTimePicker from "../../UI/CustomTimePicker.tsx";
import * as dayjs from "dayjs";

const meta: Meta<typeof F> = {
    title: 'UI/CustomTimePicker',
    component: CustomTimePicker
};

export default meta;
type Story = StoryObj<typeof CustomTimePicker>;

export const TimePickerWithoutLabel: Story = {
    args: {
        value: null,
        setValue: () => {
        },
        sx: {width: '300px'}
    }
};

export const TimePickerWithLabel: Story = {
    args: {
        value: null,
        setValue: () => {
        },
        sx: {width: '300px'},
        label: 'Label',
        labelSx: {m: 1}
    }
};

export const TimePickerWithLabelAndTime: Story = {
    args: {
        value: dayjs(new Date()),
        setValue: () => {
        },
        sx: {width: '300px'},
        label: 'Label',
        labelSx: {m: 1}
    }
};

