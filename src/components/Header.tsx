import {
  IconAlertCircle,
  IconChevronDown,
  IconCreditCard,
  IconEye,
  IconGasStation,
  IconHelpCircle,
  IconInfoCircle,
  IconStar,
  IconStarFilled,
} from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useKey } from 'react-use';

const Header = () => {
  const [focus, setFocus] = useState(false);
  const { register, handleSubmit, watch } = useForm();
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
            className='w-full text-xs font-[500] py-[9px] pr-[32px] pl-[16px] bg-[#29292c] rounded-lg outline-none text-white focus:ring-1 focus:ring-[#2d2d32] focus:bg-[#1d1d21] hover:ring-1 hover:ring-[#2d2d32] hover:bg-[#1d1d21]'
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

export default Header;
