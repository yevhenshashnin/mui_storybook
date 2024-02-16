import React from "react";
import CustomAccordion from "./UI/CustomAccordion.tsx";
import CustomDateTimePicker from "./UI/CustomDateTimePicker.tsx";
import {Dayjs} from 'dayjs';
import CustomTimePicker from "./UI/CustomTimePicker.tsx";
import CustomDatePicker from "./UI/CustomDatePicker.tsx";
import {darkTheme, lightTheme} from "./theme.ts";
import { ThemeProvider } from '@mui/material/styles';

function App() {
    const [value, setValue] = React.useState<Dayjs | null>(null);


    return (
        <ThemeProvider theme={lightTheme}>
            <CustomAccordion
                title={'Custom Accordion'}
                details={'This accordion receives props and render them'}
                expanded={false}
                actions={false}
                cancelText={'cancel'}
                agreeText={'agree'}
                cancelHandler={() => {
                }}
                agreeHandler={() => {
                }}
                sx={{background: 'yellow'}}
            />
            <CustomAccordion
                title={'Custom Accordion'}
                details={'This accordion receives props and render them'}
                expanded={true}
                actions={true}
                cancelText={'cancel'}
                agreeText={'agree'}
                cancelHandler={() => {
                }}
                agreeHandler={() => {
                }}
            />
            <CustomDateTimePicker
                value={value}
                setValue={setValue}
                label={'CustomDateTimePicker'}
                sx={{width: '300px'}}
                labelSx={{m: 1}}
            />
            <CustomTimePicker
                value={value}
                setValue={setValue}
                label={'CustomTimePicker'}
                sx={{width: '300px'}}
                labelSx={{m: 1}}
            />
            <CustomDatePicker
                value={value}
                setValue={setValue}
                label={'CustomDatePicker'}
                sx={{width: '300px'}}
                labelSx={{m: 1}}
            />
        </ThemeProvider>
    )
}

export default App
