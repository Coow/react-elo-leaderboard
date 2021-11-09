import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export const NewUser = () => {

        const handleFormSubmit = (e: React.SyntheticEvent) => {
            e.preventDefault()

            const target = e.target as typeof e.target & {
                nick: { value: string }
                localUUID: { value: string }
                firstName: { value: string }
                lastName: { value: string }
            }

            console.log(target.localUUID.value)

            axios.post(`http://localhost:3001/users`, {
                'nick': target.nick.value,
                'localUUID': target.localUUID.value,
                'firstName': target.firstName.value,
                'lastName': target.lastName.value
            }).then(response => {
                console.log(response)
            })
            .catch(error => {
                console.error(error)
            })
        }

	return (
		<div className='mt-16 items-center justify-content-center'>
			<Form className='w-2/5 m-auto border-blue-600 border-2 rounded-xl text-center p-8' onSubmit={handleFormSubmit}>
				<Form.Group className="mb-4">
					<Form.Label>Nickname*</Form.Label>
					<Form.Control
                        name="nick"
						required
						placeholder='Nickname'
					></Form.Control>

					<Form.Label>Password*</Form.Label>
					<Form.Control
                    name="localUUID"
						required
						type='password'
						placeholder='Password'
					></Form.Control>

					<Form.Label>First Name</Form.Label>
					<Form.Control name="firstName" placeholder='First Name'></Form.Control>

					<Form.Label>Last Name</Form.Label>
					<Form.Control name="lastName" placeholder='Last Name'></Form.Control>
				</Form.Group>
				<Button variant='primary' size="lg" type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
};
