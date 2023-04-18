import { DesktopHeader, MobileHeader } from './Header';

// Types
import type { OpenType } from './Layout';

type ContainerProps = {
  children: React.ReactNode;
  open: OpenType;
  handleOpen: (value: OpenType) => void;
};

export const Container = ({ children, open, handleOpen }: ContainerProps) => {
  return (
    <div>
      <MobileHeader open={open} handleOpen={handleOpen} />

      <div className='container  max-w-[1200px] w-full mx-auto xl:pl-[240px]'>
        <div className='hidden xl:flex'>
          <DesktopHeader />
        </div>
        {children}
      </div>
    </div>
  );
};
