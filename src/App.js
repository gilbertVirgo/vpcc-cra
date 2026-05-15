import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import ArtCourse from "./pages/ArtCourse";
import Beliefs from "./pages/Beliefs";
import Connect from "./pages/Connect";
import Donate from "./pages/Donate";
import ESOL from "./pages/ESOL";
import Footer from "./components/Footer";
// Import page components
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import WhatsOn from "./pages/WhatsOn";
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
					<Route path="/donate" element={<Donate />} />

					<Route path="/esol" element={<ESOL />} />
					<Route path="/art-course" element={<ArtCourse />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
