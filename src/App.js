import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRouter from './pages/Public/PublicRouter';
import AdminRouter from './pages/Admin/AdminRouter';
import AuthRouter from './pages/Auth/AuthRouter';
import AuthGuard from './_helpers/AuthGuard';
import Mentions from './pages/Public/Mentions';
import Privacy from './pages/Public/Privacy';
import Cookies from './pages/Public/Cookies';
import Legal from './pages/Public/Legal';
import AppliActeur from './pages/Public/AppliActeur';
import AppliConso from './pages/Public/AppliConso';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<PublicRouter />} />
					<Route path="/admin/*" element={
						<AuthGuard>
							<AdminRouter />
						</AuthGuard>
					} />
					<Route path="/dromadaire" element={<AuthRouter />} />
					<Route path="/mentions" element={<Mentions />} />
					<Route path="/privacy" element={<Privacy />} />
					<Route path='/cookies' element={<Cookies />} />
					<Route path='/legal' element={<Legal />} />
					<Route path='/appli-acteur' element={<AppliActeur />} />
					<Route path='/appli-conso' element={<AppliConso />} />
				</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
