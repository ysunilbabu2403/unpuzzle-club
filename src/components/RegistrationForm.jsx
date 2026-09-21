import { useState } from "react";
import { supabase } from "../lib/supabase";

function RegistrationForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setMessageType("");

    const form = event.target;

    const studentName = form.studentName.value.trim();
    const dateOfBirth = form.dob.value;
    const parentName = form.parentName.value.trim();
    const mobileNumber = form.mobile.value.trim();

    const academy =
      form.academy.value === "Other"
        ? form.otherAcademy.value.trim()
        : form.academy.value;

    // Student name validation
    if (studentName.length < 2) {
      setMessage("Please enter a valid student name.");
      setMessageType("error");
      return;
    }

    // Parent name validation
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

    // DOB validation
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

    // Academy validation
    if (!academy) {
      setMessage("Please select or enter an apartment or academy.");
      setMessageType("error");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("students")
      .insert([
        {
          student_name: studentName,
          date_of_birth: dateOfBirth,
          parent_name: parentName,
          mobile_number: mobileNumber,
          academy: academy,
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

    // Success
    setMessage(
      "Registration successful! Thank you for registering."
    );

    setMessageType("success");

    form.reset();

    const otherInput =
      document.getElementById("other-academy");

    if (otherInput) {
      otherInput.style.display = "none";
      otherInput.required = false;
    }

    setLoading(false);
  };

  return (
    <form
      className="registration-form"
      onSubmit={handleSubmit}
    >
      {/* STUDENT NAME */}

      <div className="form-group">
        <label htmlFor="studentName">
          Student Name
        </label>

        <input
          id="studentName"
          name="studentName"
          type="text"
          placeholder="Enter student name"
          minLength="2"
          required
        />
      </div>


      {/* DATE OF BIRTH */}

      <div className="form-group">
        <label htmlFor="dob">
          Date of Birth
        </label>

        <input
          id="dob"
          name="dob"
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
        <label htmlFor="mobile">
          Mobile Number
        </label>

        <input
          id="mobile"
          name="mobile"
          type="tel"
          placeholder="Enter 10-digit mobile number"
          pattern="[0-9]{10}"
          maxLength="10"
          inputMode="numeric"
          required
        />
      </div>


      {/* APARTMENT / ACADEMY */}

      <div className="form-group">
        <label htmlFor="academy">
          Apartment or Academy
        </label>

        <select
          id="academy"
          name="academy"
          required
          defaultValue=""
          onChange={(e) => {
            const otherInput =
              document.getElementById("other-academy");

            if (e.target.value === "Other") {
              otherInput.style.display = "block";
              otherInput.required = true;
            } else {
              otherInput.style.display = "none";
              otherInput.required = false;
              otherInput.value = "";
            }
          }}
        >
          <option value="" disabled>
            Select apartment or academy
          </option>

          <option value="Adarsh Palm Retreat">
            Adarsh Palm Retreat
          </option>

          <option value="Academy Cambridge Montessori">
            Academy Cambridge Montessori
          </option>

          <option value="Academy Doddakannlli">
            Academy Doddakannlli
          </option>

          <option value="Little Elly School, Banaswadi">
            Little Elly School, Banaswadi Academy
          </option>

          <option value="Ahad Ephoria">
            Ahad Ephoria
          </option>

          <option value="Bhuvana Greens">
            Bhuvana Greens
          </option>

          <option value="Bren Celestia">
            Bren Celestia
          </option>

          <option value="Confident Leo">
            Confident Leo
          </option>

          <option value="Divyashree Elan">
            Divyashree Elan
          </option>

          <option value="Ittina Souparnika">
            Ittina Souparnika
          </option>

          <option value="Kumari Amaranthine Apartment">
            Kumari Amaranthine Apartment
          </option>

          <option value="Nimritha Kethana">
            Nimritha Kethana
          </option>

          <option value="RBD Still waters">
            RBD Still waters
          </option>

          <option value="SJR Palazza City">
            SJR Palazza City
          </option>

          <option value="Sai Krishna Elite">
            Sai Krishna Elite
          </option>

          <option value="Saket Calipolis">
            Saket Calipolis
          </option>

          <option value="Satva Signet">
            Satva Signet
          </option>

          <option value="Uber Verdent">
            Uber Verdent
          </option>

          <option value="VRR Fortuna">
            VRR Fortuna
          </option>

          <option value="Prestige city">
            Prestige city
          </option>

          <option value="Orchid Lake View Bellendur">
            Orchid Lake View Bellendur
          </option>

          <option value="Tru Wind Chimes">
            Tru Wind Chimes
          </option>

          <option value="Other">
            Other
          </option>
        </select>

        <input
          id="other-academy"
          name="otherAcademy"
          type="text"
          placeholder="Enter your apartment or academy"
          style={{ display: "none" }}
        />
      </div>


      {/* REGISTER BUTTON */}

      <button
        type="submit"
        className="register-button"
        disabled={loading}
      >
        {loading ? "Registering..." : "Register"}
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

export default RegistrationForm;