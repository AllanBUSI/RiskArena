"use client"
import React, { useState } from "react";

interface ProfileFormProps {
  onSubmit?: (data: ProfileFormData) => void;
}

export interface ProfileFormData {
  firstName: string;
  lastName: string;
  image: string; // URL locale de l'image
  banner: string; // URL locale de la bannière
  bio: string;
}

const initialState: ProfileFormData = {
  firstName: "",
  lastName: "",
  image: "",
  banner: "",
  bio: "",
};

export const ProfileForm: React.FC<ProfileFormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof ProfileFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [bannerPreview, setBannerPreview] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, files } = e.target as HTMLInputElement;
    if (type === "file" && files && files[0]) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setForm(f => ({ ...f, [name]: url }));
      setErrors(e => ({ ...e, [name]: undefined }));
      if (name === "image") setImagePreview(url);
      if (name === "banner") setBannerPreview(url);
    } else {
      setForm(f => ({ ...f, [name]: value }));
      setErrors(e => ({ ...e, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof ProfileFormData, string>> = {};
    if (!form.firstName.trim()) newErrors.firstName = "Le prénom est requis.";
    if (!form.lastName.trim()) newErrors.lastName = "Le nom est requis.";
    if (!form.image.trim()) newErrors.image = "La photo de profil est requise.";
    if (!form.banner.trim()) newErrors.banner = "La bannière est requise.";
    if (!form.bio.trim()) newErrors.bio = "La bio est requise.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      onSubmit?.(form);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 via-white to-gray-100 border rounded-2xl shadow p-10 max-w-xl w-full mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4">Complétez votre profil</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1" htmlFor="firstName">Prénom</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className={`border rounded-lg px-3 py-2 w-full ${errors.firstName ? 'border-red-500' : ''}`}
            value={form.firstName}
            onChange={handleChange}
            autoComplete="given-name"
          />
          {errors.firstName && <div className="text-xs text-red-500 mt-1">{errors.firstName}</div>}
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1" htmlFor="lastName">Nom</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className={`border rounded-lg px-3 py-2 w-full ${errors.lastName ? 'border-red-500' : ''}`}
            value={form.lastName}
            onChange={handleChange}
            autoComplete="family-name"
          />
          {errors.lastName && <div className="text-xs text-red-500 mt-1">{errors.lastName}</div>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="image">Photo de profil</label>
        <input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          className={`border rounded-lg px-3 py-2 w-full ${errors.image ? 'border-red-500' : ''}`}
          onChange={handleChange}
        />
        {imagePreview && (
          <img src={imagePreview} alt="Aperçu photo de profil" className="mt-2 w-24 h-24 object-cover rounded-full border" />
        )}
        {errors.image && <div className="text-xs text-red-500 mt-1">{errors.image}</div>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="banner">Bannière</label>
        <input
          id="banner"
          name="banner"
          type="file"
          accept="image/*"
          className={`border rounded-lg px-3 py-2 w-full ${errors.banner ? 'border-red-500' : ''}`}
          onChange={handleChange}
        />
        {bannerPreview && (
          <img src={bannerPreview} alt="Aperçu bannière" className="mt-2 w-full max-h-32 object-cover rounded-lg border" />
        )}
        {errors.banner && <div className="text-xs text-red-500 mt-1">{errors.banner}</div>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          name="bio"
          className={`border rounded-lg px-3 py-2 w-full min-h-[80px] ${errors.bio ? 'border-red-500' : ''}`}
          value={form.bio}
          onChange={handleChange}
          placeholder="Décrivez-vous en quelques mots..."
        />
        {errors.bio && <div className="text-xs text-red-500 mt-1">{errors.bio}</div>}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
      >Enregistrer</button>
      {submitted && Object.keys(errors).length === 0 && (
        <div className="text-green-600 text-center font-medium mt-2">Profil enregistré !</div>
      )}
    </form>
  );
};

export default ProfileForm; 