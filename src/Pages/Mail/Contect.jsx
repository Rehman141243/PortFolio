import React, { useState } from "react";
import { Download, Send } from "lucide-react";
import { useTheme } from "../../context/ThemeProvider";
import emailjs from "@emailjs/browser";

// ✅ EmailJS Config (use .env values)


// Animated Stars Background
const StarField = () => {
  const { theme } = useTheme();

  const starFieldStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    pointerEvents: "none",
  };

  const starStyle = () => ({
    position: "absolute",
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${Math.random() * 3 + 1}px`,
    height: `${Math.random() * 3 + 1}px`,
    backgroundColor: theme.purple[400],
    borderRadius: "50%",
    animation: `pulse ${Math.random() * 2 + 2}s infinite`,
    animationDelay: `${Math.random() * 3}s`,
  });

  return (
    <div style={starFieldStyle}>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
        `}
      </style>
      {[...Array(50)].map((_, i) => (
        <div key={i} style={starStyle()} />
      ))}
    </div>
  );
};

// Main Contact Form Component
const ContactForm = () => {
  const { theme, isDark } = useTheme();
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
console.log(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);

  // ✅ Fixed handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent:", result.text);
      setStatus("✅ Email sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("❌ Failed to send email. Check console.");
    }
  };


  // --- Styles ---
  const containerStyle = {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
        width: "96%",
         left:'2%',
    padding: "24px",
    background: theme. background.secondary,
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  };

  const mainGridStyle = {
    position: "relative",
    zIndex: 10,
    width: "96%",
    maxWidth: "1000px",
    margin: "0 auto",
    display: "grid",
 left:'2%',
        background: theme. background.secondary,
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "48px",
    alignItems: "center",
  };

  const formContainerStyle = {
    padding: "32px",
    borderRadius: "24px",
    background: theme.glass.background,
    backdropFilter: theme.glass.backdrop,
    border: theme.glass.border,
    boxShadow: theme.glass.shadow,
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "16px",
    color: theme.text.primary,
  };

  const subtitleStyle = {
    fontSize: "1.125rem",
    color: theme.text.secondary,
    marginBottom: "32px",
  };

  const inputRowStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  };

  const inputStyle = {
    width: "100%",
    padding: "16px 20px",
    borderRadius: "12px",
    border: theme.glass.border,
    background: theme.glass.background,
    backdropFilter: theme.glass.backdrop,
    color: theme.text.primary,
    borderWidth:0.5,
    borderColor:theme.text.primary,
    fontSize: "16px",
    transition: "all 0.3s ease",
    outline: "none",
    boxSizing: "border-box",
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "vertical",
    minHeight: "120px",
    fontFamily: "inherit",
  };

  const buttonStyle = {
    width: "40%",
    flex:1,
    flexDirection:'row',
    padding: "16px 24px",
    borderRadius: "12px",
    border: "none",
      background: theme.text.accent,
 
      boxShadow: '0 10px 30px rgba(192, 132, 252, 0.5)',
 
      cursor: 'pointer',

    color: '#fff',
    fontSize: "13px",
    fontWeight: "600",

    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",

  };
    const DownloadbuttonStyle = {
    width: "45%",

    padding: "16px 24px",
    borderRadius: "12px",
    border: "none",
      background: theme.text.accent,
 
      boxShadow: '0 10px 30px rgba(192, 132, 252, 0.5)',
 
      cursor: 'pointer',

    color: '#fff',
    fontSize: "13px",
    fontWeight: "600",

    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap:'7px'


  };

  const successStyle = {
    textAlign: "center",
    padding: "32px",
    borderRadius: "16px",
    background: theme.glass.background,
    border: theme.glass.border,
    color: theme.text.primary,
  };

  return (
    <div style={containerStyle}>
      <StarField />

      <div style={mainGridStyle} className="main-grid">
        {/* Left Side - Contact Form */}
        <div style={formContainerStyle}>
          <h1 style={titleStyle}>Let's connect constellations</h1>
          <p style={subtitleStyle}>
            Let's align our constellations! Reach out and let the magic of
            collaboration illuminate our skies.
          </p>

          {isSubmitted ? (
            <div style={successStyle}>
              <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🚀</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                Message Sent to the Stars!
              </h3>
              <p style={{ color: theme.text.secondary }}>
                Your message has been launched into the cosmos. We'll get back
                to you soon!
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={inputRowStyle}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={inputStyle}
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
                style={textareaStyle}
              />
<div className="flex gap-4">

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                style={{
                  ...buttonStyle,
                  opacity: isLoading ? 0.7 : 1,
                  cursor: isLoading ? "not-allowed" : "pointer",
                }}
              >
                {isLoading ? (
                  <>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        border: "2px solid transparent",
                        borderTop: "2px solid currentColor",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                      }}
                    />
                    Launching...
                  </>
                ) : (
                  <>
                    Send Mail
                    <Send size={20} />
                  </>
                )}
              </button>
            
                <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                style={{
                 ...DownloadbuttonStyle,
                  opacity: isLoading ? 0.7 : 1,
                  cursor: isLoading ? "not-allowed" : "pointer",
                }}
              >
                {isLoading ? (
                  <>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        border: "2px solid transparent",
                        borderTop: "2px solid currentColor",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                      }}
                    />
                    Launching...
                  </>
                ) : (
                  <>
                    Download Reume
                    <Download size={20} />
                  </>
                )}
              </button>
                  </div>
            </div>
          )}
        </div>

        {/* Right Side - Astronaut Illustration */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              width: "384px",
              height: "384px",
              borderRadius: "50%",
              marginBottom: "32px",
              background: theme.background.gradient+30,
              boxShadow: `0 0 100px ${theme.purple[900]}60`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Astronaut SVG */}
          <img
          src={isDark? '/logolight.png':'/logodark.png'}
          style={{width:300, height:300, marginTop:60}}
          />

          </div>
          <blockquote
            style={{
              textAlign: "center",
              maxWidth: "400px",
              padding: "24px",
              borderRadius: "16px",
              fontFamily:'Poppins',
              background: theme.glass.background,
              border: theme.glass.border,
            }}
          >
           "Good to see! How may I help you to build great and responsive 
           mobile applicationsusing react native technology"
            <footer style={{ fontSize: "0.875rem", marginTop: "8px" }}>
              — عبدالرحمٰن
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
