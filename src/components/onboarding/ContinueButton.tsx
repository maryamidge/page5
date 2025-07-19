import React from 'react';
import { Role } from './RoleSelector';

interface ContinueButtonProps {
  selectedRole: Role;
  onContinue: () => void;
}

export const ContinueButton: React.FC<ContinueButtonProps> = ({ selectedRole, onContinue }) => {
  const isDisabled = !selectedRole;

  return (
    <button
      type="button"
      onClick={onContinue}
      disabled={isDisabled}
      className={`flex w-[396px] h-12 justify-center items-center gap-2 shrink-0 shadow-[0px_4px_4px_0px_rgba(230,230,230,0.25)] absolute px-[162px] py-4 rounded-lg left-4 top-[816px] max-sm:w-[calc(100%_-_32px)] max-sm:left-4 transition-colors duration-200 ${
        isDisabled 
          ? 'bg-[#E6E6E6] cursor-not-allowed' 
          : 'bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      }`}
      aria-label={`Continue with selected role: ${selectedRole || 'none selected'}`}
    >
      <span className={`text-center text-base font-bold leading-6 uppercase relative ${
        isDisabled ? 'text-neutral-400' : 'text-white'
      }`}>
        continue
      </span>
    </button>
  );
};
