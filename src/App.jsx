import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import LoggedIn from "./components/LoggedIn";
import Dashboard from "./components/Dashboard";

export default function App() {
  const { isLoading, isAuthenticated } = useKindeAuth();

  if (isLoading) return <>Loading...</>;

  return isAuthenticated ? <LoggedIn /> : <Dashboard />;
}
