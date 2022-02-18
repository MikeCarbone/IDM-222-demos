import { useEffect, useState } from 'react';

import Link from 'next/link'

import CopyText from '../components/atoms/Copy';
import Footer from '../components/molecules/Footer'
import Header from '../components/molecules/Header'


const data = [
	{
		name: "Mike",
		age: 24
	},
	{
		name: "Greg",
		age: "22"
	},
	{
		name: "Alessandra",
		age: "21"
	},
	{
		name: "Nikki",
		age: "22"
	}
]

export default function Home() {

	const [facts, setFacts] = useState([])
	const [counter, setCounter] = useState(0)
	const [intervalState, setIntervalState] = useState()

	// Get cat data
	useEffect(() => {
		const interval = setInterval(() => {
			fetch('https://cat-fact.herokuapp.com/facts')
				.then(r => r.json())
				.then(data => {
					console.log('RUNNING FUNCTION: ', data);
					setFacts(data);
				})
		}, 1500)
		setIntervalState(interval)
	}, [])

	function cancelRequests () {
		clearInterval(intervalState)
	}

	return (
		<>
			<Header />
			<CopyText>This is new text with that same styling</CopyText>
			<CopyText color="red">This is something different</CopyText>

			<button onClick={() => cancelRequests()}>Stop fetching</button>
			<button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
			<CopyText>{counter}</CopyText>


			<div className='flex'>
				{
					facts.map(fact => {
						return (
							<CopyText>{fact.text}</CopyText>
						)
					})
				}
			</div>
			
			<div className='flex'>
				{
					data.map((person) => {
						return <CopyText>{person.name}</CopyText>
					})
				}
			</div>

			<main>
				<h1>Hello!</h1>
				<p>Hey everyone!</p>
				<Link href="/contact">
					<a>
						Contact Page
					</a>
				</Link>
			</main>
			<Footer />
			<style jsx>{`
				.flex {
					display: flex;
					justify-content: space-evenly;
				}
			`}</style>
		</>
	);
}
