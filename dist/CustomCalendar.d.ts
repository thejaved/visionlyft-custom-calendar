import React from "react";
import { CustomCalendarProps, CellStyle } from "./types";
interface IconProps {
    prevIcon?: React.ReactNode;
    nextIcon?: React.ReactNode;
}
export declare const CustomCalendar: React.FC<CustomCalendarProps & IconProps & CellStyle>;
export default CustomCalendar;
