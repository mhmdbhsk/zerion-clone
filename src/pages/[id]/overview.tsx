import { tabConfig } from '@/configs';
import {
  IconArrowsDiagonalMinimize2,
  IconChevronDown,
  IconDots,
  IconShare3,
} from '@tabler/icons-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Overview() {
  const [tab, setTab] = useState(tabConfig[0].value);

  return (
    <>
      <div className='flex justify-between items-center mt-6 mb-8 m-4 xl:mb-0 flex-col md:flex-row gap-5'>
        <div className='rounded-lg flex gap-5 items-center w-full'>
          <Image
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA7NJREFUeF7tnbFtHEEMRbmR4AbUhTL1ociAL3EDSh25gCtEyRkwYOBqce42HEpFPAEPxD7nNKnPNyRnb3b2ePz38D7iv68vN9G77/r3/aIGcQSAqv8EQBVAJbAKoMo/VYBmgGYAeQ267psBmgFUApsBVPmbAaYZoBlAXoOu+2aAZgCVwGYAVf5mgGaAfgvoxyCzCNUCTPWnFlALsFvAj+szOg/w//ZTXkPndv/lckUCHAGA9NONA0BPgRtAALj6694DQE+BG0AAuPrr3gNAT4EbQAC4+uveA0BPgRtAALj6694DQE+BG0AAuPrr3gNAT4EbQAC4+uveA0BPgRtAALj6694xAPT1cHqun/4B9nkEO356rBwfCQsAdiCDAhwA8omkKgB8scMWkDZxO/4qQBUAMdwMgOSbqQLUAhBCDYHwWDMVEGVvqgD4xQ67hAYAvCiy5wA9B0CLqArA3qxqG9g2EC3AtoFIvobAhkB5F1MLqAWgGlYLQPLVAnALgPqf3nx9Czh9BqEAAQAF3G4eANszCOMPACjgdvMA2J5BGH8AQAG3mwfA9gzC+AMACrjdPAC2ZxDGHwBQwO3mAbA9gzD+AIACbjcPgO0ZhPEHABRwu3kAbM8gjB8D8Pr0B30vAMaPzakANAB6LJ76p/ZHADAJA4Dph62rAEzCKgDTb/2RuAAIgIZAwkAzAFHvE2ybAZiItQCmXzMA1A+bVwGYhFUApl8VAOqHzasATMIqANOvCgD1w+ZVACZhFYDpVwWA+mHzKgCTsArA9NtfAezPx9MVbD+KteOnt6wdAcBKQADAO3psAVn6Z+z4qwDwsuoAuD6jM4H0smZ7BQVAACAGbIBrAbUABHC7ACRfQ+A0A1wQQvQ5Ri2gFoAArAUg+WoBtYB7LQCtIXsbhYKfKkAVoArgfvOGTtFVgJ4EIgbsFoa3gY/ws3FIvZn5/usJ/Rdv3/4ie2q8PX78xZCzCxgAkIDtAm6PvwpwcoADIAAe0IEQqF9DoDzEVgEgwc0AJxcwAAIAKWA/x6gFoPTtf5AVAAHQLoAw0AxA1Ou3gGkG6McguISYeTMA02/9g6wAODsA9Lp4+0AE9Q/zjy+IoPHTE1H4hhD7D6D+AwB+MYQmgBJM/QdAACAGbICp/1oASv80A9ASTAmm/mH+A4AmIADcV8tqAbAE2ABT/wEQAOybQbWAG0LI1q8KgNLXLkC/KJGuIJj/dgE0AXSIof4DoCeBiAEbYOq/GQClvxmgGQDeUkZbGK0AH6653W4HFud0AAAAAElFTkSuQmCC'
            alt="0xf3b2badd991ed22bc2532641de87a8bb199979e4's image"
            width={104}
            height={104}
            className='rounded-2xl object-cover block w-[104px] h-[104px]'
          />
          <div className='flex flex-col'>
            <div className='flex gap-2 items-center'>
              <span className='text-white font-semibold text-xl'>
                0xf3b2…79e4
              </span>
              <button className='outline-none p-[5px] h-6 w-h-6 hover:bg-[#29292c] flex items-center justify-center rounded-lg'>
                <IconChevronDown color='#fff' size={14} />
              </button>
            </div>
            <div className='flex items-center gap-2'>
              <div className='text-3xl'>
                <span className='text-white font-semibold text-[28px] xl:text-[40px]'>
                  $
                </span>
                <span className='text-white font-semibold text-[28px] xl:text-[40px]'>
                  0
                </span>
                <span className='text-gray-500 font-semibold text-[28px] xl:text-[40px]'>
                  .
                </span>
                <span className='text-gray-500 font-semibold text-[28px] xl:text-[40px]'>
                  00
                </span>
              </div>
              <button className='outline-none p-[5px] h-6 w-h-6 hover:bg-[#29292c] flex items-center justify-center rounded-lg'>
                <IconDots color='#fff' size={14} />
              </button>
            </div>
            <span className='text-[#4fbf67]'>+0% ($0.00)</span>
          </div>
        </div>

        <div className='flex gap-4 w-full md:w-64'>
          <button className='ring-1 ring-[#45464a] p-[7px] h-8 w-8 hover:bg-[#29292c] flex items-center justify-center rounded-full'>
            <IconShare3 color='#fff' />
          </button>

          <button className='text-sm ring-1 ring-[#45464a] text-white py-[9px] px-[19px] h-8 hover:bg-[#29292c] flex items-center justify-center rounded-lg w-full'>
            Remove Wallet
          </button>
        </div>
      </div>

      <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 m-4 xl:mb-0 sticky top-0 bg-[#16161a]'>
        <ul className='flex flex-wrap -mb-px'>
          {/* {pendingTransaction.map((item) => (
            <li key={item.value} onClick={() => setTab(item.value)}>
              <a
                href='#'
                className={`inline-block pb-2 px-2 pt-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  item.value === tab && 'text-blue-500 !border-blue-500 active'
                }}`}
              >
                {item.name}
              </a>
            </li>
          ))} */}

          {tabConfig.map((item) => (
            <li key={item.value} onClick={() => setTab(item.value)}>
              <a
                href='#'
                className={`inline-block pb-2 px-2 pt-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  item.value === tab && 'text-blue-500 !border-blue-500 active'
                }}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className='mt-6 m-4 xl:mb-0'>
        <div className='flex flex-col'>
          <div className='grid grid-flow-row xl:grid-flow-col gap-[30px] grid-cols-[minmax(1fr,_300px)]'>
            <div className='flex flex-col gap-3 grid-cols-[minmax(0px,_auto)]'>
              <span className='text-[24px] font-semibold text-white'>
                Performance
              </span>
              <div className='flex flex-col border rounded-lg pt-[12px] px-4 pb-[10px] border-[#2d2d32] justify-center items-center text-center  h-[342px]'>
                <div className='flex flex-col gap-2'>
                  <span className='text-2xl text-white'>
                    Your wallet is empty
                  </span>
                  <span className='text-[#cecfd1]'>
                    Deposit funds to start using Zerion
                  </span>
                </div>

                <button className='mt-8 w-[248px] text-white font-semibold bg-blue-500 h-[44px] p-4 flex items-center justify-center rounded-lg'>
                  Add Funds
                </button>
              </div>
            </div>
            <div className='flex-col gap-3 grid-cols-[minmax(0px,_auto)] hidden xl:flex'>
              <span className='text-[24px] font-semibold text-white'>
                History
              </span>
              <div className='flex flex-col border rounded-lg pt-[12px] px-4 pb-[10px] border-[#2d2d32] justify-center items-center text-center h-[342px]'>
                <div className='flex flex-col gap-2'>
                  <div className='text-5xl'>🥺</div>
                  <span className='text-sm text-white'>
                    No transactions yet
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-3 grid-cols-[minmax(0px,_auto)] mt-[30px]'>
          <div className='flex justify-between items-center'>
            <span className='text-[24px] font-semibold text-white'>Assets</span>
            <div className='flex gap-4 w-max'>
              <button className='outline-none p-[5px] w-8 h-8 !aspect-square border border-[#2d2d32] hover:bg-[#29292c] flex items-center justify-center rounded-lg'>
                <IconArrowsDiagonalMinimize2 color='white' size={16} />
              </button>

              <div className='w-full rounded-lg border border-[#2d2d32] bg-[#2d2d32] flex items-center h-8 z-10'>
                <ul
                  className='flex list-none rounded-lg p-[3px]'
                  data-tabs='tabs'
                  role='list'
                >
                  <li className='z-30 text-center bg-[#16161a] rounded-md px-3'>
                    <a
                      className='text-white text-xs z-30 mb-0 flex w-max cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out'
                      data-tab-target=''
                      role='tab'
                      aria-selected='true'
                    >
                      <span className='ml-1'>By platform</span>
                    </a>
                  </li>
                  <li className='z-30 text-center rounded-md px-3'>
                    <a
                      className='text-white text-xs z-30 mb-0 flex w-max cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out'
                      data-tab-target=''
                      role='tab'
                      aria-selected='false'
                    >
                      <span className='ml-1'>By position</span>
                    </a>
                  </li>
                </ul>
              </div>

              <button className='outline-none p-[5px] w-8 h-8 !aspect-square border border-[#2d2d32] hover:bg-[#29292c] flex items-center justify-center rounded-lg'>
                <IconDots color='white' size={16} />
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-2 mb-20'>
            <div className='flex flex-col border rounded-lg pt-[12px] px-4 pb-[10px] border-[#2d2d32] justify-center items-center text-center w-full h-[124px] gap-2'>
              <div className='text-5xl'>🥺</div>
              <span className='text-sm text-white'>No assets yet</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
