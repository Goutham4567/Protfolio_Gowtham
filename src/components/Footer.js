import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openGmailCompose = () => {
    const subject = 'Portfolio Inquiry - Gurram Goutham';
    const body = `Dear Goutham,

I hope this email finds you well. I came across your portfolio and I'm interested in discussing potential opportunities.

[Please include details about your inquiry, project requirements, or collaboration proposal]

Best regards,
[Your Name]
[Your Company/Organization]
[Your Contact Number]`;
    
    // Create the Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=gouthamgurram28@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&tf=1`;
    
    // Try to open Gmail compose
    const newWindow = window.open(gmailUrl, '_blank', 'width=800,height=600');
    
    // Fallback: if Gmail doesn't open, try mailto
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      const mailtoLink = `mailto:gouthamgurram28@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }
  };

  const openPhoneCall = () => {
    window.open('tel:+919052061004', '_self');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/goutham-gurram-4bbab5381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com/share/19vsMWGthk/', '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/__its_mr_goutham__', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/Goutham4567', '_blank');
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Gurram Goutham</h3>
            <p className="text-slate-300 leading-relaxed">
              A motivated Electronic Communication Engineering student passionate about embedded systems, 
              IoT, and innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={openGmailCompose}
                className="text-slate-300 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
              <button
                onClick={openPhoneCall}
                className="text-slate-300 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800"
                aria-label="Phone"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </button>
              <button
                onClick={openLinkedIn}
                className="text-slate-300 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button
                onClick={openGitHub}
                className="text-slate-300 hover:text-gray-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>
              <button
                onClick={openFacebook}
                className="text-slate-300 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button
                onClick={openInstagram}
                className="text-slate-300 hover:text-pink-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-7.83 9.781c-2.026 0-3.708-1.682-3.708-3.708s1.682-3.708 3.708-3.708 3.708 1.682 3.708 3.708-1.682 3.708-3.708 3.708z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#skills')}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#education')}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#projects')}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Pokuru, V.V.Pallem Mandal, SPSR Nellore, Andhra Pradesh</span>
              </div>
              <button
                onClick={openGmailCompose}
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300"
              >
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>gouthamgurram28@gmail.com</span>
              </button>
              <button
                onClick={openPhoneCall}
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300"
              >
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+91 9052061004</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-300 text-sm">
              <p>&copy; {currentYear} Gurram Goutham. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#privacy"
                className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
