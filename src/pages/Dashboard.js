import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import env from './settings';
import Login from './Login';
import {Button} from "react-bootstrap";
import "./Dashboard.css"

const Dashboard = () => {
  const navigate = useNavigate()
	const [quote, setQuote] = useState('')
	const [tempQuote, setTempQuote] = useState('')

	async function populateQuote() {
		const req = await fetch('http://localhost:1337/api/quote', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setQuote(data.quote)
		} else {
			alert(data.error)
		}
	}

	

	async function updateQuote(event) {
		event.preventDefault()

		const req = await fetch('http://localhost:1337/api/quote', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': localStorage.getItem('token'),
			},
			body: JSON.stringify({
				quote: tempQuote,
			}),
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setQuote(tempQuote)
			setTempQuote('')
		} else {
			alert(data.error)
		}
	}


	

	return (
		<>
		<div >

                        <a href ='/'>
                        <div className="logout">
                               <Button  size="lg" class="btn btn-primary btn-lg">Logout</Button>
                               </div>
                           </a>
      </div>
			<h1>Your Notes: {quote || 'No Notes found'}</h1>
			<form onSubmit={updateQuote}>
				<input
					type="text"
					placeholder="Notes"
					value={tempQuote}
					onChange={(e) => setTempQuote(e.target.value)}
				/>
				<input type="submit" value="Update Notes" />
			</form>
		
		</>
	)
}

export default Dashboard