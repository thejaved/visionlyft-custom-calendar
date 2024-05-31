"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCalendar = void 0;
const react_1 = __importStar(require("react"));
const styles_1 = require("./styles");
const MonthYearPicker_1 = __importDefault(require("./components/MonthYearPicker"));
const react_native_1 = require("react-native");
const CustomCalendar = ({ rowStyle, prevIcon, nextIcon, onSubmit, cellStyle, fontFamily, headerStyle, cellTextStyle, containerStyle, navButtonStyle, headerTextStyle, selectedDateCellStyle, selectedMonthTextStyle, selectedDateCellTextStyle, }) => {
    const [selectedDate, setSelectedDate] = (0, react_1.useState)(new Date());
    const [isPickerVisible, setPickerVisible] = (0, react_1.useState)(false);
    const generateMatrix = () => {
        const matrix = [];
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        matrix[0] = daysOfWeek;
        const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
        const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
        let dayCounter = 1;
        for (let row = 1; row < 7; row++) {
            matrix[row] = [];
            for (let col = 0; col < 7; col++) {
                if (row === 1 && col < firstDayOfMonth) {
                    matrix[row][col] = "";
                }
                else if (dayCounter > daysInMonth) {
                    matrix[row][col] = "";
                }
                else {
                    matrix[row][col] = dayCounter++;
                }
            }
        }
        return matrix;
    };
    const changeMonth = (n) => {
        const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + n, 1);
        setSelectedDate(newDate);
    };
    const handleMonthYearSelect = (month, year) => {
        const newDate = new Date(year, month, 1);
        setSelectedDate(newDate);
    };
    const handleDateSelect = (date) => {
        const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date);
        setSelectedDate(newDate);
        const addDay = new Date(newDate);
        addDay.setDate(newDate.getDate() + 1);
        if (onSubmit) {
            onSubmit(addDay);
        }
    };
    const matrix = generateMatrix();
    const rows = matrix.map((row, rowIndex) => (react_1.default.createElement(react_native_1.View, { key: rowIndex, style: [styles_1.styles.row, rowStyle] }, row.map((cell, colIndex) => (react_1.default.createElement(react_native_1.TouchableOpacity, { key: colIndex, style: [
            styles_1.styles.cell,
            cellStyle,
            cell === selectedDate.getDate() ? selectedDateCellStyle : null,
        ], onPress: () => typeof cell === "number" && handleDateSelect(cell) },
        react_1.default.createElement(react_native_1.Text, { style: [
                styles_1.styles.cellText,
                cellTextStyle,
                cell === selectedDate.getDate()
                    ? selectedDateCellTextStyle
                    : null,
                { fontFamily },
            ] }, cell !== "" ? cell : "")))))));
    return (react_1.default.createElement(react_native_1.View, { style: [styles_1.styles.container, containerStyle] },
        react_1.default.createElement(react_native_1.View, { style: [styles_1.styles.header, headerStyle] },
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => changeMonth(-1) }, prevIcon ? (prevIcon) : (react_1.default.createElement(react_native_1.Text, { style: [styles_1.styles.navButton, navButtonStyle, { fontFamily }] }, "Previous"))),
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => setPickerVisible(true) },
                react_1.default.createElement(react_native_1.Text, { style: [styles_1.styles.headerText, headerTextStyle, { fontFamily }] }, selectedDate.toLocaleDateString("default", {
                    month: "long",
                    year: "numeric",
                }))),
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => changeMonth(1) }, nextIcon ? (nextIcon) : (react_1.default.createElement(react_native_1.Text, { style: [styles_1.styles.navButton, navButtonStyle, { fontFamily }] }, "Next")))),
        rows,
        react_1.default.createElement(MonthYearPicker_1.default, { visible: isPickerVisible, onClose: () => setPickerVisible(false), onSelect: handleMonthYearSelect, selectedMonth: selectedDate.getMonth(), selectedYear: selectedDate.getFullYear(), selectedMonthTextStyle: selectedMonthTextStyle, fontFamily: fontFamily })));
};
exports.CustomCalendar = CustomCalendar;
exports.default = exports.CustomCalendar;
