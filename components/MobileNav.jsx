'use client';

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

import { Ms_Madi } from 'next/font/google';
const msMadi = Ms_Madi({
  subsets: ['latin'],
  weight: ['400'],
});

import { links } from '@/data/links';

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-secondary' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <div className='mt-32 mb-40 text-center text-2xl'>
          <Link href='/'>
            <h1 className='text-4xl text-secondary'>
              <span className={msMadi.className}>Wakalma</span>
            </h1>
          </Link>
          <nav className='flex flex-col justify-center items-center gap-8 mt-9'>
            {links.map((link, index) => {
              return (
                <Link
                  href={link.href}
                  key={index}
                  className={`${
                    link.href === pathname &&
                    'text-secondary border-b-2 border-secondary'
                  } capitalize font-xl hover:text-secondary transition-all`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
