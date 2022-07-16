import { Link } from "react-router-dom";
import close from "../../assets/images/close.png";
import music1 from "../../assets/images/music1.png";
import music2 from "../../assets/images/music2.png";
import sound1 from "../../assets/images/sound1.png";
import sound2 from "../../assets/images/sound2.png";
import statBG from "../../assets/images/stat-bg.png";
import useStore from "../../store";

function GamePauseModal() {
    const state = useStore((state) => state)

    const gameContinue = () => {
        // Reduce Time Problem Fixed. Warning! Don't touch without prior knowledge
        state.setReduceTime(0)
        state.setGamePause(false)
    }

    return (
        <div id="popup-modal" className={`absolute inset-0 ${state.gamePause == true ? "slide-in-top" : state.gamePause == false ? "-top-[100%]" : "hidden"} font-bubblegum overflow-y-auto overflow-x-hidden z-50 h-modal h-full justify-center items-center flex bg-blend-overlay bg-gray-400/80 transition-all duration-500`} aria-modal="true" role="dialog">
            <div className="relative p-4 w-1/2 max-w-md h-full md:h-auto">
                <div className="relative rounded-lg shadow bg-contain bg-no-repeat px-12 pt-4" style={{ backgroundImage: `url(${statBG})` }}>
                    <button type="button" className="absolute bg-transparent top-3 -right-2" onClick={() => {
                        // Reduce Time Problem Fixed. Warning! Don't touch without prior knowledge
                        state.setReduceTime(0)
                        state.setGamePause(false)
                    }}>
                        <img src={close} alt="" />
                    </button>
                    <div className="p-6 text-center mt-8 flex flex-col justify-between">
                        <h1 className="text-gray-100 text-4xl mb-2">Paused</h1>
                        <h1 className="text-gray-100 text-2xl mb-2">Your Score: {state.score}</h1>
                        <h1 className="text-gray-100 text-2xl">Total Time: {state.time[0]}:{state.time[1]}</h1>
                        <div className="control-panel flex justify-center gap-4 my-2">
                            {
                                state.isSound ? (<img onClick={state.toggleSound} src={sound1} width={40} alt="Sound" className="cursor-pointer" />) : (<img onClick={state.toggleSound} src={sound2} width={40} alt="No Sound" className="cursor-pointer" />)
                            }
                            {
                                state.isMusic ? (<img onClick={state.toggleMusic} src={music1} width={40} alt="Music" className="cursor-pointer" />) : (<img onClick={state.toggleMusic} src={music2} width={40} alt="No Music" className="cursor-pointer" />)
                            }
                        </div>
                        <div className="flex gap-4 mt-2">
                            <button type="button" className="text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg px-4 py-2 mb-2 text-xl"><Link to="/">Menu</Link></button>
                            <button type="button" className="text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg px-8 py-2.5 mr-2 mb-2 text-xl" onClick={gameContinue}>Continue</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GamePauseModal;