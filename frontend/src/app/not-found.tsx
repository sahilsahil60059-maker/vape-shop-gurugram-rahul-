import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-2xl mb-4">
        404
      </div>
      <h1 className="text-3xl font-black text-white tracking-tight">
        Page Not Found
      </h1>
      <p className="text-zinc-400 text-sm mt-2 max-w-md">
        The page you are looking for does not exist or has been moved. Explore our main store page for Gurgaon delivery.
      </p>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-5 py-2.5 rounded-xl transition shadow-lg"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
