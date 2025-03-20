import { Routes, Route } from "react-router-dom";

// Import page components
import Home from "./pages/Home";
import WhatsOn from "./pages/WhatsOn";
import About from "./pages/About";
import Beliefs from "./pages/Beliefs";
import Connect from "./pages/Connect";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import { useLocation } from "react-router-dom";

function App() {
	let location = useLocation();

	return (
		<>
			<NavigationBar />
			<main
				className={`container page__${
					location.pathname === "/"
						? "home"
						: location.pathname.substring(1)
				}`}
			>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/whats-on" element={<WhatsOn />} />
					<Route path="/about" element={<About />} />
					<Route path="/beliefs" element={<Beliefs />} />
					<Route path="/connect" element={<Connect />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
