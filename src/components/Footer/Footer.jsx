import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="container mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* CS Ticket System */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">CS — Ticket System</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              CS — Ticket System helps businesses manage customer support
              efficiently. Our platform allows teams to track, prioritize, and
              resolve customer issues through a centralized ticketing system,
              ensuring faster responses and better customer satisfaction.
            </p>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Download Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Information</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Social Links</h4>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FontAwesomeIcon icon={faXTwitter} />
                @CS — Ticket System
              </li>

              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FontAwesomeIcon icon={faLinkedin} />
                @CS — Ticket System
              </li>

              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FontAwesomeIcon icon={faFacebook} />
                @CS — Ticket System
              </li>

              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FontAwesomeIcon icon={faEnvelope} />
                support@cs.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
