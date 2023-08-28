import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
	const colors = [
		"white",
		"black",
		"red",
		"green",
		"blue",
		"olive",
		"coral",
		"lightblue",
		"darkblue",
		"lightcoral",
		"#222",
	];
	const [color, setColor] = useState("grey");

	return (
		<>
			<main
				className="w-full h-screen bg-[#444] text-xl"
				style={{ backgroundColor: color }}
			>
				<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 mx-12 ">
					<div className="flex flex-wrap gap-5 justify-center p-2 bg-slate-400 text-white shadow-lg rounded">
						{colors.map((color) => (
							<Button
								key={color}
								onClick={() => setColor(color)}
								bgColor={color}
								text={color}
							/>
						))}
						{/*
						<Button
							onClick={() => setcolor("white")}
							bgColor="white"
							textColor="black"
							text="White"
						></Button>
						<Button
							onClick={() => setcolor("black")}
							bgColor="black"
							text="Black"
						></Button>
						<Button
							onClick={() => setcolor("red")}
							bgColor="red"
							text="Red"
						></Button>
						<Button
							onClick={() => setcolor("green")}
							bgColor="green"
							text="Green"
						></Button>
						<Button
							onClick={() => setcolor("blue")}
							bgColor="blue"
							text="Blue"
						></Button>
						<Button
							onClick={() => setcolor("olive")}
							bgColor="olive"
							text="Olive"
						></Button>
						<Button
							onClick={() => setcolor("coral")}
							bgColor="coral"
							text="Coral"
	></Button>*/}
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
