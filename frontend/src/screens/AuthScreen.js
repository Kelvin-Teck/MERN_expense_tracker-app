import {Routes, Link, Route, useLocation, useNavigate, NavLink} from 'react-router-dom';
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';
import {AuthLayout} from '../styles/Layouts';
import '../styles/style.css';

const AuthScreen = () => {


	return (
		<div style={{zIndex: 100}} className="auth-con">
			<div className="auth">
				<NavLink to="/signup" className="sign signup">SignUp</NavLink>
				<NavLink to="/signin" className="sign signin">SignIn</NavLink>
			</div>
			<article>
				<Routes>
					<Route path="/signup" element={<SignUpScreen />} />
					<Route path="/signin" element={<SignInScreen />} />
				</Routes>
			</article>
		</div>
	)	
}




export default AuthScreen;