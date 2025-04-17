import React from "react";
import { BookOpen, Star, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center px-4 py-6 mt-10">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <div className="flex items-center gap-2">
          <BookOpen size={20} />
          <span>Read. Relax. Repeat.</span>
        </div>
        <div className="flex items-center gap-2">
          <Star size={20} />
          <span>Curated for book lovers</span>
        </div>
        <div className="flex items-center gap-2">
          <Heart size={20} />
          <span>Made with ❤️ by PagePop</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
