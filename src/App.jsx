import { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Accordion from './components/Accordion';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
	const [cats, setCats] = useState([]);
	const [q, setQ] = useState('');
	const [page, setPage] = useState(0);
	const config = {
		headers: {
			'x-api-key':
				'live_eAgyv7xz4n7KjmTQjppfqV2DmdGzucaAOHur4WUAZdWCida5mlvK9YTLg6HTcVX9',
		},
	};

	useEffect(() => {
		const getAllCats = async () => {
			const { data } = await axios.get(
				`https://api.thecatapi.com/v1/breeds?limit=10&page=${page}`,
				config
			);
			setCats(data);
		};
		getAllCats();
	}, [page]);

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

			<InfiniteScroll
				dataLength={cats.length}
				next={() => {
					setPage(page + 1);
					setCats((prev) => [...prev, ...cats]);
				}}
				hasMore={true}
				loader={
					<p style={{ textAlign: 'center', margin: '1rem auto' }}>Loading...</p>
				}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				{cats
					?.filter((cat) => {
						if (q === '') return cat;
						if (cat.name.toLowerCase().includes(q.toLowerCase())) return cat;
					})
					?.map((cat, i) => (
						<Accordion key={cat.id} {...cat} />
					))}
			</InfiniteScroll>
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
