export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f2e24] via-[#145c45] to-[#0b1f19] text-white mt-20 shadow-[0_-20px_60px_rgba(0,0,0,0.3)]">
      
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#7efdbe]">
            CCN Canteen
          </h2>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            Smart dining experience for students and staff. Fresh food, fast service, and seamless ordering.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a className="hover:text-[#7efdbe]" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-[#7efdbe]" href="#">Terms & Conditions</a></li>
            <li><a className="hover:text-[#7efdbe]" href="#">Support</a></li>
            <li><a className="hover:text-[#7efdbe]" href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-300">Email: support@canteen.com</p>
          <p className="text-sm text-gray-300">Phone: +880 1XXXXXXXXX</p>
          <p className="text-sm text-gray-300">Location: Campus Area</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Alchemist Canteen. All rights reserved.</p>

          <div className="flex gap-6 mt-2 md:mt-0">
            <a className="hover:text-[#7efdbe]" href="#">Privacy</a>
            <a className="hover:text-[#7efdbe]" href="#">Terms</a>
            <a className="hover:text-[#7efdbe]" href="#">Support</a>
          </div>
        </div>
      </div>

    </footer>
  )
}