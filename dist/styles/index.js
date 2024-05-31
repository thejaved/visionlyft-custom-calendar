"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
const react_native_1 = require("react-native");
exports.styles = react_native_1.StyleSheet.create({
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
