import Image from "../../../node_modules/next/image";

export default function Header() {
  return (
    <header>
      <div>
        <Image src="/next.svg" alt="Question logo" width={180} height={37} />
      </div>
      <div></div>
      <div>
        <ul>
          <li>알림</li>
        </ul>
      </div>
    </header>
  );
}
