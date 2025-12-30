import type { JSX } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  loggedIn: boolean;
  children: JSX.Element ; // children-ийг зааж өгч байна
};

export default function ProtectedRoute({ loggedIn, children }: ProtectedRouteProps) {
  if (!loggedIn) {
    return <Navigate to="/" replace />; // login page руу чиглүүлнэ
  }
  return children;
}
