import { useState } from "react";
import greyMap from "../assets/images/Page/Leaderboard/grey-map.png";
import HostModal from "../components/page/HostModal";
import JoinModal from "../components/page/JoinModal";

function Multiplayer() {
    const [openHostModal, setOpenHostModal] = useState(false);
    const [openJoinModal, setOpenJoinModal] = useState(false);

    return (
        <>
            <div className="multiplayer w-full h-full font-bubblegum bg-cover bg-blend-overlay bg-gray-900/50 text-[#424242]  uppercase flex flex-col justify-center items-center p-10 py-28" style={{ backgroundImage: `url(${greyMap})` }
            }>
                <div className="leaderboard-table w-full h-80 flex gap-12">
                    <div onClick={() => setOpenHostModal(true)} className="host-game transition-all duration-150 cursor-pointer rounded-lg hover:scale-105 h-full w-full flex items-center justify-center text-[#424242] text-5xl bg-gradient-to-r from-[#84fab0] to-[#8fd3f4]">Host Game</div>

                    <div onClick={() => setOpenJoinModal(true)} className="join-game transition-all duration-150 cursor-pointer rounded-lg hover:scale-105 h-full w-full flex items-center justify-center text-[#424242] text-5xl bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee]">Join Game</div>
                </div>
            </div>
            <HostModal openHostModal={openHostModal} setOpenHostModal={setOpenHostModal} />
            <JoinModal openJoinModal={openJoinModal} setOpenJoinModal={setOpenJoinModal} />
        </>
    );
}

export default Multiplayer;
