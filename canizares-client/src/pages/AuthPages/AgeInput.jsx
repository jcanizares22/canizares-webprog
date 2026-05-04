import React from 'react';

const AgeInput = ({ formData, handleChange, errors }) => (
  <div>
    <label htmlFor="age" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
      Age
    </label>
    <input
      id="age"
      name="age"
      type="number"
      min="1"
      value={formData.age}
      onChange={handleChange}
      className={`w-full rounded-xl border-2 bg-zinc-50 px-4 py-3 text-lg placeholder-zinc-400 focus:ring-2 transition-all ${
        errors.age 
          ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" 
          : "border-zinc-300 focus:border-zinc-900 focus:ring-zinc-900/20"
      }`}
      placeholder="Enter your age"
    />
    {errors.age && (
      <p className="mt-1 text-sm text-red-500">{errors.age}</p>
    )}
  </div>
);

export default AgeInput;

