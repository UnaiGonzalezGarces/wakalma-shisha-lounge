import Link from 'next/link';
import { Ms_Madi } from 'next/font/google';

// Components
import Nav from './Nav';
import MobileNav from './MobileNav';
import { Button } from '@/components/ui/button';

const msMadi = Ms_Madi({
  subsets: ['latin'],
  weight: ['400'],
});

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white bg-[rgba(255,255,255,0.002)]'>
      <div className='container mx-auto flex justify-between'>
        <Link href='/'>
          <h1 className='text-4xl text-secondary'>
            <span className={msMadi.className}>Wakalma</span>
          </h1>
        </Link>
        {/* Desktop Nav */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Button asChild>
            <Link href='login'>Login</Link>
          </Button>
        </div>
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
