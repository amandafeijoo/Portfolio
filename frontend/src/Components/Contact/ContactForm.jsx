import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import axios from "axios";
import {
  FormWrapper,
  Field,
  Label,
  Input,
  Select,
  Textarea,
  SubmitButton,
  PrivacyNote,
  Hint,
} from "./ContactForm.styles";

/* =========================
   HELPERS
========================= */
const getCSRFToken = () => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const trimmed = cookie.trim();
    if (trimmed.startsWith("csrftoken=")) {
      return decodeURIComponent(trimmed.substring(10));
    }
  }
  return null;
};

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

/* =========================
   COMPONENT
========================= */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* ---------- VALIDATION ---------- */
    if (
      !formData.name ||
      !formData.email ||
      !formData.projectType ||
      !formData.message
    ) {
      Swal.fire(
        "Missing information",
        "Please fill in all required fields.",
        "warning"
      );
      return;
    }

    if (!validateEmail(formData.email)) {
      Swal.fire("Invalid email", "Please use a valid email address.", "error");
      return;
    }

    /* ---------- PAYLOAD CORRECTO PARA DJANGO ---------- */
    const payload = {
      name: formData.name,
      email: formData.email,
      project_type: formData.projectType,
      budget: formData.budget,
      message: formData.message,
    };
    /* ---------- ENVÍO ---------- */

    setLoading(true);

    try {
      await axios.post("/contact/", payload, {
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      });

      Swal.fire(
        "Request sent",
        "Thanks for reaching out. I’ll get back to you within 24–48 hours.",
        "success"
      );

      /* ---------- RESET ---------- */
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      Swal.fire(
        "Error",
        "Something went wrong. Please try again later.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {/* NAME */}
      <Field>
        <Label>Name *</Label>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </Field>

      {/* EMAIL */}
      <Field>
        <Label>Email *</Label>
        <Input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@email.com"
        />
      </Field>

      {/* PROJECT TYPE */}
      <Field>
        <Label>Type of project *</Label>
        <Select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="Essential Website">
            Essential Website (1–3 pages)
          </option>
          <option value="Business Website">Business Website (4–6 pages)</option>
          <option value="Custom Web Application">Custom Web Application</option>
          <option value="Not sure yet">Not sure yet / Let’s discuss</option>
        </Select>
      </Field>

      {/* BUDGET */}
      <Field>
        <Label>Budget range (optional)</Label>
        <Select name="budget" value={formData.budget} onChange={handleChange}>
          <option value="">Select a range</option>
          <option value="< 1.000 €">Under €1.000</option>
          <option value="1.000 – 2.000 €">€1.000 – €2.000</option>
          <option value="2.000 – 4.000 €">€2.000 – €4.000</option>
          <option value="4.000 €+">€4.000+</option>
          <option value="Not sure">Not sure yet</option>
        </Select>
      </Field>

      {/* MESSAGE */}
      <Field>
        <Label>Project details *</Label>
        <Textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your idea, goals, timeline, or anything important."
        />
      </Field>

      <SubmitButton disabled={loading}>
        {loading ? "Sending..." : "Request a quote →"}
      </SubmitButton>

      <PrivacyNote>
        By submitting this form, you agree to the processing of your data as
        described in the <a href="/privacy-policy">Privacy Policy</a>.
      </PrivacyNote>

      <Hint>I usually reply within 24–48 hours.</Hint>
    </FormWrapper>
  );
}
