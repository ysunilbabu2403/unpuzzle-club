import { useState } from "react";
import { supabase } from "../lib/supabase";

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
    const fideId = form.fideId.value.trim();
    const chessRating = form.chessRating.value;
    const academy = form.academy.value.trim();
    const tournamentCategory = form.tournamentCategory.value;

    // Player Name validation
    if (playerName.length < 2) {
      setMessage("Please enter a valid player name.");
      setMessageType("error");
      return;
    }

    // Date of Birth validation
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

    // Parent Name validation
    if (parentName.length < 2) {
      setMessage("Please enter a valid parent name.");
      setMessageType("error");
      return;
    }

    // Mobile validation
    if (!/^[0-9]{10}$/.test(mobileNumber)) {
      setMessage("Please enter a valid 10-digit mobile number.");
      setMessageType("error");
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    // Academy validation
    if (academy.length < 2) {
      setMessage("Please enter an academy name.");
      setMessageType("error");
      return;
    }

    // Tournament category validation
    if (!tournamentCategory) {
      setMessage("Please select a tournament category.");
      setMessageType("error");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("tournament_registrations")
      .insert([
        {
          player_name: playerName,
          date_of_birth: dateOfBirth,
          parent_name: parentName,
          mobile_number: mobileNumber,
          email: email,
          fide_id: fideId || null,
          chess_rating: chessRating
            ? Number(chessRating)
            : null,
          academy: academy,
          tournament_category: tournamentCategory,
        },
      ]);

    if (error) {
      console.error("Supabase error:", error);

      setMessage(
        "Registration failed. Please try again."
      );

      setMessageType("error");
      setLoading(false);

      return;
    }

    setMessage(
      "Tournament registration successful!"
    );

    setMessageType("success");

    form.reset();

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
          max={new Date().toISOString().split("T")[0]}
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
          pattern="[0-9]{10}"
          maxLength="10"
          inputMode="numeric"
          required
        />
      </div>


      {/* EMAIL */}

      <div className="form-group">
        <label htmlFor="email">
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter email address"
          required
        />
      </div>


      {/* FIDE ID */}

      <div className="form-group">
        <label htmlFor="fideId">
          FIDE ID <span>(Optional)</span>
        </label>

        <input
          id="fideId"
          name="fideId"
          type="text"
          placeholder="Enter FIDE ID"
        />
      </div>


      {/* CHESS RATING */}

      <div className="form-group">
        <label htmlFor="chessRating">
          Chess Rating <span>(Optional)</span>
        </label>

        <input
          id="chessRating"
          name="chessRating"
          type="number"
          placeholder="Enter chess rating"
          min="0"
        />
      </div>


      {/* ACADEMY */}

      <div className="form-group">
        <label htmlFor="academy">
          Academy
        </label>

        <input
          id="academy"
          name="academy"
          type="text"
          placeholder="Enter academy name"
          required
        />
      </div>


      {/* TOURNAMENT CATEGORY */}

      <div className="form-group">
        <label htmlFor="tournamentCategory">
          Tournament Category
        </label>

        <select
          id="tournamentCategory"
          name="tournamentCategory"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select tournament category
          </option>

          <option value="Under 7">
            Under 7
          </option>

          <option value="Under 9">
            Under 9
          </option>

          <option value="Under 11">
            Under 11
          </option>

          <option value="Under 13">
            Under 13
          </option>

          <option value="Under 15">
            Under 15
          </option>

          <option value="Open">
            Open
          </option>
        </select>
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