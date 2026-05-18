const Footer = () => {
    return (
      <footer className="bg-[#244D3F] p-5">
     <div className="max-w-277.5 mx-auto text-center">
           <div>
        <h1 className="text-5xl font-bold text-white mb-5 mt-9">KeenKeeper</h1>
        <p className="text-gray-300 mb-5">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        </div>
        <div>
        <p className="mb-3 text-white text-lg">Social Links</p>
        <div className="flex justify-center gap-2 mb-5">
            <img src="/instagram.png" alt="" />
            <img src="/facebook.png" alt="" />
            <img src="/twitter.png" alt="" />
        </div>
        </div>
     </div>

     <hr className="text-gray-400 max-w-277.5 mx-auto mb-3"/>
     <div className="flex justify-between max-w-277.5 mx-auto text-gray-300">
        <div>
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        </div>
        <div className="flex gap-3">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies</p>
        </div>
     </div>
      </footer>
    );
};

export default Footer;