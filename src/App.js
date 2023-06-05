import "./App.css";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";

function App() {
	const [isAuth, setIsAuth] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (localStorage.getItem("auth")) {
			setIsAuth(true);
		}
		setIsLoading(false);
	}, []);
	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
			<HashRouter>
				<Navbar />
				<div className="App">
					<AppRouter />
				</div>
			</HashRouter>
		</AuthContext.Provider>
	);
}

export default App;
