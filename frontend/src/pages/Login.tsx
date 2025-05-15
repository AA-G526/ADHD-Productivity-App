import LoginForm from "@/components/Global/LoginForm"
export default function login() {
  return (
    <div className="flex min-h-[95vh] w-full items-center justify-center -translate-y-20">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
