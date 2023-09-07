import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      need to build in that world
      <div>
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
}
