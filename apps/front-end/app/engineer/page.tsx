"use client";

import UserDetailCard from "@/features/user/UserDetailCard";
import { useEngineerStore } from "@/stores/engineer/useEngineer";
import { useEffect } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  const { user, fetchUser, loading } = useEngineerStore();

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <div>No user data</div>;
  }
  return (
    <>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/MoDau.jpg')",
          filter: "brightness(0.3)",
        }}
      />
      <div className="relative z-10 m-7">
        <div className="flex items-center justify-between mb-8 max-w-2xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold mb-1">User Details</h1>
            <p className="text-gray-400 text-sm">
              View User information in the oil & gas system
            </p>
          </div>
          <Link href="/user">
            <Button variant="outline" className="border-red-500 text-zinc-400">
              ← Back
            </Button>
          </Link>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-sm rounded-lg border border-zinc-800 p-6 max-w-2xl mx-auto">
          <UserDetailCard user={user} />
        </div>

        <Link href={`/engineer/edit`}>
          <Button
            variant="outline"
            className="mt-4 border-red-500 text-zinc-400"
          >
            Update User
          </Button>
        </Link>
      </div>
    </>
  );
}
