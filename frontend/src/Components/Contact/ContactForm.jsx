import React, { useState } from "react";
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
  ErrorText,
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

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required.";
        return "";

      case "email":
        if (!value.trim()) return "Email is required.";
        if (!validateEmail(value)) return "Please enter a valid email address.";
        return "";

      case "projectType":
        if (!value.trim()) return "Please select a project type.";
        return "";

      case "message":
        if (!value.trim()) return "Project details are required.";
        return "";

      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      projectType: validateField("projectType", formData.projectType),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // valida en tiempo real mientras escribe / selecciona
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      Swal.fire(
        "Missing or invalid fields",
        "Please check the highlighted fields in the form.",
        "warning"
      );
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      project_type: formData.projectType,
      budget: formData.budget,
      message: formData.message,
    };

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

      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });

      setErrors({});
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
    <FormWrapper onSubmit={handleSubmit} noValidate>
      {/* NAME */}
      <Field>
        <Label>Name *</Label>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your name"
          $hasError={!!errors.name}
          aria-invalid={!!errors.name}
        />
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
      </Field>

      {/* EMAIL */}
      <Field>
        <Label>Email *</Label>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="you@email.com"
          $hasError={!!errors.email}
          aria-invalid={!!errors.email}
        />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
      </Field>

      {/* PROJECT TYPE */}
      <Field>
        <Label>Type of project *</Label>
        <Select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          onBlur={handleBlur}
          $hasError={!!errors.projectType}
          aria-invalid={!!errors.projectType}
        >
          <option value="">Select an option</option>
          <option value="Essential Website">
            Essential Website (1–3 pages)
          </option>
          <option value="Business Website">Business Website (4–6 pages)</option>
          <option value="Custom Web Application">Custom Web Application</option>
          <option value="Not sure yet">Not sure yet / Let’s discuss</option>
        </Select>
        {errors.projectType && <ErrorText>{errors.projectType}</ErrorText>}
      </Field>

      {/* BUDGET */}
      <Field>
        <Label>Budget range (optional)</Label>
        <Select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          onBlur={handleBlur}
        >
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
          onBlur={handleBlur}
          placeholder="Tell me about your idea, goals, timeline, or anything important."
          $hasError={!!errors.message}
          aria-invalid={!!errors.message}
        />
        {errors.message && <ErrorText>{errors.message}</ErrorText>}
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
