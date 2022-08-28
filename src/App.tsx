import { Container, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../src/componenets/Navbar';
import Home from '../src/pages/Home';
import ProductCard from './pages/ProductCard';
import ProductDetails from './pages/ProductDetails';

const App = () => {
	return (
		<BrowserRouter>
			<Container maxWidth='xl'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/products/:id' element={<ProductDetails/>} />
					<Route path='/card' element={<ProductCard />} />

					<Route
						path='*'
						element={
							<Container
								sx={{ padding: '1rem', marginTop: '100px' }}>
								<Typography variant='body1'>
									There's nothing here!
								</Typography>
							</Container>
						}
					/>
				</Routes>
			</Container>
		</BrowserRouter>
	);
};

export default App;
