import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import axios from 'axios';
import styled from 'styled-components';
import Accordion from './components/Accordion';

function App() {
	const [count, setCount] = useState(0);
	const cat_url = 'https://api.thecatapi.com/v1/breeds';
	const [cats, setCats] = useState([]);
	const [q, setQ] = useState('');
	const [loading, setLoading] = useState(true);

	const config = {
		headers: {
			'x-api-key':
				'live_eAgyv7xz4n7KjmTQjppfqV2DmdGzucaAOHur4WUAZdWCida5mlvK9YTLg6HTcVX9',
		},
	};

	useEffect(() => {
		const getAllCats = async () => {
			const { data } = await axios.get(cat_url, config);
			setCats(data);
			setLoading(false);
		};
		getAllCats();
	}, []);

	return (
		<Container>
			<div className="navbar">
				<h2>Kitteni</h2>
				<input
					type="text"
					placeholder="Search miiaw..."
					value={q}
					onChange={(e) => setQ(e.target.value)}
				/>
			</div>

			<div className="card-container">
				{cats
					?.filter((cat) => {
						if (q === '') return cat;
						if (cat.name.toLowerCase().includes(q.toLowerCase())) return cat;
					})
					?.map((cat) => (
						<Accordion key={cat?.id} {...cat} />
					))}
				{loading && <p>Loading...</p>}
			</div>
		</Container>
	);
}

export default App;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;

	.navbar {
		box-sizing: border-box;
		position: sticky;
		top: 0;
		color: white;
		width: 100%;
		padding: 0 10%;
		margin-bottom: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 10vh;
		background-color: #757687;
		box-shadow: 1px 1px 10px rgba(117, 118, 135, 0.5);

		h2 {
		}

		input {
			all: unset;
			padding: 0.6rem;
			border: 1px solid black;
			border-radius: 0.3rem;
			color: #757687;
			background-color: white;
			width: 180px;
			border: none;
			outline: none;
		}
	}
`;
