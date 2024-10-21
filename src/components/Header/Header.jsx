
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='bg-gray-100 sticky top-0'>
            <nav className='container mx-auto flex justify-between items-center py-4'>
                <h1 className='text-2xl font-bold'>Knowledge Cafe</h1>
                <img src={profile} />
            </nav>
        </header>
    );
};

export default Header;