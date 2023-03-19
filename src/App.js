import React from 'react';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={1000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				theme="light"
				transition={Flip}
			/>
			{/* <NavBar /> */}
			<Routes>
				<Route path='/' element={<Home />}>
				</Route>
			</Routes>
		</>
	)
}

export default App;