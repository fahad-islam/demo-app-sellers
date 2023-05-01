import { Inter } from 'next/font/google'
import ApplicationCardTiles from "./ApplicationCardTiles";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-full h-max min-h-screen px-8 2xl:px-14  py-8">
      <div className="flex flex-col gap-8 w-full min-h-full">
        <div className="">{`Dashboard > Purchased Applications`}</div>
        <ApplicationCardTiles />
      </div>
    </main>
  );
}
