"use client";

import React from "react";

export default function ContactMap() {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100" data-animate="fade-up">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d534889.0029846829!2d-82.534246!3d27.997892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c22152d3f595%3A0x9ced1906369a04ad!2sCynthia%20I.%20Waisman%20P.A.!5e1!3m2!1sen!2sbd!4v1791894254312!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Cynthia I. Waisman P.A. Law Office Map"
        className="w-full h-full"
      />
    </div>
  );
}

