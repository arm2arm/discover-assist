import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => { console.error("404 Error: User attempted to access non-existent route:", location.pathname); }, [location.pathname]);
  return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="text-center"><p className="text-xs font-bold uppercase tracking-widest text-accent">404</p><h1 className="font-heading mt-3 text-4xl font-bold text-foreground">Page not found</h1><p className="mt-4 text-muted-foreground">The page may have moved or is not available.</p><Button asChild className="mt-7"><Link to="/">Return home</Link></Button></div></div>;
};

export default NotFound;
