import Image from "next/image";
import LoginPage from "./login/page";

export default function Home() {
  return (
    <div className="grid place-items-center">
      <Image src="/logo.svg" width={100} height={100} alt="logo" />
      <LoginPage />
    </div>
  );
}
