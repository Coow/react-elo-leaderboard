import { useEffect, useState } from "react"
import { Match } from "../Components/Match"

export const MatchHistory = () => {

    const [matchHistoryJSON, set_matchHistoryJSON] = useState([])
    const [matchHistoryElements, set_matchHistoryElements] = useState([] as JSX.Element[])

    useEffect(() => {
        fetch(`http://localhost:3001/match?sort=desc`)
            .then(result => result.json())
            .then(response => {
                set_matchHistoryJSON(response)
            })
    }, [])

    useEffect(() => {
        let _mhe: JSX.Element[] = []
        for (let i = 0; i < matchHistoryJSON.length; i++) {
            const element = matchHistoryJSON[i] as MatchType;
            console.log(element)
            _mhe.push(
                <Match team1={element.team1} team2={element.team2} team1score={element.team1score} team2score={element.team2score} team1win={element.team1win}/>
            )
        }

        set_matchHistoryElements(_mhe)
    }, [matchHistoryJSON])

    return <div>
        {matchHistoryElements}
    </div>
}