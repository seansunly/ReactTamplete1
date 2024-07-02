import React from 'react'
import NavBar from '../NavBar'
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>
        <NavBar />
        <main className=' max-w-screen-xl mx-auto'>
          <Outlet />
        </main>
      </header>
    </>
  );
}
