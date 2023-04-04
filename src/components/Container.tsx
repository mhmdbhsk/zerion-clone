type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='container max-w-[930px] w-full mx-auto'>{children}</div>
  );
};

export default Container;
