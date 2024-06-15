
import HomePage from "./_components/Homepage/HomePage";
import {NextUIProvider} from "@nextui-org/react";
export default function Home() {
  return (
    <>
      <NextUIProvider>
        <HomePage />
      </NextUIProvider>
    </>
  );
}
