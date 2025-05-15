import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function session () {
//   const [session, setSession] = useState<Session | null>(null);

//   useEffect(() => {
//     const getSession = async () => {
//       const { data, error } = await supabase.auth.getSession();
//       if (error) console.error("Error getting session:", error);
//       else setSession(data.session);
//     };
  
//     getSession();
  
//     // Listen to changes in auth state
//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, newSession) => {
//         setSession(newSession);
//       }
//     );
  
//     return () => {
//       listener.subscription.unsubscribe();
//     };
//   }, []);
//   if (!session) {
//     return false;
//   }
// }