import { useEffect, useState } from "react";
import "./login.css";

const DUMMY_OTP = "1111";
const MAX_ATTEMPTS = 3;
const LOCK_TIME = 60;

export default function BiomorphicLogin() {
  const [step, setStep] = useState("login"); // login | otp | success
  const [otp, setOtp] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [locked, setLocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(LOCK_TIME);
  const [error, setError] = useState("");

  /* OTP LOCK TIMER */
  useEffect(() => {
    if (locked && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
      return () => clearInterval(timer);
    }

    if (timeLeft === 0) {
      setLocked(false);
      setAttempts(0);
      setTimeLeft(LOCK_TIME);
      setError("");
    }
  }, [locked, timeLeft]);

  /* UI EFFECTS (same as original JS) */
  useEffect(() => {
    const createPulse = () => {
      const form = document.querySelector(".form-container");
      if (!form) return;
      const pulse = document.createElement("div");
      pulse.className = "pulse";
      pulse.style.left = Math.random() * 100 + "%";
      pulse.style.top = Math.random() * 100 + "%";
      form.appendChild(pulse);
      setTimeout(() => pulse.remove(), 2000);
    };

    const interval = setInterval(createPulse, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setStep("otp");
  };

  const verifyOtp = () => {
    if (otp === DUMMY_OTP) {
      setStep("success");
      setError("");
    } else {
      const count = attempts + 1;
      setAttempts(count);
      setError("Invalid OTP");

      if (count >= MAX_ATTEMPTS) {
        setLocked(true);
        setError("");
      }
    }
  };

  return (
    <>
      {/* Background Shapes */}
      <div className="bio-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="container">
        <div className="form-container">
          <div className="breathing-effect"></div>

          <h2>
            {step === "login" && "Welcome Back"}
            {step === "otp" && "Enter OTP"}
            {step === "success" && "Success"}
          </h2>

          {/* LOGIN FORM */}
          {step === "login" && (
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <input type="text" placeholder="Username or Email" required />
                <i className="fas fa-user"></i>
              </div>

              <div className="input-group">
                <input type="password" placeholder="Password" required />
                <i className="fas fa-lock"></i>
              </div>

              <button className="btn">Login</button>
            </form>
          )}

          {/* OTP MODULE */}
          {step === "otp" && (
            <>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  disabled={locked}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <i className="fas fa-key"></i>
              </div>

              <button
                className="btn"
                disabled={locked}
                onClick={verifyOtp}
                style={{ opacity: locked ? 0.6 : 1 }}
              >
                Verify OTP
              </button>

              {locked && (
                <div className="warning">
                  Too many failed attempts. Try again in {timeLeft}s
                </div>
              )}
            </>
          )}

          {/* SUCCESS */}
          {step === "success" && (
            <div className="success">
              ✅ Login Successful
            </div>
          )}

          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </>
  );
}
