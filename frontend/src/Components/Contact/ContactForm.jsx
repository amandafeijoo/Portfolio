import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import axios from "axios";

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

    setLoading(true);

    try {
      await axios.post("/contact/", formData, {
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      });

      Swal.fire(
        "Request sent",
        "Thanks for reaching out. I’ll get back to you within 24–48 hours.",
        "success"
      );

      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (error) {
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

/* =========================
   STYLES
========================= */

const FormWrapper = styled.form`
  max-width: 640px;
  margin: 0 auto;

  padding: 56px 56px 64px;
  border-radius: 28px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  backdrop-filter: blur(22px);
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(201, 184, 138, 0.9);
`;

const baseInput = `
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.25);
  padding: 10px 0;
  color: #f4f2ed;
  font-size: 0.95rem;

  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(201,184,138,0.9);
  }

  &::placeholder {
    color: rgba(255,255,255,0.35);
  }
`;

const Input = styled.input`
  ${baseInput}
`;

const Select = styled.select`
  ${baseInput}
  cursor: pointer;

  option {
    background: #0e0e0e;
    color: #f4f2ed;
  }
`;

const PrivacyNote = styled.p`
  margin-top: 12px;
  font-size: 0.7rem;
  opacity: 0.55;
  max-width: 420px;

  a {
    color: rgba(201, 184, 138, 0.9);
    text-decoration: underline;
  }
`;

const Textarea = styled.textarea`
  ${baseInput}
  resize: vertical;
`;

const SubmitButton = styled.button`
  margin-top: 24px;
  align-self: flex-start;

  padding: 12px 28px;
  border-radius: 14px;
  border: 1px solid rgba(201, 184, 138, 0.45);

  background: rgba(201, 184, 138, 0.18);
  color: #f4f2ed;

  font-family: "Source Code Pro", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;

  cursor: pointer;
  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(201, 184, 138, 0.3);
    background: rgba(201, 184, 138, 0.26);
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Hint = styled.p`
  margin-top: 8px;
  font-size: 0.75rem;
  opacity: 0.6;
`;
