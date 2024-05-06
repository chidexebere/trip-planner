import Header from './Header';
import ResponsiveSidebar from './ResponsiveSidebar';
import Sidebar from './Sidebar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-[#F0F2F5] text-[#647995]">
      <Header />
      <main className="p-0 2xl:p-10 min-h-screen flex" id="outer-container">
        <nav className="2xl:hidden">
          <ResponsiveSidebar
            pageWrapId={'page-wrap'}
            outerContainerId={'outer-container'}
          />
        </nav>

        <nav className="max-2xl:hidden w-[300px] h-[800px]">
          <Sidebar />
        </nav>

        <div className="flex-1 min-w-0 overflow-auto 2xl:ml-16" id="page-wrap">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
