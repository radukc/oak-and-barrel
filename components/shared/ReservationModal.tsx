"use client";

import { useState } from "react";
import { Calendar, Clock, Users } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { getMinDate, getMaxDate, timeSlots, guestOptions } from "@/lib/utils";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    partySize: "2",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.date) {
      newErrors.date = "Please select a date";
    }
    if (!formData.time) {
      newErrors.time = "Please select a time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Convert 12-hour time format to 24-hour format
  const convertTo24Hour = (time12h: string): string => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");

    if (hours === "12") {
      hours = modifier === "AM" ? "00" : "12";
    } else if (modifier === "PM") {
      hours = String(parseInt(hours, 10) + 12);
    }

    return `${hours.padStart(2, "0")}:${minutes}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Convert time to 24-hour format and combine with date
      const time24h = convertTo24Hour(formData.time);
      const dateTime = new Date(`${formData.date}T${time24h}:00`).toISOString();

      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          partySize: formData.partySize,
          dateTime,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create reservation");
      }

      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      date: "",
      time: "",
      partySize: "2",
    });
    setErrors({});
    setError(null);
    setIsSuccess(false);
    onClose();
  };

  const timeOptions = timeSlots.map((time) => ({ value: time, label: time }));

  if (isSuccess) {
    return (
      <Modal isOpen={isOpen} onClose={handleClose} title="Reservation Confirmed!">
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-[var(--color-success-100)] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-[var(--color-success-600)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-charcoal)] mb-2">
            Thank you, {formData.name}!
          </h3>
          <p className="text-[var(--color-slate)] mb-4">
            Your table for {formData.partySize} {parseInt(formData.partySize) === 1 ? "guest" : "guests"} has been reserved.
          </p>
          <div className="bg-[var(--color-cream-warm)] rounded-lg p-4 text-left mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-[var(--color-primary-500)]" />
              <span className="text-[var(--color-charcoal)]">
                {new Date(formData.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[var(--color-primary-500)]" />
              <span className="text-[var(--color-charcoal)]">{formData.time}</span>
            </div>
          </div>
          <p className="text-sm text-[var(--color-stone)]">
            We look forward to seeing you!
          </p>
          <Button variant="primary" size="lg" onClick={handleClose} className="mt-6 w-full">
            Done
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Reserve Your Table">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-[var(--color-error-50)] border border-[var(--color-error-500)] text-[var(--color-error-700)] px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <Input
          label="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="John Doe"
          error={errors.name}
          isRequired
        />

        <Select
          label="Party Size"
          value={formData.partySize}
          onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
          options={guestOptions}
          leftIcon={<Users className="w-5 h-5" />}
          isRequired
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            min={getMinDate()}
            max={getMaxDate()}
            error={errors.date}
            leftIcon={<Calendar className="w-5 h-5" />}
            isRequired
          />
          <Select
            label="Time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            options={timeOptions}
            placeholder="Select time"
            error={errors.time}
            leftIcon={<Clock className="w-5 h-5" />}
            isRequired
          />
        </div>

        <div className="flex gap-3 mt-6 pt-4 border-t border-[var(--color-border-light)]">
          <Button
            type="button"
            variant="ghost"
            onClick={handleClose}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            isLoading={isSubmitting}
            className="flex-1"
          >
            Confirm Reservation
          </Button>
        </div>
      </form>
    </Modal>
  );
}
