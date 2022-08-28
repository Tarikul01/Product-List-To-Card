import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {
	Button,
	ButtonBase,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Rating,
	Stack,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { FC, useState } from 'react';
import { iProduct } from '../state/actions/Action';
import useStyles from '../utils/styles';
import {useNavigate} from 'react-router-dom';
interface iProps {
	product: iProduct;
}

const Product: FC<iProps> = ({ product }): JSX.Element => {
	const [rating] = useState(product.rating.rate);
	const classes=useStyles();
	const navigate=useNavigate();
	const openProduct=()=>{
		navigate(`/products/${product.id}`)

	}
	return (
		<div>
			<Card sx={{ maxWidth: 400, height: '100%' }} variant='outlined'>
				<ButtonBase className={classes.buttonBase} onClick={openProduct} >
					<CardMedia
						component='img'
						height='194'
						image={product.image}
					/>
					<CardContent>
						<Box sx={{ height: '60px' }}>
							<Typography variant='body1'>
								{product.title}
							</Typography>
						</Box>
						<Rating
							name='read-only'
							value={Number(rating)}
							readOnly
						/>
					</CardContent>
				</ButtonBase>
				<CardActions>
					<Stack
						direction={{ md: 'row', sm: 'column' }}
						spacing={2}
						justifyContent='space-between'
						sx={{ width: '100%', padding: '10px' }}>
						<Typography variant='h6' sx={{}} align='center'>
							<>$ {product.price}</>
						</Typography>
						<Button
							sx={{ marginRight: '0' }}
							variant='contained'
							color='primary'
							size="medium"
							startIcon={<ShoppingBasketIcon />}>ADD TO CARD</Button>
					</Stack>
				</CardActions>
			</Card>
		</div>
	);
};

export default Product;
