"use client"
import React, { useRef, useState } from "react";

interface PostFormProps {
  user?: {
    name: string;
    avatar: string;
  };
  onSubmit?: (data: PostFormData) => void;
}

export interface PostFormData {
  text: string;
  image?: string;
  video?: string;
}

const defaultUser = {
  name: "Lionel Messi",
  avatar: "/personnage/blaise.jpeg",
};

export const PostForm: React.FC<PostFormProps> = ({ user = defaultUser, onSubmit }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);
  const [video, setVideo] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setError(null);
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideo(URL.createObjectURL(e.target.files[0]));
      setError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() && !image && !video) {
      setError("Veuillez écrire un texte ou ajouter une image/vidéo.");
      return;
    }
    setError(null);
    onSubmit?.({ text, image, video });
    setText("");
    setImage(undefined);
    setVideo(undefined);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border rounded-2xl shadow p-6 max-w-xl w-full mx-auto">
      <div className="flex items-start gap-4">
        <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-cover border" />
        <div className="flex-1">
          <textarea
            className="w-full border rounded-lg px-4 py-3 resize-none min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Exprimez-vous..."
            value={text}
            onChange={e => setText(e.target.value)}
            maxLength={1000}
          />
          {image && (
            <div className="mt-3 relative group">
              <img src={image} alt="Aperçu" className="w-full max-h-64 object-contain rounded-lg border" />
              <button type="button" className="absolute top-2 right-2 bg-white/80 rounded-full p-1 shadow hover:bg-white" onClick={() => setImage(undefined)} title="Supprimer l'image">✕</button>
            </div>
          )}
          {video && (
            <div className="mt-3 relative group">
              <video src={video} controls className="w-full max-h-64 rounded-lg border" />
              <button type="button" className="absolute top-2 right-2 bg-white/80 rounded-full p-1 shadow hover:bg-white" onClick={() => setVideo(undefined)} title="Supprimer la vidéo">✕</button>
            </div>
          )}
          <div className="flex items-center gap-3 mt-4">
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-blue-600 hover:bg-blue-50 transition text-sm font-medium"
              onClick={() => imageInputRef.current?.click()}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75M12 21v-4m0 0a4 4 0 01-4-4V5a4 4 0 018 0v8a4 4 0 01-4 4z" /></svg>
              Photo
            </button>
            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-blue-600 hover:bg-blue-50 transition text-sm font-medium"
              onClick={() => videoInputRef.current?.click()}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A2 2 0 0021 6.382V5a2 2 0 00-2-2H5a2 2 0 00-2 2v1.382a2 2 0 00 1.447 1.842L9 10m6 0v10a2 2 0 01-2 2H7a2 2 0 01-2-2V10m6 0V4m0 6l-6 3" /></svg>
              Vidéo
            </button>
            <input
              ref={videoInputRef}
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleVideoChange}
            />
            <button
              type="submit"
              className="ml-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition text-sm shadow"
            >Publier</button>
          </div>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </div>
      </div>
    </form>
  );
};

export default PostForm; 