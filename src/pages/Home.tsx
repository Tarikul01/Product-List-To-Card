
import { ReactElement, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { iProduct } from '../state/actions/Action';
import { fetchProducts } from '../state/actions/products.action';
import Product from '../componenets/Product'
import { Grid } from '@mui/material';
// import { Action } from './state/actions/Action';

type IState = {
	products: iProduct[];
};
type IIState = {
	products: IState;
};

const Home = (): ReactElement => {
	// const products:iProduct[]=useSelector(state:iProduct[] =>state.products);
	const dispatch: Dispatch<any> = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	// const data:readonly iProduct[]=useSelector((state:iProduct[]) =>state.products)
	//  const product =useSelector((state:Product)=>state.product)

	const  {products} = useSelector(
		(state: IIState) => state.products,
		shallowEqual
	);
		

	// useEffect(() => {
	// 	console.log(products)
	// }, [products]);

	return <>
		<Grid container spacing={1} sx={{marginTop:'58px'}} >
		{
			products.map( product=>(<Grid sx={{}} xs={12} sm={6}  md={4}lg={3} key={Number(product.id)} item><Product  product={product} /></Grid>))
		}
		</Grid>



	</>;
};

export default Home;
