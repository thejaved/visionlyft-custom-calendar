import {StyleProp, TextStyle} from 'react-native';

export interface MonthYearPickerProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (month: number, year: number) => void;
  selectedMonth: number;
  selectedYear: number;
  fontFamily?: string;
  selectedMonthTextStyle?: StyleProp<TextStyle>;
}
