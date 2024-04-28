import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <p className="mb-6">Long content</p>
      </main>
    </div>
  );
};

export default Layout;
