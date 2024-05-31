import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {leftArrow, rightArrow} from '../assets/images';
import {styles} from '../styles/MonthYearPickerStyles';
import {MonthYearPickerProps} from '../types/MonthYearPickerTypes';

const MonthYearPicker: React.FC<MonthYearPickerProps> = ({
  visible,
  onClose,
  onSelect,
  fontFamily,
  selectedYear,
  selectedMonth,
  selectedMonthTextStyle,
}) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleNextYear = () => {
    const nextYear = selectedYear + 1;
    onSelect(selectedMonth, nextYear);
  };

  const handlePreviousYear = () => {
    const previousYear = selectedYear - 1;
    onSelect(selectedMonth, previousYear);
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Animated.View
          style={[
            styles.modalContainer,
            {transform: [{translateY: visible ? 0 : 500}]},
          ]}>
          <Text style={[styles.modalTitle, {fontFamily}]}>
            Select Month and Year
          </Text>
          <View style={styles.yearContainer}>
            <TouchableOpacity
              onPress={handlePreviousYear}
              style={styles.previousButton}>
              <Image
                source={leftArrow}
                style={{width: 20, height: 20}}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={[styles.yearText, {fontFamily}]}>{selectedYear}</Text>
            <TouchableOpacity
              onPress={handleNextYear}
              style={styles.nextButton}>
              <Image
                source={rightArrow}
                style={{width: 20, height: 20}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.monthContainer}>
            {months.map((month, index) => (
              <TouchableOpacity
                key={index}
                style={styles.monthButton}
                onPress={() => {
                  onSelect(index, selectedYear);
                  onClose();
                }}>
                <Text
                  style={[
                    styles.monthText,
                    selectedMonth === index
                      ? selectedMonthTextStyle || styles.selectedMonthText
                      : null,
                    {fontFamily},
                  ]}>
                  {month}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default MonthYearPicker;
