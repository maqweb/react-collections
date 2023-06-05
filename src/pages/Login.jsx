import React, { useContext } from "react";
import Input from "../components/UI/input/Input";
import Button from "../components/UI/button/Button";
import { AuthContext } from "../context";

const Login = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	const login = (e) => {
		e.preventDefault();
		setIsAuth(true);
		localStorage.setItem("auth", "true");
	};
	return (
		<div className={"login"}>
			<h3>Login</h3>
			<form onSubmit={login}>
				<Input type="text" placeholder={"Enter login"} />
				<Input type="password" placeholder={"Enter password"} />
				<Button>Log in</Button>
			</form>
		</div>
	);
};

export default Login;
