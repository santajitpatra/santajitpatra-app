'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Image from "next/image";

const UserAccountNav = ({ user }: any) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border-2 border-cyan-500">
        <div className="rounded-full overflow-hidden">
          <Image src={user.image} alt="Avatar" width={40} height={40} />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="bg-[#0f2146] w-64 border-none rounded-lg"
        align="end"
      >
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            <p className="font-medium text-white hover:text-cyan-300">
              {user.name}
            </p>
          </div>
        </div>
        <DropdownMenuSeparator className="bg-cyan-500" />
        <DropdownMenuItem asChild>
          <Link
            className="text-white hover:text-cyan-300"
            href={`mailto:${user.email}`}
          >
            {user.email}
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link className="text-white hover:text-cyan-300" href="/dashboard">
            Dashboard
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => signOut()}
          className="cursor-pointer text-white hover:text-cyan-300"
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
