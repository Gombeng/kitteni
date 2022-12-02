import React, { useState } from 'react';
import styled from 'styled-components';

const Accordion = ({ image, name, description }) => {
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

					{expanded && (
						<div className="expand">
							<strong>Description</strong>
							<p>{description}</p>
						</div>
					)}
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

			button {
				all: unset;
				display: grid;
				place-items: center;
				cursor: pointer;
				width: 2rem;
				height: 2rem;
				border-radius: 50%;
				color: white;
				background-color: #b88384;
				font-size: 1.5rem;
				font-weight: bold;
			}

			.expand {
				margin-top: 1rem;

				strong {
					display: block;
					margin-bottom: 0.8rem;
				}
			}
		}
	}
`;
