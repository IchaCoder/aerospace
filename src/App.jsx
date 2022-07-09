import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home/Home";
import Modal from "./component/modal/Modal";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<Router>
			<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<Routes>
				<Route path="/" element={<Home setIsModalOpen={setIsModalOpen} />} />
			</Routes>
		</Router>
	);
}

export default App;
