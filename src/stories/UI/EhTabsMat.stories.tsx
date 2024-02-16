import {Meta, StoryObj} from '@storybook/react';
import EhTabsMat from "../../UI/EhTabsMat.jsx";
import {Tab} from "@mui/material";

const meta: Meta<typeof EhTabsMat> = {
    title: 'UI/EhTabsMat',
    component: EhTabsMat
};

export default meta;
type Story = StoryObj<typeof EhTabsMat>;

export const EhTabsMatStoryHorizontal: Story = {
        args: {
            size: "medium",
            orientation: "horizontal",
            children:
                [
                    <Tab label="Basic Info" key="1">
                        <p>
                            Consectetur feugiat lectus inceptos pulvinar odio, ut mollis amet
                            at torquent aptent, blandit venenatis erat platea tristique
                            aliquam ultricies molestie nec malesuada torquent eu commodo
                            tristique habitant risus tempus.
                        </p>
                    </Tab>,
                    <Tab label="Detailed Info" key="2">
                        <p>
                            Fringilla ante malesuada etiam nunc tempor interdum est cras,
                            vehicula massa aptent nisl fames nisi aenean eget mi, cursus
                            consectetur risus sollicitudin elit fames tristique ante per
                            euismod ultricies ligula.
                        </p>
                    </Tab>,
                    <Tab label="Miscellaneous" key="3">
                        <p>
                            Pellentesque egestas vel sollicitudin donec venenatis neque
                            volutpat quisque risus tristique consequat cras arcu adipiscing ad
                            nec iaculis vulputate vivamus imperdiet fermentum massa himenaeos,
                            sodales donec turpis ut auctor non cubilia.
                        </p>
                    </Tab>,
                ]
        }
    }
;

export const EhTabsMatStoryHorizontalWithBtn: Story = {
    args: {
        ...EhTabsMatStoryHorizontal.args,
        addButton: {
            onClick: () => console.log('add btn'),
            text: 'add'
        }
    },
};

export const EhTabsMatStoryVertical: Story = {
    args: {
        ...EhTabsMatStoryHorizontal.args,
        orientation: 'vertical',
    },
};

export const EhTabsMatStoryVerticalWithBtn: Story = {
    args: {
        ...EhTabsMatStoryHorizontal.args,
        orientation: 'vertical',
        addButton: {
            onClick: () => console.log('add btn'),
            text: 'add'
        }
    },
};