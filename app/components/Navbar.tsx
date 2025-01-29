import { auth , signIn , signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();



  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" width={144} height={30} alt="logo" />
        </Link>

        <div className="flex justify-between items-center gap-5 text-black">
            {session && session?.user ? (
                <>
                    <Link href="startup/create" >
                        <span>Create</span>
                    </Link>

                    <form action={async()=>{
                      'use server'
                      await signOut({redirectTo : '/'})
                    }}>
                        <button>logout</button>
                    </form>

                    <Link href={`user/${session?.user?.id}`} >
                        <span>{session?.user?.name}</span>
                    </Link>
                </>
            ) :(

                <form action={
                    async()=>{
                        "use server"
                        await signIn('github')
                    }
                }>
                    <button>Login</button>
                </form>

            ) }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
