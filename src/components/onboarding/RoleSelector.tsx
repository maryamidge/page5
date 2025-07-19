import React, { useState } from 'react';

export type Role = 'co-founder' | 'mentor' | 'investor' | null;

interface RoleSelectorProps {
  selectedRole: Role;
  onRoleChange: (role: Role) => void;
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({ selectedRole, onRoleChange }) => {
  const roles = [
    {
      id: 'co-founder' as const,
      label: 'Co-Founder',
      bgColor: '#EFEFEF',
      textColor: '#0A3149',
      isSelected: false,
      width: 'w-[97px]',
      titleWidth: 'w-[85px]',
      arrowLeft: 'left-[36px]',
      arrowFill: '#EFEFEF'
    },
    {
      id: 'mentor' as const,
      label: 'Mentor',
      bgColor: '#FBC959',
      textColor: '#0A3149',
      isSelected: true,
      width: 'w-[68px]',
      titleWidth: 'w-14',
      arrowLeft: 'left-[24px]',
      arrowFill: '#FBC959'
    },
    {
      id: 'investor' as const,
      label: 'Investor',
      bgColor: '#FBC959',
      textColor: '#0A3149',
      isSelected: true,
      width: 'w-[77px]',
      titleWidth: 'w-[65px]',
      arrowLeft: 'left-[26px]',
      arrowFill: '#FBC959'
    }
  ];

  return (
    <form className="flex w-[363px] items-center gap-12 absolute h-[57px] left-[42px] top-[578px] bottom-[container] max-sm:w-[calc(100%_-_84px)] max-sm:gap-5 max-sm:left-[42px]" role="group" aria-labelledby="role-selection-heading">
      <fieldset className="contents">
        <legend className="sr-only" id="role-selection-heading">Select your role</legend>
        {roles.map((role) => (
          <div key={role.id} className={`${role.width} h-[57px] shrink-0 relative max-sm:flex-1 max-sm:min-w-0`}>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="role"
                value={role.id}
                checked={selectedRole === role.id}
                onChange={(e) => onRoleChange(e.target.value as Role)}
                className="sr-only"
                aria-describedby={`${role.id}-description`}
              />
              <div className={`${role.width} h-[52px] shrink-0 absolute left-0 top-0 max-sm:w-full`}>
                <div 
                  className={`${role.width} h-[52px] shrink-0 absolute rounded-lg left-0 top-0 max-sm:w-full transition-colors duration-200 ${
                    selectedRole === role.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  style={{ backgroundColor: role.bgColor }}
                />
                <div
                  className={`${role.titleWidth} h-3.5 shrink-0 text-center text-sm leading-[14px] tracking-[0.28px] absolute left-1.5 top-[19px] max-sm:w-[calc(100%_-_12px)] ${
                    role.isSelected ? 'font-bold' : 'font-[590]'
                  }`}
                  style={{ color: role.textColor }}
                  id={`${role.id}-description`}
                >
                  {role.label}
                </div>
              </div>
              <div className={`absolute top-[37px] ${role.arrowLeft}`}>
                {role.id === 'co-founder' ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 20px; flex-shrink: 0; fill: ${role.arrowFill}"> <path d="M10.8243 13.8019C10.4269 14.3797 9.57375 14.3797 9.17639 13.8019L0.761881 1.56665C0.305582 0.903165 0.780588 0 1.58584 0H18.4148C19.2201 0 19.6951 0.903166 19.2388 1.56666L10.8243 13.8019Z" fill="${role.arrowFill}"></path> </svg>`,
                    }}
                  />
                ) : (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px; flex-shrink: 0; fill: ${role.arrowFill}"> <path d="M8.86603 13.5C8.48113 14.1667 7.51888 14.1667 7.13398 13.5L0.20577 1.5C-0.179131 0.833334 0.301994 0 1.07179 0H14.9282C15.698 0 16.1791 0.833333 15.7942 1.5L8.86603 13.5Z" fill="${role.arrowFill}"></path> </svg>`,
                    }}
                  />
                )}
              </div>
            </label>
          </div>
        ))}
      </fieldset>
    </form>
  );
};
