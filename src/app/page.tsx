import { Inter } from 'next/font/google'
import ApplicationCardTiles from "./ApplicationCardTiles";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=" w-full h-max min-h-screen px-7 2xl:px-14  py-8 flex justify-center">
      <div className="max-w-screen-2xl flex flex-col gap-8 w-full min-h-full">
        <div className="min-w-max">{`Dashboard > Purchased Applications`}</div>
        <ApplicationCardTiles />
      </div>
    </main>
  );
}
