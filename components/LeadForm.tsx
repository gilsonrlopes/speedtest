"use client";
import { useState } from "react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    ramo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 🔹 1. Envia para o Google Apps Script (colocaremos o link depois)
    await fetch("https://script.google.com/macros/s/SEU_SCRIPT_URL/exec", {
      method: "POST",
      body: new URLSearchParams(form),
    });

    // 🔹 2. Abre WhatsApp com mensagem personalizada
    const msg = encodeURIComponent(
      `Olá, sou ${form.nome} da ${form.empresa}. Tenho interesse em um site (${form.ramo}).`
    );
    window.open(`https://wa.me/55SEUNUMERO?text=${msg}`, "_blank");

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-neutral-900 text-white p-6 rounded-2xl w-full max-w-md mx-auto shadow-lg border border-neutral-800"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
        Solicitar Orçamento
      </h2>

      <input
        type="text"
        name="nome"
        placeholder="Seu nome"
        onChange={handleChange}
        required
        className="w-full mb-3 p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:border-pink-500 outline-none"
      />
      <input
        type="text"
        name="empresa"
        placeholder="Nome da empresa"
        onChange={handleChange}
        required
        className="w-full mb-3 p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:border-pink-500 outline-none"
      />
      <input
        type="text"
        name="ramo"
        placeholder="Ramo de atividade (ex: marmoraria, estética...)"
        onChange={handleChange}
        required
        className="w-full mb-3 p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:border-pink-500 outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-md bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-all"
      >
        {loading ? "Enviando..." : "Enviar e ir para o WhatsApp"}
      </button>
    </form>
  );
}
