/* eslint-disable react/prop-types */
function Button({ textColor = "white", bgColor, text, onClick }) {
	return (
		<button
			onClick={onClick}
			className="py-1 px-3 rounded border-none hover:shadow-md"
			style={{
				backgroundColor: bgColor,
				color: bgColor != "white" ? textColor : "black",
			}}
		>
			{text}
		</button>
	);
}

export default Button;
