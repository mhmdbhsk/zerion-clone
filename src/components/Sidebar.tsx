import { navigationConfig } from '@/configs';
import { IconChevronDown } from '@tabler/icons-react';
import Image from 'next/image';
import { OpenType } from './Layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type SidebarProps = {
  open: OpenType;
  handleOpen: (value: OpenType) => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ handleOpen, open }) => {
  const [walletList, setWalletList] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const walletList = JSON.parse(localStorage.getItem('walletList') || '[]');
      setWalletList(walletList);
    }
  }, [router]);

  return (
    <>
      {open === 'sidebar' && (
        <div
          onClick={() => handleOpen(null)}
          className='fixed inset-0 bg-black bg-opacity-75 transition-opacity z-30 xl:hidden'
        ></div>
      )}

      <aside
        id='sidebar'
        className={`w-[240px] bg-[#1d1d21] h-full z-40 fixed top-0 left-0 ease-in-out duration-300 xl:translate-x-0 ${
          open === 'sidebar' ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label='Sidebar'
      >
        {walletList && walletList.length > 0 ? (
          <div className='m-2 rounded-lg p-2 pl-3 flex gap-2 items-center cursor-pointer hover:bg-[#2d2d32]'>
            <Image
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA7NJREFUeF7tnbFtHEEMRbmR4AbUhTL1ociAL3EDSh25gCtEyRkwYOBqce42HEpFPAEPxD7nNKnPNyRnb3b2ePz38D7iv68vN9G77/r3/aIGcQSAqv8EQBVAJbAKoMo/VYBmgGYAeQ267psBmgFUApsBVPmbAaYZoBlAXoOu+2aAZgCVwGYAVf5mgGaAfgvoxyCzCNUCTPWnFlALsFvAj+szOg/w//ZTXkPndv/lckUCHAGA9NONA0BPgRtAALj6694DQE+BG0AAuPrr3gNAT4EbQAC4+uveA0BPgRtAALj6694DQE+BG0AAuPrr3gNAT4EbQAC4+uveA0BPgRtAALj6694xAPT1cHqun/4B9nkEO356rBwfCQsAdiCDAhwA8omkKgB8scMWkDZxO/4qQBUAMdwMgOSbqQLUAhBCDYHwWDMVEGVvqgD4xQ67hAYAvCiy5wA9B0CLqArA3qxqG9g2EC3AtoFIvobAhkB5F1MLqAWgGlYLQPLVAnALgPqf3nx9Czh9BqEAAQAF3G4eANszCOMPACjgdvMA2J5BGH8AQAG3mwfA9gzC+AMACrjdPAC2ZxDGHwBQwO3mAbA9gzD+AIACbjcPgO0ZhPEHABRwu3kAbM8gjB8D8Pr0B30vAMaPzakANAB6LJ76p/ZHADAJA4Dph62rAEzCKgDTb/2RuAAIgIZAwkAzAFHvE2ybAZiItQCmXzMA1A+bVwGYhFUApl8VAOqHzasATMIqANOvCgD1w+ZVACZhFYDpVwWA+mHzKgCTsArA9NtfAezPx9MVbD+KteOnt6wdAcBKQADAO3psAVn6Z+z4qwDwsuoAuD6jM4H0smZ7BQVAACAGbIBrAbUABHC7ACRfQ+A0A1wQQvQ5Ri2gFoAArAUg+WoBtYB7LQCtIXsbhYKfKkAVoArgfvOGTtFVgJ4EIgbsFoa3gY/ws3FIvZn5/usJ/Rdv3/4ie2q8PX78xZCzCxgAkIDtAm6PvwpwcoADIAAe0IEQqF9DoDzEVgEgwc0AJxcwAAIAKWA/x6gFoPTtf5AVAAHQLoAw0AxA1Ou3gGkG6McguISYeTMA02/9g6wAODsA9Lp4+0AE9Q/zjy+IoPHTE1H4hhD7D6D+AwB+MYQmgBJM/QdAACAGbICp/1oASv80A9ASTAmm/mH+A4AmIADcV8tqAbAE2ABT/wEQAOybQbWAG0LI1q8KgNLXLkC/KJGuIJj/dgE0AXSIof4DoCeBiAEbYOq/GQClvxmgGQDeUkZbGK0AH6653W4HFud0AAAAAElFTkSuQmCC'
              alt="0xf3b2badd991ed22bc2532641de87a8bb199979e4's image"
              width={40}
              height={40}
              className='rounded-lg object-cover block w-10 h-10'
            />
            <div className='flex flex-1 flex-col'>
              <span className='text-white font-semibold text-sm'>
                0xf3b2…79e4
              </span>
              <div>
                <span className='text-white font-semibold text-sm'>$</span>
                <span className='text-white font-semibold text-sm'>0</span>
                <span className='text-gray-500 font-semibold text-sm'>.</span>
                <span className='text-gray-500 font-semibold text-sm'>00</span>
              </div>
            </div>
            <IconChevronDown color='#fff' />
          </div>
        ) : (
          <div className='m-2 rounded-lg p-2 pl-3 flex-col gap-8 items-center text-center py-8 hidden xl:flex'>
            <div className='flex flex-col gap-3'>
              <span className='text-white font-bold text-[20px]'>
                Welcome to Zerion
              </span>
              <span className='text-[#cecfd1] text-sm'>
                Connect an Ethereum wallet to manage your DeFi portfolio
              </span>
            </div>

            <button
              className='text-xs text-white font-semibold bg-blue-500 px-4 py-3 flex items-center justify-center rounded-lg'
              onClick={() => router.push('/connect-wallet')}
            >
              Connect Wallet
            </button>
          </div>
        )}

        <div className='border-b border-[#2d2d32]' />

        <Menu />
      </aside>
    </>
  );
};

export const AccountSidebar: React.FC<SidebarProps> = ({
  handleOpen,
  open,
}) => {
  const router = useRouter();

  return (
    <>
      {open === 'account' && (
        <div
          onClick={() => handleOpen(null)}
          className='fixed inset-0 bg-black bg-opacity-75 transition-opacity z-30 xl:hidden'
        ></div>
      )}

      <aside
        id='sidebar'
        className={`block xl:hidden w-[300px] bg-[#1d1d21] h-full z-40 fixed top-0 right-0 ease-in-out duration-300 xl:translate-x-0 ${
          open === 'account' ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label='Account Sidebar'
      >
        <div className='m-2 rounded-lg p-2 pl-3 flex gap-2 items-center'>
          <div className='m-2 rounded-lg p-2 pl-3 flex flex-col gap-8 items-center text-center py-8'>
            <div className='flex flex-col gap-3'>
              <span className='text-white font-bold text-[20px]'>
                Welcome to Zerion
              </span>
              <span className='text-[#cecfd1] text-sm'>
                Connect an Ethereum wallet to manage your DeFi portfolio
              </span>
            </div>

            <button
              className='text-xs text-white font-semibold bg-blue-500 px-4 py-3 flex items-center justify-center rounded-lg'
              onClick={() => {
                router.push('/connect-wallet');
                handleOpen(null);
              }}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

const Menu = () => {
  const router = useRouter();
  const isActive = (path: string) => {
    if (router.pathname === path) {
      return 'text-[#00a3f5]';
    } else {
      return 'text-[#cecfd1]';
    }
  };

  return (
    <div className='flex flex-col w-full my-2'>
      {navigationConfig.map((item) => (
        <a
          className={`mx-2 rounded-lg flex gap-3 h-12 items-center pl-4 pr-3 cursor-pointer hover:bg-[#2d2d32] ${isActive(
            item.path
          )}`}
          key={item.id}
        >
          <div>
            <item.icon
              size={24}
              stroke={1.5}
              color={router.pathname === item.path ? '#00a3f5' : '#cecfd1'}
            />
          </div>
          <span className='text-sm font-semibold'>{item.title}</span>
        </a>
      ))}
    </div>
  );
};
