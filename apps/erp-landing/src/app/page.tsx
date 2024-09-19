'use client';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Computer, LibraryBig, NotepadText, Signature } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="my-10 font-bold text-lg">UIP ERP System</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5 max-w-[1020px]">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={'https://issuesheetapp-production.up.railway.app/'}
        >
          <Card className="p-5 w-[200px] h-[200px] flex justify-center cursor-pointer  hover:bg-slate-50">
            <div className="flex flex-col gap-2 items-center ">
              <NotepadText className="w-12 h-12" />
              <h1 className="font-bold text-lg text-[#291334]">
                Issue Sheet App
              </h1>
            </div>
          </Card>
        </Link>
        {/*  */}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={'https://uipa-referrenceapp.up.railway.app/'}
        >
          <Card className="p-5 w-[200px] h-[200px] flex justify-center cursor-pointer  hover:bg-slate-50">
            <div className="flex flex-col gap-2 items-center ">
              <LibraryBig className="w-12 h-12" />
              <h1 className="font-bold text-lg text-[#291334]">
                Refferrence App
              </h1>
            </div>
          </Card>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={'https://uipassetregister-production-71ef.up.railway.app/'}
        >
          <Card className="p-5 w-[200px] h-[200px] flex justify-center cursor-pointer  hover:bg-slate-50">
            <div className="flex flex-col gap-2 items-center ">
              <Computer className="w-10 h-10" />
              <h1 className="font-bold text-center text-lg text-[#291334]">
                Asset Management
              </h1>
            </div>
          </Card>
        </Link>

        {/* <Card className="p-5 w-[200px] h-[200px] flex justify-center cursor-pointer  hover:bg-slate-50">
          Project Tracker
        </Card>
        <Card className="p-5 w-[200px] h-[200px] flex justify-center cursor-pointer  hover:bg-slate-50">
          Leave Application system
        </Card> */}

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={'https://docuseal-uipafrica.up.railway.app/'}
        >
          <Card className="p-5 bg-[#efeae6] w-[200px] h-[200px] flex justify-center cursor-pointer  hover:bg-slate-50">
            <div className="flex flex-col gap-2 items-center ">
              <Signature className="h-12 w-12 " />
              <h1 className="font-bold text-lg text-[#291334]">DocuSeal</h1>
            </div>
          </Card>
        </Link>
      </div>
    </main>
  );
}
