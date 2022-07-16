import { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import statBG from "../../assets/images/stat-bg.png";
import useStore from "../../store";

const GameTimer = () => {
    var time = new Date();
    // const [duration, setDuration] = useState(time.setSeconds(time.getSeconds() + 180))
    const state = useStore((state) => state)

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp: time.setSeconds(time.getSeconds() + 180), autoStart: true, onExpire: () => state.setGameOver(true) });

    const reduceTimeFunc = () => {
        // Reduce Time Problem Fixed. Warning! Don't touch without prior knowledge
        restart(time.setSeconds(time.getSeconds() - (((2 - minutes) * 60) + (60 - seconds) + 10)))
    }

    useEffect(() => {
        if (state.gamePause == true || state.gameOver == true) {
            // Remain Time = Total Time - Passed Time
            state.setTime([2 - minutes, 60 - seconds])
            pause()
        } else if (state.gamePause == false || state.gameOver == false) {
            resume()
        }
        // Reduce Time Problem Fixed. Warning! Don't touch without prior knowledge
        state.reduceTime != 0 ? reduceTimeFunc() : null
    }, [state.gamePause, state.gameOver, state.reduceTime]);

    return (
        <>
            <div className="control-btn bg-contain bg-no-repeat w-24 h-24 pt-4 flex flex-col items-center text-center text-white font-bubblegum text-xl" style={{ backgroundImage: `url(${statBG})` }}>
                <p>Time:</p>
                <p>{minutes}:{seconds}</p>
                {/* {state.reduceTime ? restart(time.setSeconds(time.getSeconds() - (((2 - minutes) * 60) + (60 - seconds) + 10))) : null} */}
            </div>
        </>
    );
};

export default GameTimer