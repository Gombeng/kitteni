import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Accordion = ({
	image,
	name,
	description,
	temperament,
	wikipedia_url,
}) => {
	const parentRef = useRef();
	const [expanded, setExpanded] = useState(false);

	return (
		<Container>
			<div className="card">
				<div className="img-container">
					<img src={image?.url} alt={name} />
				</div>
				<div className="card-body">
					<div className="flex">
						<h3 onClick={() => setExpanded(!expanded)}>{name}</h3>

						<button className="btn" onClick={() => setExpanded(!expanded)}>
							{expanded ? '-' : '+'}
						</button>
					</div>

					<div
						className="expand"
						ref={parentRef}
						style={
							expanded
								? { height: parentRef.current.scrollHeight + 'px' }
								: null
						}
					>
						<strong>Description</strong>
						<p>{description}</p>

						<strong>Temperament</strong>
						<p>{temperament}</p>

						<strong>More Info</strong>
						<a href={wikipedia_url} target="_blank">
							Wikipedia: {name}
						</a>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Accordion;

const Container = styled.div`
	margin: 1rem auto;

	.card {
		border-radius: 0.3rem;
		overflow: hidden;
		max-width: 290px;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

		.img-container {
			img {
				width: 100%;
			}
		}

		.card-body {
			padding: 1rem;
			background-color: white;

			.flex {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			h3 {
				cursor: pointer;
			}

			button {
				all: unset;
				display: grid;
				place-items: center;
				color: white;
				width: 2rem;
				height: 2rem;
				border-radius: 50%;
				font-size: 1.5rem;
				font-weight: bold;
				cursor: pointer;
				background-color: #b88384;
				box-shadow: 1px 1px 10px rgba(184, 131, 132, 0.5);
			}

			.expand {
				height: 0;
				overflow: hidden;
				transition: height ease 0.3s;

				strong {
					display: block;
					margin-top: 1.5rem;
					margin-bottom: 0.5rem;
				}
			}
		}
	}
`;
