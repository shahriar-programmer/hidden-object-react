import { signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from "react-hot-toast";
import { BiBarChartAlt2, BiHomeAlt, BiInfoCircle, BiLogIn, BiLogOut, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebaseConfig";
import Loading from "./Loading";

function Navbar() {
    const [user, loading, error] = useAuthState(auth);

    const logOut = () => {
        signOut(auth)
        toast("Signed Out.")
    }

    return (
        loading ? (<Loading />) : (
            <div className="navbar w-full h-16 flex justify-between items-center bg-[#a60cff] text-white px-2 py-4">
                <div className="left-nav flex justify-between items-center">
                    {/* <div className="nav-item flex items-center justify-between gap-2">
                    <img src={exitImg} alt="Exit Image" className='w-6' />
                    <p className='font-bold text-3xl'>Exit</p>
                </div> */}
                </div>
                <div className="right-nav flex justify-between items-center gap-8 font-bold text-2xl">
                    <Link to="/">
                        <div className="nav-item flex items-center justify-between gap-1">
                            <BiHomeAlt />
                            <p className=''>Home</p>
                        </div>
                    </Link>
                    <div className="nav-item flex items-center justify-between gap-1">
                        <BiInfoCircle />
                        <p className=''>About Us</p>
                    </div>
                    <div className="nav-item flex items-center justify-between gap-1">
                        <BiBarChartAlt2 />
                        <p className=''>Leaderboard</p>
                    </div>
                    {
                        user ? (
                            <>
                                <Link to="/profile">
                                    <div className="nav-item flex items-center justify-between gap-1">
                                        <BiUser />
                                        <p className=''>Profile</p>
                                    </div>
                                </Link>
                                <div onClick={logOut} className="nav-item flex items-center justify-between gap-1 cursor-pointer">
                                    <BiLogOut />
                                    <p className=''>Logout</p>
                                </div>
                            </>
                        ) : (
                            <Link to="/login">
                                <div className="nav-item flex items-center justify-between gap-1 cursor-pointer">
                                    <BiLogIn />
                                    <p className=''>Login</p>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>)
    );
}

export default Navbar;