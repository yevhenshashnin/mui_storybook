import {Meta, StoryObj} from '@storybook/react';
import CustomDatePicker from "../../UI/CustomDatePicker.tsx";
import * as dayjs from "dayjs";

const meta: Meta<typeof CustomDatePicker> = {
    title: 'UI/CustomDatePicker',
    component: CustomDatePicker
};

export default meta;
type Story = StoryObj<typeof CustomDatePicker>;

export const DatePickerWithoutLabel: Story = {
    args: {
        value: null,
        setValue: () => {
        },
        sx: {width: '300px'}
    }
};

export const DatePickerWithLabel: Story = {
    args: {
        value: null,
        setValue: () => {
        },
        sx: {width: '300px'},
        label: 'Label',
        labelSx: {m: 1}
    }
};

export const DatePickerWithLabelAndDate: Story = {
    args: {
        value: dayjs(new Date()),
        setValue: () => {
        },
        sx: {width: '300px'},
        label: 'Label',
        labelSx: {m: 1}
    }
};

