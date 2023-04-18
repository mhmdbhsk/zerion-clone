import { walletList } from '@/configs';
import { showToast } from '@/utils/toast';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ConnectWallet() {
  const [dropdown, setDropdown] = useState(false);
  const [walletValue, setWalletValue] = useState('');
  const router = useRouter();

  const handleAddToWallet = () => {
    setDropdown(!dropdown);

    const watchlist = JSON.parse(localStorage.getItem('walletList') || '[]');
    const isAlreadyInWatchlist = watchlist.find(
      (item: any) => item === walletValue
    );

    if (isAlreadyInWatchlist) {
      showToast('Wallet already in your wallet list');
    } else {
      localStorage.setItem(
        'walletList',
        JSON.stringify([...watchlist, walletValue])
      );

      router.push(`/${walletValue}/overview`);
    }
  };

  const handleAddToWatchlist = () => {
    setDropdown(!dropdown);

    const watchlist = JSON.parse(localStorage.getItem('walletList') || '[]');
    const isAlreadyInWatchlist = watchlist.find(
      (item: any) => item === walletValue
    );

    if (isAlreadyInWatchlist) {
      showToast('Wallet already in your watchlist');
    } else {
      localStorage.setItem(
        'walletList',
        JSON.stringify([...watchlist, walletValue])
      );
    }
  };

  return (
    <div className='max-w-[450px] flex flex-col mx-auto gap-8'>
      <div className='flex justify-between items-center mt-6'>
        <span className='text-[40px] font-semibold text-white'>
          Connect to Zerion
        </span>
      </div>

      <div className='justify-between items-center grid grid-cols-4'>
        {walletList.map((wallet) => (
          <div
            key={wallet.id}
            className='flex flex-col justify-center items-center gap-2 cursor-pointer h-[104px] w-[104px] hover:bg-[#29292c] rounded-xl'
          >
            {typeof wallet.icon === 'string' ? (
              <Image
                width={48}
                height={48}
                src={wallet.icon}
                alt={wallet.name}
                className='w-[48px] h-[48px]'
              />
            ) : (
              wallet.icon
            )}
            <span className='text-xs text-white text-center'>
              {wallet.name}
            </span>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-2 mb-20'>
        <span className='text-xs font-semibold text-white'>
          Track any wallet
        </span>

        <div className='flex gap-4'>
          <input
            className='w-full text-xs py-[9px] pr-[32px] pl-[16px] bg-[#29292c] rounded-lg outline-none text-white focus:ring-1 focus:ring-[#2d2d32] focus:bg-[#1d1d21] hover:ring-1 hover:ring-[#2d2d32] hover:bg-[#1d1d21] placeholder:text-[#757575] font-[500]'
            placeholder='Enter address, domain, or identity'
            id='wallet-address'
            onChange={(event) => setWalletValue(event.target.value)}
          />

          <div className='relative inline-block text-left'>
            <button
              onClick={() => setDropdown(!dropdown)}
              className='flex py-1 px-3 text-sm border border-[#45464a] rounded-lg text-white items-center h-full'
            >
              Add
            </button>

            {dropdown && (
              <div
                className='absolute right-0 z-10 mt-2 w-max origin-top-right rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-[#1d1d21] p-1'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='menu-button'
              >
                <div className='py-1' role='none'>
                  <button
                    type='submit'
                    className='text-white cursor-pointer block px-4 py-2 text-xs hover:bg-[#29292c] rounded-lg'
                    id='handle-add-wallet'
                    onClick={handleAddToWallet}
                  >
                    To My Wallet
                  </button>
                  <button
                    type='submit'
                    className='text-white cursor-pointer block px-4 py-2 text-xs hover:bg-[#29292c] rounded-lg'
                    id='handle-add-watchlist'
                    onClick={handleAddToWatchlist}
                  >
                    To Watchlist
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
