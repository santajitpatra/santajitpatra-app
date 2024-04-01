"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";

interface SessionStatusProps {
  session: any;
}

export default function SessionStatus({ session }: SessionStatusProps) {
  if (session) {
    return (
      <Button className="rounded-full w-24" asChild>
        <span className="btn-primary" onClick={() => signOut()}>
          Log Out
        </span>
      </Button>
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
