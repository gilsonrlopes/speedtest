import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // MUDANÇA AQUI: Conectando com as variáveis do layout.tsx
      fontFamily: {
        // Agora o padrão 'sans' usa a Satoshi (variável) primeiro. 
        // Se falhar, usa a Geist.
        sans: ["var(--font-satoshi)", "var(--font-geist-sans)", "sans-serif"],
        
        // Mantemos a classe 'font-satoshi' funcionando, mas apontando para a variável
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        
        // Adicionamos as outras que configuramos
        mono: ["var(--font-geist-mono)", "monospace"],
        serif: ["var(--font-playfair)", "serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
      
      // MANTIDO EXATAMENTE IGUAL AO SEU (Cores da marca)
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "#6366F1", foreground: "#FFFFFF" },
        secondary: { DEFAULT: "#1E293B", foreground: "#E2E8F0" },
        accent: { DEFAULT: "#F59E0B", foreground: "#FFFFFF" },
        muted: { DEFAULT: "#94A3B8", foreground: "#F1F5F9" },
        border: "#E2E8F0",
        ring: "#818CF8",
      },
      // MANTIDO
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      // MANTIDO
      boxShadow: {
        soft: "0 8px 20px rgba(0,0,0,0.08)",
        glass: "0 4px 30px rgba(255,255,255,0.1)",
      },
      // MANTIDO
      backgroundImage: {
        "gradient-tech": "linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #EC4899 100%)",
        "gradient-card": "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
      },
      // MANTIDO
      backdropBlur: {
        sm: "4px",
        md: "8px",
        lg: "16px",
      },
      // MANTIDO
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.01)" },
        },
      },
      // MANTIDO
      animation: {
        float: "float 3s ease-in-out infinite",
        pulseSoft: "pulseSoft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;