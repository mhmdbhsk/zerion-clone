import Container from './Container';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen h-full flex'>
      <div className='w-[240px] min-h-screen h-full'>
        <Sidebar />
      </div>
      <div className='w-[calc(100vw-240px)] h-screen'>
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default Layout;
