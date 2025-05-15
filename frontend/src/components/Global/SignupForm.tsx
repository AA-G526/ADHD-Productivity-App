import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/lib/supabase"; // make sure this exists
import { useNavigate } from "react-router-dom";


export default function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState<string | null>(null);
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    setError(error.message);
  } else {
    // You can also redirect them to login or dashboard
    navigate("/login"); // or "/" if you prefer
  }

  setLoading(false);
};

  return (
    <div className="p-4 flex justify-center items-center">
    <div className={cn("flex flex-col w-full max-w-92 gap-6", className)} {...props}>
      <Card className="bg-base-200 outline-2">
        <CardHeader>
          <CardTitle className="text-2xl text-secondary">Signup</CardTitle>
          <CardDescription>
            Enter your email and create a password below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup}>
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
                <Label className="text-secondary" htmlFor="password">Password</Label>
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
              {loading ? "Signing up..." : "Signup"}
            </button>
            {/* <Button
              variant="outline"
              className="w-full"
              onClick={async () => {
                const { error } = await supabase.auth.signInWithOAuth({
                  provider: "google",
                });
                if (error) setError(error.message);
              }}
            >
              Signup with Google
            </Button> */}
          </div>

          <div className="mt-4 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link to="/login" className="underline underline-offset-4">
              <strong className="text-slate-300">Login</strong>
            </Link>
          </div>
        </form>

        </CardContent>
      </Card>
    </div>
    </div>
  )
}
