import me from './images/me.jpeg'; 

const Navbar = () => {
    return (
        <nav className='bg-[#FAFAFA] w-full py-3 px-5 flex justify-between items-center font-SansLight drop-shadow-lg text-3xl z-50'>
            <div className="flex justify-between w-1/2">
                <h1>RAIYAN SAMIN</h1>
                <img src={me} alt="me" className="w-10 h-auto rounded-full"/>
            </div>
            <ul className="flex justify-center gap-6">
                <li><a href='#home'>Home</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>            
        </nav>
    );
}
 
export default Navbar;