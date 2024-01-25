import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {Dayjs} from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {Box} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import {SxProps} from "@mui/system";

interface CustomTimePickerProps {
    value: Dayjs | null;
    setValue: (value: Dayjs) => void;
    label?: string;
    sx?: SxProps;
    labelSx?: SxProps;
}

const CustomTimePicker = ({value, setValue, label, sx, labelSx}: CustomTimePickerProps) => {
    return (
        <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {label && <InputLabel sx={labelSx}>{label}</InputLabel>}
                <TimePicker sx={sx} value={value} onChange={(newValue) => setValue(newValue)}/>
            </LocalizationProvider>
        </Box>
    );
};

export default CustomTimePicker;