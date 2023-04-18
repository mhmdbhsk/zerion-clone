import { walletList } from '@/configs';
import {
  IconAlertCircle,
  IconChevronDown,
  IconCreditCard,
  IconEye,
  IconGasStation,
  IconHelpCircle,
  IconMenu2,
  IconSearch,
  IconStarFilled,
  IconWallet,
} from '@tabler/icons-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useKey } from 'react-use';
import { OpenType } from './Layout';

type MobileHeaderProps = {
  open: OpenType;
  handleOpen: (value: OpenType) => void;
};

export const DesktopHeader = () => {
  const [focus, setFocus] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const searchInput = useRef<HTMLDivElement>(null);

  useKey('f', () => setFocus(true));
  useKey('Escape', () => setFocus(false));

  useEffect(() => {
    if (focus) {
      searchInput.current?.focus();
    }
    if (!focus) {
      searchInput.current?.blur();
    }
  }, [focus]);

  useEffect(() => {
    if (document.activeElement === searchInput.current) {
      setFocus(true);
    }
    if (document.activeElement !== searchInput.current) {
      setFocus(false);
    }
  }, []);

  return (
    <div className='h-16 w-full border-b border-[#2d2d32] flex items-center justify-between'>
      <div className='relative max-w-[415px] w-full flex items-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
          <input
            className='w-full text-xs py-[9px] pr-[32px] pl-[16px] bg-[#29292c] rounded-lg outline-none text-white focus:ring-1 focus:ring-[#2d2d32] focus:bg-[#1d1d21] hover:ring-1 hover:ring-[#2d2d32] hover:bg-[#1d1d21] placeholder:text-[#757575] font-[500]'
            placeholder='Asset, wallet, domain or identity'
            id='search'
            {...register('search')}
            // @ts-ignore
            ref={searchInput}
          />
          {/* <input type='submit' /> */}
          <div className='absolute right-2 top-0 bottom-0 h-5 w-5 flex justify-center items-center my-auto rounded text-[10px] bg-[#45464a] text-[#9da0a6] '>
            {focus ? 'ESC' : 'F'}
          </div>
        </form>
      </div>

      <div className='flex'>
        <button className='outline-none p-[5px] h-8 w-8 hover:bg-[#29292c] flex items-center justify-center rounded-lg'>
          <IconAlertCircle color='#70737b' size={20} />
        </button>
        <button className='outline-none p-[5px] h-8 w-8 flex items-center justify-center rounded-lg'>
          <div className='bg-[#70737b] p-[2px] rounded-full text-white'>
            <IconStarFilled size={14} />
          </div>
        </button>
        <button className='outline-none px-[10px] p-[5px] h-8 hover:bg-[#29292c] gap-1 flex items-center justify-center rounded-lg'>
          <IconGasStation color='#fff' size={20} />
          <span className='text-white text-sm'>20</span>
          <IconChevronDown color='#fff' size={16} />
        </button>
        <button className='outline-none px-[10px] p-[5px] h-8 hover:bg-[#29292c] gap-1 flex items-center justify-center rounded-lg'>
          <span className='text-white text-sm'>USD</span>
          <IconChevronDown color='#fff' size={16} />
        </button>
        <button className='outline-none px-[10px] p-[5px] h-8 hover:bg-[#29292c] gap-1 flex items-center justify-center rounded-lg'>
          <IconHelpCircle color='#fff' size={20} />
          <IconChevronDown color='#fff' size={16} />
        </button>
        <button className='outline-none p-[5px] h-8 w-8 hover:bg-[#29292c] flex items-center justify-center rounded-lg'>
          <IconCreditCard color='#fff' size={20} />
        </button>
        <button className='outline-none p-[5px] h-8 w-8 hover:bg-[#29292c] flex items-center justify-center rounded-lg'>
          <IconEye color='#fff' size={20} />
        </button>
      </div>
    </div>
  );
};

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  handleOpen,
  open,
}) => {
  const [walletList, setWalletList] = useState<any>([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  useEffect(() => {
    const walletList = JSON.parse(localStorage.getItem('walletList') || '[]');
    setWalletList(walletList);
  }, []);

  return (
    <div className='h-14 bg-[#1d1d21] w-full flex xl:hidden justify-between px-4 py-2'>
      {open === 'search' ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full flex gap-4'>
            <input
              className='w-full text-xs py-[9px] pr-[32px] pl-[16px] bg-[#29292c] rounded-lg outline-none text-white focus:ring-1 focus:ring-[#2d2d32] focus:bg-[#1d1d21] hover:ring-1 hover:ring-[#2d2d32] hover:bg-[#1d1d21] placeholder:text-[#757575] font-[500]'
              placeholder='Asset, wallet, domain or identity'
              id='search'
              {...register('search')}
            />
            <button
              onClick={() => handleOpen(null)}
              className='flex py-1 px-3 text-sm border border-[#45464a] rounded-lg text-white items-center h-full'
            >
              Cancel
            </button>
          </form>
        </>
      ) : (
        <>
          <button
            className='outline-none aspect-square h-10 hover:bg-[#29292c] flex items-center justify-center rounded-lg z-10'
            onClick={() => {
              if (open === 'sidebar') {
                handleOpen(null);
              } else {
                handleOpen('sidebar');
              }
            }}
            type='button'
          >
            <IconMenu2 color='#fff' size={20} />
          </button>

          <div className='flex h-10 items-center gap-2'>
            <button
              className='outline-none aspect-square h-10 hover:bg-[#29292c] flex items-center justify-center rounded-lg z-10'
              onClick={() => {
                handleOpen('search');
              }}
            >
              <IconSearch color='white' size={20} />
            </button>

            <button
              className='outline-none aspect-square h-10 hover:bg-[#29292c] flex items-center justify-center rounded-lg z-10'
              onClick={() => {
                if (open === 'account') {
                  handleOpen(null);
                } else {
                  handleOpen('account');
                }
              }}
            >
              {walletList && walletList.length > 0 ? (
                <Image
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA7NJREFUeF7tnbFtHEEMRbmR4AbUhTL1ociAL3EDSh25gCtEyRkwYOBqce42HEpFPAEPxD7nNKnPNyRnb3b2ePz38D7iv68vN9G77/r3/aIGcQSAqv8EQBVAJbAKoMo/VYBmgGYAeQ267psBmgFUApsBVPmbAaYZoBlAXoOu+2aAZgCVwGYAVf5mgGaAfgvoxyCzCNUCTPWnFlALsFvAj+szOg/w//ZTXkPndv/lckUCHAGA9NONA0BPgRtAALj6694DQE+BG0AAuPrr3gNAT4EbQAC4+uveA0BPgRtAALj6694DQE+BG0AAuPrr3gNAT4EbQAC4+uveA0BPgRtAALj6694xAPT1cHqun/4B9nkEO356rBwfCQsAdiCDAhwA8omkKgB8scMWkDZxO/4qQBUAMdwMgOSbqQLUAhBCDYHwWDMVEGVvqgD4xQ67hAYAvCiy5wA9B0CLqArA3qxqG9g2EC3AtoFIvobAhkB5F1MLqAWgGlYLQPLVAnALgPqf3nx9Czh9BqEAAQAF3G4eANszCOMPACjgdvMA2J5BGH8AQAG3mwfA9gzC+AMACrjdPAC2ZxDGHwBQwO3mAbA9gzD+AIACbjcPgO0ZhPEHABRwu3kAbM8gjB8D8Pr0B30vAMaPzakANAB6LJ76p/ZHADAJA4Dph62rAEzCKgDTb/2RuAAIgIZAwkAzAFHvE2ybAZiItQCmXzMA1A+bVwGYhFUApl8VAOqHzasATMIqANOvCgD1w+ZVACZhFYDpVwWA+mHzKgCTsArA9NtfAezPx9MVbD+KteOnt6wdAcBKQADAO3psAVn6Z+z4qwDwsuoAuD6jM4H0smZ7BQVAACAGbIBrAbUABHC7ACRfQ+A0A1wQQvQ5Ri2gFoAArAUg+WoBtYB7LQCtIXsbhYKfKkAVoArgfvOGTtFVgJ4EIgbsFoa3gY/ws3FIvZn5/usJ/Rdv3/4ie2q8PX78xZCzCxgAkIDtAm6PvwpwcoADIAAe0IEQqF9DoDzEVgEgwc0AJxcwAAIAKWA/x6gFoPTtf5AVAAHQLoAw0AxA1Ou3gGkG6McguISYeTMA02/9g6wAODsA9Lp4+0AE9Q/zjy+IoPHTE1H4hhD7D6D+AwB+MYQmgBJM/QdAACAGbICp/1oASv80A9ASTAmm/mH+A4AmIADcV8tqAbAE2ABT/wEQAOybQbWAG0LI1q8KgNLXLkC/KJGuIJj/dgE0AXSIof4DoCeBiAEbYOq/GQClvxmgGQDeUkZbGK0AH6653W4HFud0AAAAAElFTkSuQmCC'
                  alt="0xf3b2badd991ed22bc2532641de87a8bb199979e4's image"
                  width={40}
                  height={40}
                  className='rounded-lg object-cover block w-8 h-8'
                />
              ) : (
                <>
                  <IconWallet color='#fff' />
                </>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
