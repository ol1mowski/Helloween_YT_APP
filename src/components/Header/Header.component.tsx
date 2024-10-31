import logo from '../../assets/logo.svg';
import bag from '../../assets/shop_bag.svg';

const Header = () => {
  return (
    <header className='flex pt-10'>
        <section className='w-1/2 flex justify-start cursor-pointer'>
            <div className='flex justify-center items-center gap-3'>
                <img src={logo} alt="Logo" />
                <span className='text-2xl font-extralight'>Helloween</span>
            </div>
        </section>
        <section className='w-1/2 flex justify-around'>
            <section className='flex justify-center items-center'>
                <ul className='flex justify-center items-center gap-5'>
                    <li className='font-extralight cursor-pointer'>About Event</li>
                    <li className='font-extralight cursor-pointer'>Gallery</li>
                    <li className='font-extralight cursor-pointer'>Entertainment</li>
                    <li className='font-extralight cursor-pointer'>Tickets</li>
                </ul>
            </section>
            <section className='flex justify-center items-center cursor-pointer'>
                <img src={bag} alt="shopping card" />
            </section>
        </section>
    </header>
  )
}

export default Header