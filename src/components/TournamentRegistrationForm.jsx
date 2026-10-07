import { useState } from "react";

import { supabase } from "../lib/supabase";
import scannerImage from "../assets/tournament/unpuzzle_scanner.jpg";

function TournamentRegistrationForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setMessageType("");

    const form = event.target;

    const playerName = form.playerName.value.trim();
    const dateOfBirth = form.dateOfBirth.value;
    const parentName = form.parentName.value.trim();
    const mobileNumber = form.mobileNumber.value.trim();
    const email = form.email.value.trim();
    const paymentScreenshot =
      form.paymentScreenshot.files[0];

    // =========================
    // BASIC VALIDATION
    // =========================

    if (playerName.length < 2) {
      setMessage("Please enter a valid player name.");
      setMessageType("error");
      return;
    }

    if (!dateOfBirth) {
      setMessage("Please select the date of birth.");
      setMessageType("error");
      return;
    }

    const selectedDate = new Date(dateOfBirth);
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate > today) {
      setMessage("Date of birth cannot be in the future.");
      setMessageType("error");
      return;
    }

    if (parentName.length < 2) {
      setMessage("Please enter a valid parent name.");
      setMessageType("error");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobileNumber)) {
      setMessage("Please enter a valid 10-digit mobile number.");
      setMessageType("error");
      return;
    }

    // =========================
    // EMAIL IS OPTIONAL
    // =========================

    if (
      email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    // =========================
    // PAYMENT SCREENSHOT
    // =========================

    if (!paymentScreenshot) {
      setMessage("Please upload your payment screenshot.");
      setMessageType("error");
      return;
    }

    // =========================
    // 2 MB FILE SIZE LIMIT
    // =========================

    if (paymentScreenshot.size > 2 * 1024 * 1024) {
      setMessage(
        "Payment screenshot must be less than 2 MB."
      );
      setMessageType("error");
      return;
    }

    // =========================
    // IMAGE TYPE CHECK
    // =========================

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(paymentScreenshot.type)) {
      setMessage(
        "Please upload a JPG, PNG, or WEBP image."
      );
      setMessageType("error");
      return;
    }

    setLoading(true);

    try {
      // =========================
      // CREATE UNIQUE FILE NAME
      // =========================

      const fileExtension =
        paymentScreenshot.name.split(".").pop();

      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExtension}`;

      const filePath = `tournament-payments/${fileName}`;

      // =========================
      // UPLOAD PAYMENT SCREENSHOT
      // =========================

      const { error: uploadError } =
        await supabase.storage
          .from("payment-screenshots")
          .upload(
            filePath,
            paymentScreenshot,
            {
              cacheControl: "3600",
              upsert: false,
              contentType: paymentScreenshot.type,
            }
          );

      if (uploadError) {
        console.error(
          "Storage upload error:",
          uploadError
        );

        setMessage(
          "Payment screenshot upload failed. Please try again."
        );
        setMessageType("error");
        setLoading(false);
        return;
      }

      // =========================
      // SAVE REGISTRATION
      // =========================

      const { error: databaseError } =
        await supabase
          .from("vca_tournament_registrations")
          .insert([
            {
              player_name: playerName,
              date_of_birth: dateOfBirth,
              parent_name: parentName,
              mobile_number: mobileNumber,
              email: email || null,
              payment_screenshot: filePath,
            },
          ]);

      if (databaseError) {
        console.error(
          "Database insert error:",
          databaseError
        );

        setMessage(
          "Registration failed. Please try again."
        );
        setMessageType("error");
        setLoading(false);
        return;
      }

      // =========================
      // SUCCESS
      // =========================

      setMessage(
        "Tournament registration successful!"
      );
      setMessageType("success");

      form.reset();
    } catch (error) {
      console.error(
        "Registration error:",
        error
      );

      setMessage(
        "Something went wrong. Please try again."
      );
      setMessageType("error");
    }

    setLoading(false);
  };

  return (
    <form
      className="tournament-registration-form"
      onSubmit={handleSubmit}
    >
      {/* PLAYER NAME */}
      <div className="form-group">
        <label htmlFor="playerName">
          Player Name
        </label>

        <input
          id="playerName"
          name="playerName"
          type="text"
          placeholder="Enter player name"
          minLength="2"
          required
        />
      </div>

      {/* DATE OF BIRTH */}
      <div className="form-group">
        <label htmlFor="dateOfBirth">
          Date of Birth
        </label>

        <input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          max={new Date()
            .toISOString()
            .split("T")[0]}
          required
        />
      </div>

      {/* PARENT NAME */}
      <div className="form-group">
        <label htmlFor="parentName">
          Parent Name
        </label>

        <input
          id="parentName"
          name="parentName"
          type="text"
          placeholder="Enter parent name"
          minLength="2"
          required
        />
      </div>

      {/* MOBILE NUMBER */}
      <div className="form-group">
        <label htmlFor="mobileNumber">
          Mobile Number
        </label>

        <input
          id="mobileNumber"
          name="mobileNumber"
          type="tel"
          placeholder="Enter 10-digit mobile number"
          maxLength="10"
          inputMode="numeric"
          pattern="[0-9]{10}"
          onInput={(event) => {
            event.target.value = event.target.value
              .replace(/\D/g, "")
              .slice(0, 10);
          }}
          required
        />
      </div>

      {/* EMAIL */}
      <div className="form-group">
        <label htmlFor="email">
          Email <span>(Optional)</span>
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter email address"
        />
      </div>

      {/* PAYMENT INFORMATION */}
      <div className="payment-section">
        <h3>Payment Details</h3>

        <p>
          <strong>Entry Fee: ₹300</strong>
        </p>

        <p>
          Pay ₹300 using any UPI app.
        </p>

        <p>
          <strong>UPI ID:</strong>{" "}
          unpuzzleclub@ybl
        </p>

        <div className="payment-scanner">
          <img
            src={scannerImage}
            alt="UPI payment QR code"
          />
        </div>

        <p className="payment-note">
          After completing the payment, upload
          the payment screenshot below.
        </p>
      </div>

      {/* PAYMENT SCREENSHOT */}
      <div className="form-group">
        <label htmlFor="paymentScreenshot">
          Payment Screenshot
        </label>

        <input
          id="paymentScreenshot"
          name="paymentScreenshot"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          required
        />

        <small>
          JPG, PNG or WEBP only. Maximum size: 2 MB.
        </small>
      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        className="register-button"
        disabled={loading}
      >
        {loading
          ? "Registering..."
          : "Register for Tournament"}
      </button>

      {/* MESSAGE */}
      {message && (
        <p
          style={{
            marginTop: "15px",
            textAlign: "center",
            fontSize: "14px",
            color:
              messageType === "success"
                ? "#2e7d32"
                : "#c62828",
          }}
        >
          {message}
        </p>
      )}
    </form>
  );
}

export default TournamentRegistrationForm;

