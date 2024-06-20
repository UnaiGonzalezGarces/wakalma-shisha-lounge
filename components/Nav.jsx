'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { links } from '@/data/links';

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className='flex gap-8'>
      {links.map((link, index) => {
        return (
          <Link
            href={link.href}
            key={index}
            className={`${
              link.href === pathname &&
              'text-secondary border-b-2 border-secondary'
            } capitalize font-medium hover:text-secondary transition-all`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
