import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Landing,
  Register,
  Error,
  ProtectedRoute,
  SharedLayout,
  Example1,
  Example2,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Example1 />} />
          <Route path="example2" element={<Example2 />}></Route>
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
