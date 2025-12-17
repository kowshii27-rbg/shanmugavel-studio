"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./Button";
import { services } from "@/data/services";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(6, "Enter a phone number"),
  shootType: z.string().min(1, "Select a shoot type"),
  preferredDate: z.string().optional(),
  time: z.string().optional(),
  location: z.enum(["Studio", "Outdoor", "Other"]),
  message: z.string().min(5, "Tell us a bit more"),
});

export type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "Studio",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit booking");
      }

      setSubmitStatus({
        type: "success",
        message: data.message || "Booking request submitted successfully! We'll contact you shortly.",
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to submit booking. Please try again later.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-lg"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            {...register("name")}
            className="w-full rounded-lg border border-[var(--color-border)] bg-transparent px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            className="w-full rounded-lg border border-[var(--color-border)] bg-transparent px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none"
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" error={errors.phone?.message}>
          <input
            {...register("phone")}
            className="w-full rounded-lg border border-[var(--color-border)] bg-transparent px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none"
          />
        </Field>
        <Field label="Shoot type" error={errors.shootType?.message}>
          <select
            {...register("shootType")}
            className="w-full rounded-lg border border-[var(--color-border)] bg-transparent px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.title} className="bg-[#0b0b0d]">
                {service.title}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Preferred date" error={errors.preferredDate?.message}>
          <input
            {...register("preferredDate")}
            type="date"
            className="w-full rounded-lg border border-[var(--color-border)] bg-transparent px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none"
          />
        </Field>
        <Field label="Preferred time" error={errors.time?.message}>
          <input
            {...register("time")}
            type="time"
            className="w-full rounded-lg border border-[var(--color-border)] bg-transparent px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none"
          />
        </Field>
      </div>
      <Field label="Location" error={errors.location?.message}>
        <div className="grid grid-cols-3 gap-3 text-sm">
          {["Studio", "Outdoor", "Other"].map((value) => (
            <label
              key={value}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-[var(--color-border)] bg-black/20 px-3 py-2"
            >
              <input
                type="radio"
                value={value}
                {...register("location")}
                className="accent-[var(--accent)]"
              />
              {value}
            </label>
          ))}
        </div>
      </Field>
      <Field label="Message / Requirements" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full rounded-lg border border-[var(--color-border)] bg-transparent px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none"
          placeholder="Share details like venue, guests, style, deliverables"
        />
      </Field>
      {submitStatus.type && (
        <div
          className={`rounded-lg border p-4 text-sm ${
            submitStatus.type === "success"
              ? "border-green-500/50 bg-green-500/10 text-green-400"
              : "border-red-500/50 bg-red-500/10 text-red-400"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Submitting..." : "Book a Session"}
      </Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1 text-sm">
      <label className="block text-foreground/90">{label}</label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
