"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "../ui/button";
import UserAccountNav from "./UserAccountNav";

interface SessionStatusProps {
  session: any;
}

export default function SessionStatus({ session }: SessionStatusProps) {
  if (session) {
    return (
      <UserAccountNav user={session.user} />
    );
  }
  return (
     <Button className="rounded-full w-24" asChild>
        <span className="btn-primary" onClick={() => signIn("github")}>
          Log In
        </span>
      </Button>
  );
}
