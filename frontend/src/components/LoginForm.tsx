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

export default function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className="p-4 h-screen flex justify-center items-center">
    <div className={cn("flex flex-col w-full max-w-92 gap-6", className)} {...props}>
      <Card className="bg-base-200 outline-2">
        <CardHeader>
          <CardTitle className="text-2xl text-secondary">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2 text-secondary">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label className="text-secondary" htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block underline-offset-4 text-sm text-slate-500 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <button type="submit" className="w-full btn btn-neutral">
                Login
              </button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm text-slate-500">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                <strong className="text-slate-300">Sign up</strong>
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
    </div>
  )
}
