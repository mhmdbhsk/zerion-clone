import navigationConfig from '@/configs/navigationConfig';
import { IconChevronDown } from '@tabler/icons-react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className='w-[240px] bg-[#1d1d21]  h-screen absolute flex flex-col '>
      <div className='m-2 rounded-lg p-2 pl-3 flex gap-2 items-center cursor-pointer hover:bg-[#2d2d32]'>
        <Image
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA7NJREFUeF7tnbFtHEEMRbmR4AbUhTL1ociAL3EDSh25gCtEyRkwYOBqce42HEpFPAEPxD7nNKnPNyRnb3b2ePz38D7iv68vN9G77/r3/aIGcQSAqv8EQBVAJbAKoMo/VYBmgGYAeQ267psBmgFUApsBVPmbAaYZoBlAXoOu+2aAZgCVwGYAVf5mgGaAfgvoxyCzCNUCTPWnFlALsFvAj+szOg/w//ZTXkPndv/lckUCHAGA9NONA0BPgRtAALj6694DQE+BG0AAuPrr3gNAT4EbQAC4+uveA0BPgRtAALj6694DQE+BG0AAuPrr3gNAT4EbQAC4+uveA0BPgRtAALj6694xAPT1cHqun/4B9nkEO356rBwfCQsAdiCDAhwA8omkKgB8scMWkDZxO/4qQBUAMdwMgOSbqQLUAhBCDYHwWDMVEGVvqgD4xQ67hAYAvCiy5wA9B0CLqArA3qxqG9g2EC3AtoFIvobAhkB5F1MLqAWgGlYLQPLVAnALgPqf3nx9Czh9BqEAAQAF3G4eANszCOMPACjgdvMA2J5BGH8AQAG3mwfA9gzC+AMACrjdPAC2ZxDGHwBQwO3mAbA9gzD+AIACbjcPgO0ZhPEHABRwu3kAbM8gjB8D8Pr0B30vAMaPzakANAB6LJ76p/ZHADAJA4Dph62rAEzCKgDTb/2RuAAIgIZAwkAzAFHvE2ybAZiItQCmXzMA1A+bVwGYhFUApl8VAOqHzasATMIqANOvCgD1w+ZVACZhFYDpVwWA+mHzKgCTsArA9NtfAezPx9MVbD+KteOnt6wdAcBKQADAO3psAVn6Z+z4qwDwsuoAuD6jM4H0smZ7BQVAACAGbIBrAbUABHC7ACRfQ+A0A1wQQvQ5Ri2gFoAArAUg+WoBtYB7LQCtIXsbhYKfKkAVoArgfvOGTtFVgJ4EIgbsFoa3gY/ws3FIvZn5/usJ/Rdv3/4ie2q8PX78xZCzCxgAkIDtAm6PvwpwcoADIAAe0IEQqF9DoDzEVgEgwc0AJxcwAAIAKWA/x6gFoPTtf5AVAAHQLoAw0AxA1Ou3gGkG6McguISYeTMA02/9g6wAODsA9Lp4+0AE9Q/zjy+IoPHTE1H4hhD7D6D+AwB+MYQmgBJM/QdAACAGbICp/1oASv80A9ASTAmm/mH+A4AmIADcV8tqAbAE2ABT/wEQAOybQbWAG0LI1q8KgNLXLkC/KJGuIJj/dgE0AXSIof4DoCeBiAEbYOq/GQClvxmgGQDeUkZbGK0AH6653W4HFud0AAAAAElFTkSuQmCC'
          alt="0xf3b2badd991ed22bc2532641de87a8bb199979e4's image"
          width={40}
          height={40}
          className='rounded-lg object-cover block w-10 h-10'
        />
        <div className='flex flex-1 flex-col'>
          <span className='text-white font-semibold text-sm'>0xf3b2…79e4</span>
          <div>
            <span className='text-white font-semibold text-sm'>$</span>
            <span className='text-white font-semibold text-sm'>0</span>
            <span className='text-gray-500 font-semibold text-sm'>.</span>
            <span className='text-gray-500 font-semibold text-sm'>00</span>
          </div>
        </div>
        <IconChevronDown color='#fff' />
      </div>
      <Menu />
    </div>
  );
};

const Menu = () => {
  return (
    <div className='flex flex-col w-full my-2'>
      {navigationConfig.map((item) => (
        <a
          className='mx-2 rounded-lg flex gap-3 h-12 items-center pl-4 pr-3 cursor-pointer hover:bg-[#2d2d32]'
          key={item.id}
        >
          <div>
            <item.icon size={24} stroke={1.5} color='#fff' />
          </div>
          <span className='text-white text-sm font-semibold'>{item.title}</span>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
