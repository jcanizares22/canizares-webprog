import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { useAuth } from "../../contexts/AuthContext";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
      await signup(formData.email, formData.password);
      setIsSubmitting(false);
      setErrors({ general: "✅ Account successfully created! Please sign in with your credentials." });
      setTimeout(() => navigate("/signin"), 2000);
    } catch (error) {
      setErrors({ general: "Signup failed. Please try again." });
      setIsSubmitting(false);
    }

  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
          Create account
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Join Caul&apos;s community
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`w-full rounded-xl border-2 bg-zinc-50 px-4 py-3 text-lg placeholder-zinc-400 focus:ring-2 transition-all ${
              errors.name 
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" 
                : "border-zinc-300 focus:border-zinc-900 focus:ring-zinc-900/20"
            }`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
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
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
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

        <div>
          <label htmlFor="confirmPassword" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full rounded-xl border-2 bg-zinc-50 px-4 py-3 text-lg placeholder-zinc-400 focus:ring-2 transition-all ${
              errors.confirmPassword 
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" 
                : "border-zinc-300 focus:border-zinc-900 focus:ring-zinc-900/20"
            }`}
            placeholder="••••••••"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
          )}
        </div>
      </div>


      {errors.general && (
        <div className={`p-4 rounded-xl border-2 text-sm font-medium ${
          errors.general.includes('✅') 
            ? 'bg-green-50 border-green-400 text-green-900 animate-pulse' 
            : 'bg-red-50 border-red-400 text-red-900'
        }`}>
          {errors.general}
        </div>
      )}
      <Button type="submit" className="w-full" variant="primary" disabled={isSubmitting}>
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </Button>


      <div className="text-center">
        <p className="text-sm text-zinc-600">
          Already have an account?{" "}
          <Link to="/signin" className="font-semibold text-amber-900 hover:text-amber-800">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpPage;
