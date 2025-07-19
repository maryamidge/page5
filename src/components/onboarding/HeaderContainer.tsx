import React from 'react';

export const HeaderContainer: React.FC = () => {
  return (
    <section className="inline-flex items-center gap-[17px] absolute w-[382px] h-[110px] left-6 top-[107px] max-sm:w-[calc(100%_-_48px)] max-sm:left-6">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/a690f756cf7b5e7e3bb895ffbd4a1fe0f6d40e75?width=764"
        alt="Container"
        className="w-full h-full object-cover"
      />
    </section>
  );
};
