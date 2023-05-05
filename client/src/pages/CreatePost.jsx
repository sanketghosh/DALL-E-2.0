import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormField } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImage, setGeneratingImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

  const handleChange = () => {};

  const handleSurpriseMe = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div className="select-none">
        <h1 className="font-bold font-playfair text-3xl">
          Create your imagination
        </h1>
        <p className="mt-2 text-gray-500 max-w-lg text-base">
          Generate an imaginative image through DALL-E AI and share it with the
          community
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.value}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="3D render of a cute tropical fish"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative bg-gray-100 border-gray-400 text-gray-600 text-sm rounded-lg"></div>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
