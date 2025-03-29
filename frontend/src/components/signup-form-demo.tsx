"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Wallet } from "lucide-react"; // Using Lucide React Icons
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "User",
  });

  const [selectedRole, setSelectedRole] = useState<string>("User");

  const handleRoleSelection = (role: string) => {
    setFormData({ ...formData, role });
    setSelectedRole(role);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-900 via-black to-blue-900 p-4">
      {/* Left Role Selection Panel */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-black p-6 rounded-l-md w-1/3 text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Select Your Role</h2>
        <Button
          variant={selectedRole === "User" ? "default" : "outline"}
          className="w-full mb-4"
          onClick={() => handleRoleSelection("User")}
        >
          <User className="mr-2" />
          User
        </Button>
        <Button
          variant={selectedRole === "Admin" ? "default" : "outline"}
          className="w-full"
          onClick={() => handleRoleSelection("Admin")}
        >
          <User className="mr-2" />
          Admin
        </Button>
      </div>

      {/* Right Signup Form */}
      <Card className="w-full max-w-lg bg-black text-white shadow-lg lg:rounded-l-none">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Welcome to CampusZero!</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-800 text-white"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-800 text-white"
              />
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Sign Up
            </Button>
          </form>

          <Separator className="my-6" />

          {/* Social Login Options */}
          <div className="flex flex-col space-y-2">
            <Button variant="outline" className="w-full text-white">
              {/* <Google className="mr-2" /> */}
              Sign up with Google
            </Button>
            <ConnectButton.Custom>
              {({ openConnectModal }) => (
                <Button
                  variant="outline"
                  className="w-full text-white"
                  onClick={openConnectModal}
                >
                  <Wallet className="mr-2" />
                  Connect Wallet
                </Button>
              )}
            </ConnectButton.Custom>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
