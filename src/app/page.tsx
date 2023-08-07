'use client';
import Card from "./components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-row h-full w-full py-12">
      <Image
        className="mx-auto mb-4"
        src='/images/magic-logo.png'
        width={300}
        height={0}
        alt='Magic: The Gathering logo'
      />
      <Card />
    </main>
  )
}
