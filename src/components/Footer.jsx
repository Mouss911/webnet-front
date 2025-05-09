import { Facebook, Instagram, Twitter, Youtube, MapPin } from 'lucide-react';
// import { LuFacebook, LuInstagram, LuTwitter, LuYoutube } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#144A64] text-gray-200 py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Sections de liens */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Shop by Category</h3>
            <ul className="space-y-1 text-sm">
              {Array(7).fill('Lorem Ipsum').map((item, i) => (
                <li key={i}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">About</h3>
            <ul className="space-y-1 text-sm">
              {['Contact Us', 'About Us', 'Careers', 'Press'].map((item) => (
                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Policy</h3>
            <ul className="space-y-1 text-sm">
              {['Return Policy', 'Terms of Use', 'Sitemap', 'Security', 'Privacy', 'EPR Compliance'].map((item) => (
                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Réseaux et info pays */}
        <div className="flex flex-col items-start md:items-end gap-4">
        <div className="flex space-x-3">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a key={index} href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <Icon size={16} />
                </a>
            ))}
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin size={16} />
            <span>United States</span>
          </div>
          <div className="text-xs text-gray-400">
            © 2024 | Webnet Pvt Ltd All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
