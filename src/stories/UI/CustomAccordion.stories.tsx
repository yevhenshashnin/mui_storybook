import {Meta, StoryObj} from '@storybook/react';
import CustomAccordion from '../../UI/CustomAccordion.tsx';

const meta: Meta<typeof CustomAccordion> = {
    title: 'UI/CustomAccordion',
    component: CustomAccordion
};

export default meta;
type Story = StoryObj<typeof CustomAccordion>;

export const AccordionWithoutButtons: Story = {
    args: {
        title: 'Custom Accordion',
        details: 'This accordion receives props and render them',
        expanded: false,
    }
};

export const AccordionWithoutButtonsExpanded: Story = {
    args: {
        title: 'Custom Accordion',
        details: 'This accordion receives props and render them',
        expanded: true,
        actions: false,
    }
};

export const AccordionWithButtons: Story = {
    args: {
        title: 'Custom Accordion',
        details: 'This accordion receives props and render them',
        expanded: false,
        actions: true,
        cancelText: 'cancel',
        agreeText: 'agree',
        cancelHandler: () => {
        },
        agreeHandler: () => {
        }
    }
};

export const AccordionWithButtonsExpanded: Story = {
    args: {
        title: 'Custom Accordion',
        details: 'This accordion receives props and render them',
        expanded: true,
        actions: true,
        cancelText: 'cancel',
        agreeText: 'agree',
        cancelHandler: () => {
        },
        agreeHandler: () => {
        }
    }
};