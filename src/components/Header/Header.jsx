
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='bg-violet-300 border-b border-violet-700 sticky top-0'>
            <nav className='container mx-auto flex justify-between items-center py-2 md:py-4 w-11/12'>
                <h1 className='text-2xl font-bold'>Knowledge Cafe</h1>
                <img src={profile} />
            </nav>
        </header>
    );
};

export default Header;