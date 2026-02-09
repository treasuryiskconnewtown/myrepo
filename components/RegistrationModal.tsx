
import React from 'react';
import { RegistrationType, REGISTRATION_LINKS } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSelection = (type: RegistrationType) => {
    window.location.href = REGISTRATION_LINKS[type];
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-saffron p-6 text-white text-center">
          <h2 className="text-2xl font-bold">Register Now</h2>
          <p className="mt-2 opacity-90">Please choose your registration type</p>
        </div>
        
        <div className="p-8 space-y-4">
          <button
            onClick={() => handleSelection(RegistrationType.TEMPLE)}
            className="w-full flex items-center justify-between p-5 border-2 border-slate-100 rounded-xl hover:border-saffron hover:bg-orange-50 transition-all group"
          >
            <div className="text-left">
              <span className="block text-lg font-bold text-slate-800">Temple Registration</span>
              <span className="text-sm text-slate-500">Group registration for ISKCON centers</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-saffron group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </button>

          <button
            onClick={() => handleSelection(RegistrationType.SINGLE)}
            className="w-full flex items-center justify-between p-5 border-2 border-slate-100 rounded-xl hover:border-saffron hover:bg-orange-50 transition-all group"
          >
            <div className="text-left">
              <span className="block text-lg font-bold text-slate-800">Single Brahmachari</span>
              <span className="text-sm text-slate-500">Individual registration</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-saffron group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </button>
        </div>

        <div className="px-8 pb-8">
          <button 
            onClick={onClose}
            className="w-full py-3 text-slate-500 font-medium hover:text-slate-800 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
