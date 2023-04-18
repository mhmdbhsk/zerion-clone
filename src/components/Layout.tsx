import { useState } from 'react';
import { Container } from './Container';
import { Sidebar, AccountSidebar } from './Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

export type OpenType = null | 'sidebar' | 'account' | 'search';

export const Layout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useState<OpenType>(null);

  const handleOpen = (value: OpenType) => setOpen(value);

  return (
    <>
      <AccountSidebar open={open} handleOpen={handleOpen} />
      <Sidebar open={open} handleOpen={handleOpen} />

      <Container open={open} handleOpen={handleOpen}>
        {children}
      </Container>
    </>
  );
};
