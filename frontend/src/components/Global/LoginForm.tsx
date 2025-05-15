import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { data, Link } from "react-router-dom"
import { useState } from "react";
import { supabase } from "@/lib/supabase"; // make sure this file exists
import { useNavigate } from "react-router-dom";

export default function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    const { data: sessionData } = await supabase.auth.getSession();
    console.log("Current session:", sessionData.session);
  
    if (error) {
      setError(error.message);
    } else {
      navigate('/');
    }

    setLoading(false);
  };

  return (
    <div className="p-4 flex justify-center items-center">
    <div className={cn("flex flex-col w-full max-w-92 gap-6", className)} {...props}>
      <Card className="bg-base-200 outline-2">
        <CardHeader>
          <CardTitle className="text-2xl text-secondary">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
        <form onSubmit={handleLogin}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2 text-secondary">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label className="text-secondary" htmlFor="password">
                Password
              </Label>
              <a
                href="#"
                className="ml-auto inline-block underline-offset-4 text-sm text-slate-500 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-accent"
              required
            />
            </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full btn btn-neutral" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
            <div className="text-center text-sm text-slate-500">
              Don&apos;t have an account?{" "}
              <Link
               key={'/signup'}
               to={'/signup'}
              className="underline underline-offset-4">
                <strong className="text-slate-300">Signup</strong>
              </Link>
            </div>
        </div>
      </form>

        </CardContent>
      </Card>
    </div>
    </div>
  )
}
