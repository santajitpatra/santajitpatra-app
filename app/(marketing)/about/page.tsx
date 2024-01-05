import AboutInfo from '@/components/AboutInfo';
import DownloadCV from '@/components/DownloadCV';
import Header from '@/components/Header';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react'

const page = () => {
  return (
    <>
      <Header
        title="About"
        bg='url("https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")'
      />
      <MaxWidthWrapper>
        <AboutInfo />
        <DownloadCV />
      </MaxWidthWrapper>

      {/* <Whatsapp /> */}
    </>
  );
}

export default page