"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const images_1 = require("../assets/images");
const MonthYearPickerStyles_1 = require("../styles/MonthYearPickerStyles");
const MonthYearPicker = ({ visible, onClose, onSelect, fontFamily, selectedYear, selectedMonth, selectedMonthTextStyle, }) => {
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
    return (react_1.default.createElement(react_native_1.Modal, { transparent: true, animationType: "slide", visible: visible, onRequestClose: onClose },
        react_1.default.createElement(react_native_1.View, { style: MonthYearPickerStyles_1.styles.modalOverlay },
            react_1.default.createElement(react_native_1.Animated.View, { style: [
                    MonthYearPickerStyles_1.styles.modalContainer,
                    { transform: [{ translateY: visible ? 0 : 500 }] },
                ] },
                react_1.default.createElement(react_native_1.Text, { style: [MonthYearPickerStyles_1.styles.modalTitle, { fontFamily }] }, "Select Month and Year"),
                react_1.default.createElement(react_native_1.View, { style: MonthYearPickerStyles_1.styles.yearContainer },
                    react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: handlePreviousYear, style: MonthYearPickerStyles_1.styles.previousButton },
                        react_1.default.createElement(react_native_1.Image, { source: images_1.leftArrow, style: { width: 20, height: 20 }, resizeMode: "contain" })),
                    react_1.default.createElement(react_native_1.Text, { style: [MonthYearPickerStyles_1.styles.yearText, { fontFamily }] }, selectedYear),
                    react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: handleNextYear, style: MonthYearPickerStyles_1.styles.nextButton },
                        react_1.default.createElement(react_native_1.Image, { source: images_1.rightArrow, style: { width: 20, height: 20 }, resizeMode: "contain" }))),
                react_1.default.createElement(react_native_1.View, { style: MonthYearPickerStyles_1.styles.monthContainer }, months.map((month, index) => (react_1.default.createElement(react_native_1.TouchableOpacity, { key: index, style: MonthYearPickerStyles_1.styles.monthButton, onPress: () => {
                        onSelect(index, selectedYear);
                        onClose();
                    } },
                    react_1.default.createElement(react_native_1.Text, { style: [
                            MonthYearPickerStyles_1.styles.monthText,
                            selectedMonth === index
                                ? selectedMonthTextStyle || MonthYearPickerStyles_1.styles.selectedMonthText
                                : null,
                            { fontFamily },
                        ] }, month)))))))));
};
exports.default = MonthYearPicker;
