import "./InsultGenerator.css"
import { useState, useRef, useEffect } from 'react';
import { config } from '../config';

const InsultGenerator = () => {
    const [insults, setInsults] = useState([]);
    const insultsRef = useRef(insults);
    insultsRef.current = insults;

    const [interval, setinterval] = useState(null);
    const intervalRef = useRef(interval);
    intervalRef.current = interval;

    const useSpeech = 'speechSynthesis' in window;

    const loopInsults = () => {
        if (intervalRef.current == null) {
            addInsult()
            setinterval(setInterval(() => {
                addInsult();
            }, 3000))
        }
    }
    
    const addInsult = () => {
        fetch(`https://${config.ServAddress}:3500/insult`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                if (useSpeech) {
                    var msg = new SpeechSynthesisUtterance();
                    msg.text = data.insult.toLowerCase();
                    window.speechSynthesis.speak(msg);
                }

                let newInsults = [data.insult, ...insultsRef.current];
                if (newInsults.length > 10) {
                    newInsults = newInsults.slice(0, 10);
                }
                setInsults(newInsults);
            })
            .catch((err) => {
                console.log("Got error: ", err)
            })
    }

    const clearInsults = () => {
        clearInterval(interval);
        setinterval(null)
        setInsults([]);
    }

    return (
        <div className="insultList">
            <div>
                <button onClick={loopInsults}>Start Motivation</button>
                <button onClick={clearInsults}>Stop Motivation</button>
            </div>

            {insults.map(
                (insult, idx) => {
                    let opa = (10 - idx) / 10
                    return (<div className="insult" style={{opacity: opa}} key={idx}>
                                {insult}
                            </div>)
                }
            )}  
        </div>
    )
}
export default InsultGenerator