import React, { useState } from "react"; 
import validator from 'validator'

const App = () => { 

	const [errorMessage, setErrorMessage] = useState('') 
	

	const validate = (value) => { 

		if (validator.isStrongPassword(value, { 
			minLength: 8, minLowercase: 1, 
			minUppercase: 1, minNumbers: 1, minSymbols: 1 
		})) { 
			setErrorMessage('Is Strong Password') 
		} else { 
			setErrorMessage('Is Not Strong Password') 
		} 
	} 

	return ( 
		<div style={{ 
			marginLeft: '450px', font:"initial"
			
		}}> 

		
			<pre> 
				<h1 style={{textTransform:"uppercase",fontSize:"40px"}}>Password Validation </h1>
				<h1 style={{textTransform:"uppercase",fontSize:"33px"}}>Checking Password Strength in ReactJS</h1> 
				<h2>Enter Password: </h2><input type="text" style={{boxSizing:"content-box"}}
					onChange={(e) => validate(e.target.value)}></input> <br /> 
				{errorMessage === '' ? null : 
					<span style={{ 
						fontWeight: 'bold', 
						color: 'red', 
					}}>{errorMessage}</span>} 
			</pre> 
			
			<h4 style={{}}>Note:<br></br>1. Password should have at least one numerical digit(0-9). 
			<br></br> 2. Password's length should be in between 8 to 15 characters.
			<br></br>3. Password should have at least one lowercase letter(a-z).
			<br></br>4. Password should have at least one uppercase letter(A-Z). 
			<br></br>5. Password should have at least one special character ( @, #, %, &, !, $, *).</h4>
			
		</div> 
		
	); 
} 

export default App
