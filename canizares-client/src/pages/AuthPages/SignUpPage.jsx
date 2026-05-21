import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import { useAuth } from '../../contexts/AuthContext';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    age: '',
    gender: '',
    contactNumber: '',
    address: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (/\s/.test(formData.username.trim())) {
      newErrors.username = 'Username cannot contain spaces';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.age || isNaN(Number(formData.age)) || Number(formData.age) < 1) {
      newErrors.age = 'Age must be a number only (1 or more)';
    }
    if (!formData.gender.trim()) {
      newErrors.gender = 'Gender is required';
    }
    if (!formData.contactNumber || !/^\d{11}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Contact number must be 11 digits';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      await signup(formData);
      setIsSubmitting(false);
      setErrors({ general: '✅ Account successfully created! Please sign in with your credentials.' });
      setTimeout(() => navigate('/auth/signin'), 2000);
    } catch (error) {
      setErrors({ general: error.response?.data?.message || 'Signup failed. Please try again.' });
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">Create account</h1>
        <p className="mt-2 text-sm text-zinc-600">Join Caul&apos;s community</p>
      </div>

      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full rounded-xl border-2 bg-zinc-50 px-4 py-3 text-lg placeholder-zinc-400 focus:ring-2 transition-all ${
                errors.firstName ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-zinc-300 focus:border-zinc-900 focus:ring-zinc-900/20'
              }`}
              placeholder="Jane"
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full rounded-xl border-2 bg-zinc-50 px-4 py-3 text-lg placeholder-zinc-400 focus:ring-2 transition-all ${
                errors.lastName ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-zinc-300 focus:border-zinc-900 focus:ring-zinc-900/20'
              }`}
              placeholder="Doe"
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="username" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            className={`w-full rounded-xl border-2 bg-zinc-50 px-4 py-3 text-lg placeholder-zinc-400 focus:ring-2 transition-all ${
              errors.username ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-zinc-300 focus:border-zinc-900 focus:ring-zinc-900/20'
            }`}
            placeholder="JohnDoe"
          />
          {errors.username && <p className="mt-1 text-sm text-red-500">{errors.username}</p>}
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
              errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-zinc-300 focus:border-zinc-900 focus:ring-zinc-900/20'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="age" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              className={`w-full rounded-xl border-2 bg-zinc-50 px-4 py-3 text-lg placeholder-zinc-400 focus:ring-2 transition-all ${
                errors.age ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-zinc-300 focus:border-zinc-900 focus:ring-zinc-900/20'
              }`}
              placeholder="20"
            />
            {errors.age && <p className="mt-1 text-sm text-red-500">{errors.age}</p>}
          </div>
          <div>
            <label htmlFor="gender" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`w-full rounded-xl border-2 bg-zinc-50 px-4 py-3 text-lg transition-all ${
                errors.gender ? 'border-red-400 focus:border-red-500' : 'border-zinc-300 focus:border-zinc-900'
              }`}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="mt-1 text-sm text-red-500">{errors.gender}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="contactNumber" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Contact Number
          </label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="text"
            value={formData.contactNumber}
            onChange={handleChange}
            className={`w-full rounded-xl border-2 bg-zinc-50 px-4 py-3 text-lg placeholder-zinc-400 focus:ring-2 transition-all ${
              errors.contactNumber ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-zinc-300 focus:border-zinc-900 focus:ring-zinc-900/20'
            }`}
            placeholder="09123456789"
          />
          {errors.contactNumber && <p className="mt-1 text-sm text-red-500">{errors.contactNumber}</p>}
        </div>

        <div>
          <label htmlFor="address" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`w-full rounded-xl border-2 bg-zinc-50 px-4 py-3 text-lg placeholder-zinc-400 focus:ring-2 transition-all ${
              errors.address ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-zinc-300 focus:border-zinc-900 focus:ring-zinc-900/20'
            }`}
            rows={4}
            placeholder="Street, City, Province"
          />
          {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
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
                errors.password ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-zinc-300 focus:border-zinc-900 focus:ring-zinc-900/20'
              }`}
              placeholder="••••••••"
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
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
                errors.confirmPassword ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-zinc-300 focus:border-zinc-900 focus:ring-zinc-900/20'
              }`}
              placeholder="••••••••"
            />
            {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
          </div>
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
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </Button>

      <div className="text-center">
        <p className="text-sm text-zinc-600">
          Already have an account?{' '}
          <Link to="/auth/signin" className="font-semibold text-amber-900 hover:text-amber-800">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpPage;
