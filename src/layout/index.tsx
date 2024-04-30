import Header from './Header';
import ResponsiveSidebar from './ResponsiveSidebar';
import Sidebar from './Sidebar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-[#F0F2F5]">
      <Header />
      <main className="p-10 min-h-screen flex" id="outer-container">
        <nav className="2xl:hidden">
          <ResponsiveSidebar
            pageWrapId={'page-wrap'}
            outerContainerId={'outer-container'}
          />
        </nav>

        <nav className="max-2xl:hidden w-[302px] h-[900px] flex-none">
          <Sidebar />
        </nav>

        <div
          className="flex-1 min-w-0 overflow-auto ml-[60px] mr-[20px] md:mr-[40px] lg:mx-[60px]"
          id="page-wrap"
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
