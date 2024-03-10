/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export default function Component() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const validationResult = formSchema.safeParse(formData);

    if (!validationResult.success) {
      setErrors(validationResult.error.issues);
      return;
    }

    setErrors({});

    try {
      const templateParams = {
        to_name: "Lee",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };
      const emailJSOptions = {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      };
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        emailJSOptions
      );

      alert("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email. Error: ", error);
      alert("Failed to send your message. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="contact border-2 border-gray-300 dark:border-gray-700 p-4 rounded-md shadow-md space-y-8"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Please fill the below form and I will get back to you as soon as
          possible.
        </p>
      </div>
      <div className="space-y-4">
        {/* Name field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-600 dark:text-gray-400">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your name"
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        {/* Email field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-600 dark:text-gray-400">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        {/* Message field */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-600 dark:text-gray-400">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Please leave a message"
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-24"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <Button
          type="submit"
          className="w-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
