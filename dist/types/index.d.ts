import { StyleProp, ViewStyle, TextStyle } from 'react-native';
export interface CustomCalendarProps {
    fontFamily?: string;
    rowStyle?: StyleProp<ViewStyle>;
    onSubmit?: (date: Date) => void;
    headerStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    navButtonStyle?: StyleProp<TextStyle>;
    headerTextStyle?: StyleProp<TextStyle>;
    selectedDateCellStyle?: StyleProp<ViewStyle>;
    selectedMonthTextStyle?: StyleProp<TextStyle>;
    selectedDateCellTextStyle?: StyleProp<TextStyle>;
}
export interface CellStyle {
    cellStyle?: StyleProp<ViewStyle>;
    cellTextStyle?: StyleProp<TextStyle>;
}
