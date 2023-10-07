import { FaGithub, FaGoogle } from 'react-icons/fa';

const RigthSideNav = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold my-5'>Login With</h2>
            <button className='btn btn-outline w-full text-[15px] font-bold my-2'>
                <FaGoogle className='text-xl'></FaGoogle>Google Login
            </button>
            <button className='btn btn-outline w-full text-[15px] font-bold'>
                <FaGithub className='text-xl'></FaGithub>Github Login
            </button>
        </div>
    );
};

export default RigthSideNav;