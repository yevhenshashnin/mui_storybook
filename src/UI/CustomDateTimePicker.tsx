import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {Dayjs} from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {Box} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import {SxProps} from "@mui/system";
interface CustomDateTimePickerProps {
    value: Dayjs | null;
    setValue: (value: Dayjs) => void;
    label?: string;
    sx?: SxProps;
    labelSx?: SxProps;
}

const CustomDateTimePicker = ({value, setValue, label, sx,labelSx}: CustomDateTimePickerProps) => {
    return (
        <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {label && <InputLabel sx={labelSx}>{label}</InputLabel>}
                <DateTimePicker sx={sx}  value={value} onChange={(newValue) => setValue(newValue)}/>
            </LocalizationProvider>
        </Box>
    );
};

export default CustomDateTimePicker;