import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface CustomCalendarStyles {
  row: ViewStyle;
  cell: ViewStyle;
  header: ViewStyle;
  cellText: TextStyle;
  navButton: TextStyle;
  container: ViewStyle;
  headerText: TextStyle;
}

export const styles = StyleSheet.create<CustomCalendarStyles>({
  container: {
    padding: 20,
  },
  header: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
  },
  navButton: {
    fontSize: 16,
    color: '#FF5F00',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 14,
  },
});
