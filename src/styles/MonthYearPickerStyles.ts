import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    backgroundColor: 'white',
    borderTopRightRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  yearContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  previousButton: {
    marginRight: 10,
  },
  nextButton: {
    marginLeft: 10,
  },
  yearText: {
    fontSize: 16,
  },
  monthContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  monthButton: {
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  monthText: {
    fontSize: 14,
  },
  selectedMonthText: {
    color: '#FC4100',
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  closeButtonText: {
    fontSize: 16,
    color: 'white',
  },
});
