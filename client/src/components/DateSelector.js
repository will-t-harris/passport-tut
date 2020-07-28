import React from "react";
import DatePicker from "react-datepicker";

export const DateSelector = ({ todoDate, setTodoDate }) => {
	return (
		<>
			<label>Todo Due Date: </label>
			<DatePicker
				selected={todoDate}
				onChange={(todoDate) => setTodoDate(todoDate)}
			/>
		</>
	);
};
