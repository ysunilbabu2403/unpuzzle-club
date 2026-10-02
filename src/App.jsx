import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentRegistration from "./pages/StudentRegistration";
import AcademyHome from "./pages/AcademyHome";
import TournamentRegistration from "./pages/TournamentRegistration";
import Coaches from "./pages/Coaches";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<AcademyHome />}
        />

        <Route
          path="/student-registration"
          element={<StudentRegistration />}
        />
        <Route
          path="/tournament-registration"
          element={<TournamentRegistration />}
        />

        <Route
          path="/coaches"
          element={<Coaches />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;