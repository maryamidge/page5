import React, { useState } from 'react';
import { StatusBar } from '@/components/onboarding/StatusBar';
import { HeaderContainer } from '@/components/onboarding/HeaderContainer';
import { IllustrationArea } from '@/components/onboarding/IllustrationArea';
import { RoleSelector, Role } from '@/components/onboarding/RoleSelector';
import { ContinueButton } from '@/components/onboarding/ContinueButton';
import { HomeBar } from '@/components/onboarding/HomeBar';

const Index = () => {
  const [selectedRole, setSelectedRole] = useState<Role>('mentor');

  const handleRoleChange = (role: Role) => {
    setSelectedRole(role);
  };

  const handleContinue = () => {
    if (selectedRole) {
      console.log('Continuing with role:', selectedRole);
      // Here you would typically navigate to the next step or submit the form
      alert(`Continuing as ${selectedRole}`);
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=SF+Pro:wght@400;590;700&display=swap"
        rel="stylesheet"
      />
      <main className="w-[428px] h-[932px] relative bg-white mx-auto my-0 max-md:w-full max-md:max-w-[428px] max-sm:w-full max-sm:max-w-[428px] max-sm:h-auto max-sm:min-h-[932px]">
        <StatusBar />
        <HeaderContainer />
        <IllustrationArea />
        <RoleSelector 
          selectedRole={selectedRole} 
          onRoleChange={handleRoleChange} 
        />
        <ContinueButton 
          selectedRole={selectedRole} 
          onContinue={handleContinue} 
        />
        <HomeBar />
      </main>
    </>
  );
};

export default Index;
