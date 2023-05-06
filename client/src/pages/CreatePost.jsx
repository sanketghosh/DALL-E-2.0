import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CiImageOn } from "react-icons/ci";
import { FormField, Loader } from "../components";
import { getRandomPrompt } from "../utils";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImage, setGeneratingImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImage(true);
        const response = await fetch("http://localhost:5000/api/v1/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();

        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        alert(error);
        console.log(error);
      } finally {
        setGeneratingImage(false);
      }
    } else {
      alert("Please enter a prompt");
    }
  };

  const handleSubmit = () => {};

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

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

      <form className="mt-12 max-w-3xl" onSubmit={handleSubmit}>
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

          <div className="relative bg-gray-100 border-gray-400 text-gray-600 text-sm rounded-lg focus:ring-indigo-600 border-2 focus:border-indigo-600 w-64 h-64 p-3 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className=" w-full h-full object-contain"
              />
            ) : (
              <CiImageOn className="text-[13rem] opacity-60" />
            )}

            {generatingImage && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex gap-5">
          <button
            type="button"
            onClick={handleGenerateImage}
            className="bg-teal-600 text-gray-100 transition hover:bg-opacity-80 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImage ? "Generating..." : "Generate"}
          </button>
        </div>
        <div className="mt-5">
          <p className="mt-3 text-gray-600 text-sm select-none">
            Once you have created the image, you want, you can hare with the
            community
          </p>
          <button
            type="submit"
            className="mt-3 text-gray-100 bg-indigo-600 hover:bg-opacity-90 transition font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center rounded-sm"
          >
            {loading ? "Sharing" : "Share with the community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
