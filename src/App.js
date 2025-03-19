import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

// Import page components
import Home from "./pages/Home";
import WhatsOn from "./pages/WhatsOn";
import About from "./pages/About";
import Beliefs from "./pages/Beliefs";
import Connect from "./pages/Connect";
import NavigationBar from "./components/NavigationBar";

function App() {
	return (
		<Router>
			<NavigationBar />
			<main>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/whats-on" element={<WhatsOn />} />
					<Route path="/about" element={<About />} />
					<Route path="/beliefs" element={<Beliefs />} />
					<Route path="/connect" element={<Connect />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
