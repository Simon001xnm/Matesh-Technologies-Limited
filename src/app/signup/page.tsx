import { AuthForm } from "@/components/auth/auth-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
           <Link href="/" className="inline-block mb-4">
            <Image 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XbLRyutGuhzXVlWYm2gppY3nmShsDtXkHqxJsl41HxvEBlznLXeHDBBBGQIKl9tZry0&usqp=CAU" 
              alt="Matesh Tech Logo" 
              width={40} 
              height={40} 
              className="h-10 w-auto mx-auto"
            />
          </Link>
          <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
          <CardDescription>Join Matesh Technologies to start shopping for the best networking accessories.</CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm mode="signup" />
        </CardContent>
      </Card>
    </div>
  );
}
