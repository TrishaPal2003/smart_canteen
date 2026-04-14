export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#d9ffee]/80 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,54,41,0.06)] flex justify-between items-center px-8 h-16">
      
      {/* Logo */}
      <div className="text-xl font-black bg-gradient-to-br from-[#006944] to-[#7efdbe] bg-clip-text text-transparent font-headline">
        CCN Canteen
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-8 items-center">
        <a className="text-[#006944] border-b-2 border-[#006944] pb-1 font-bold" href=" / ">Home</a>
        <a className="text-[#306554] font-bold hover:text-[#006944]" href="/menu">Menu</a>
        <a className="text-[#306554] font-bold hover:text-[#006944]" href="/order">Order</a>
        <a className="text-[#306554] font-bold hover:text-[#006944]" href="/staff">Staff</a>
        <a className="text-[#306554] font-bold hover:text-[#006944]" href="/dashboard">Dashboard</a>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-[#006944]">
          notifications
        </span>

        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu3yjt0NBQPKBA1BF5Cq8RbUtB1nnTZOBvSpXAATafHEUH5HX8XWbOJMkeJOm6_H5JRQr33KvfJ43eiKa8eq6Ybd9kA5pX_8RgsIWD09dz9atJzkDxokdka1YWIyY05hG58yDSpk2yHxII0ZuaeqKSTjVnRTr4cCo4hTTEoJL_hJTILvO_VvZlTucsP_cwdWADvRR1Pa1mCO3HX7xwHbcQcYuel59f-50qbyeUYBOurZMYFwz7VwNen8mNTB6KaaUXiBpyC0DEbvEJ" />
        </div>
      </div>
    </nav>
  );
}