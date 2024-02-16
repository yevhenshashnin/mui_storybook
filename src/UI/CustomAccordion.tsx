import React, {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import {SxProps} from '@mui/system';
import { useTheme } from '@mui/material/styles';

interface CustomAccordionProps {
    title: string;
    details: React.ReactNode;
    expanded?: boolean;
    actions?: boolean;
    cancelText?: string;
    agreeText?: string;
    cancelHandler?: () => void;
    agreeHandler?: () => void;
    sx?: SxProps;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
                                                             title,
                                                             details,
                                                             expanded = false,
                                                             actions = false,
                                                             cancelText = 'Cancel',
                                                             agreeText = 'Agree',
                                                             cancelHandler,
                                                             agreeHandler
                                                             , sx
                                                         }) => {
    const [isExpanded, setExpanded] = useState(expanded);
    const theme = useTheme();
    console.log(theme.palette.mode)
    const handleExpansionChange = () => {
        setExpanded(!isExpanded);
    };

    return (
        <Accordion sx={sx} expanded={isExpanded} onChange={handleExpansionChange}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                {title}
            </AccordionSummary>
            <AccordionDetails>
                {details}
            </AccordionDetails>
            {actions && (
                <AccordionActions>
                    <Button onClick={cancelHandler}>{cancelText}</Button>
                    <Button onClick={agreeHandler}>{agreeText}</Button>
                </AccordionActions>
            )}
        </Accordion>
    );
};

export default CustomAccordion;
