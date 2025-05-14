import SignupForm from "@/components/SignupForm"
export default function signup() {
  return (
    <div className="flex h-screen w-full items-center justify-center -translate-y-20">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  )
}
