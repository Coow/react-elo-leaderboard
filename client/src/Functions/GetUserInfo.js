import NameBuilder from "./NameBuilder";

export default async function GetUserInfo(localUUID) {

	fetch(`http://localhost:3001/users/user`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({'localUUID': localUUID}),
	})
		.then((result) => result.json())
		.then((response) => {
			console.log(response);
			return response;
		});
}

export function GetUserDisplayName(localUUID) {

	fetch(`http://localhost:3001/users/user`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({'localUUID': localUUID}),
	})
		.then((result) => result.json())
		.then((response) => {
            console.log(response)
			return NameBuilder(response.nick, response.firstName, response.lastName);
		});
}
