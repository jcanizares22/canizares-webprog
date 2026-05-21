import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { useAuth } from "../../contexts/AuthContext";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const foundErrors = validate();
    
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      await login(email, password);
      setIsSubmitting(false);
      navigate("/");
    } catch (error) {
      setErrors({ general: error.response?.data?.message || error.message || "Invalid credentials. Please check your email and password." });
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
          Welcome back
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Sign in to your Caul&apos;s account
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full rounded-xl border-2 bg-zinc-50 px-4 py-3 text-lg placeholder-zinc-400 focus:ring-2 transition-all ${
              errors.email 
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" 
                : "border-zinc-300 focus:border-zinc-900 focus:ring-zinc-900/20"
            }`}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full rounded-xl border-2 bg-zinc-50 px-4 py-3 text-lg placeholder-zinc-400 focus:ring-2 transition-all ${
              errors.password 
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" 
                : "border-zinc-300 focus:border-zinc-900 focus:ring-zinc-900/20"
            }`}
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>
      </div>

      {errors.general && (
        <div className="rounded-xl border-2 border-red-400 bg-red-50 p-4 text-sm text-red-900">
          {errors.general}
        </div>
      )}
      <Button type="submit" className="w-full" variant="primary" disabled={isSubmitting}>
        {isSubmitting ? "Signing In..." : "Sign In"}
      </Button>

      <div className="text-center">
        <p className="text-sm text-zinc-600">
          No account?{" "}
          <Link to="/signup" className="font-semibold text-amber-900 hover:text-amber-800">
            Create one
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignInPage;
