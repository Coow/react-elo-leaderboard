import MatchBackgroundColor from "../Functions/MatchBackgroundColor";
import { GetUserDisplayName } from "../Functions/GetUserInfo";
import NameBuilder from "../Functions/NameBuilder";
import { useEffect, useState } from "react";

type MatchType = {
	team1: Array<String>;
	team2: Array<String>;
	team1score: number;
	team2score: number;
	team1win: boolean;
};

export const Match = ({
	team1,
	team2,
	team1score,
	team2score,
	team1win,
}: MatchType) => {
	const [_t1p, set_t1p] = useState([] as JSX.Element[]);
	const [_t2p, set_t2p] = useState([] as JSX.Element[]);

	let t1p: JSX.Element[] = [];
	let t2p: JSX.Element[] = [];

    //I Would personally describe this function as garbage
	useEffect(() => {
		async function getPlayersTeam1() {
			for (let i = 0; i < team1.length; i++) {
				const element = team1[i];
				await fetch(`http://localhost:3001/users/user`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ localUUID: element }),
				})
					.then((result) => result.json())
					.then((response: IPlayer) => {
						console.log(response);
						t1p.push(
							<div>
								{NameBuilder(
									response.nick,
									response.firstName,
									response.lastName
								)}
							</div>
						);
					});
			}

            set_t1p(t1p)
		}

        async function getPlayersTeam2() {
			for (let i = 0; i < team2.length; i++) {
				const element = team2[i];
				await fetch(`http://localhost:3001/users/user`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ localUUID: element }),
				})
					.then((result) => result.json())
					.then((response: IPlayer) => {
						console.log(response);
						t2p.push(
							<div>
								{NameBuilder(
									response.nick,
									response.firstName,
									response.lastName
								)}
							</div>
						);
					});
			}

            set_t2p(t2p)
		}

        getPlayersTeam1()
        getPlayersTeam2()


	}, []);

	return (
		<div className='mt-10 flex flex-row items-center justify-content-center'>
			<div
				className={`w-64 text-center flex flex-row items-center justify-content-center ${MatchBackgroundColor(
					team1win
				)}`}
			>
				<div>{_t1p}</div>
				<div className='ml-4'>{team1score?.toString()}</div>
			</div>
			<div className={`${MatchBackgroundColor(team1win)}`}>
				{team1win ? ">" : "<"}
			</div>
			<div
				className={`w-64 text-center flex flex-row items-center justify-content-center ${MatchBackgroundColor(
					!team1win
				)}`}
			>
				<div className='mr-4'>{team2score?.toString()}</div>
				{_t2p}
			</div>
		</div>
	);
};
