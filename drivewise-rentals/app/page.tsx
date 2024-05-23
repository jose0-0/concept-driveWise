import Image from "next/image";
import { Hero } from '@/components'
import { Catalogue } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Catalogue />
    </main>
  );
}
