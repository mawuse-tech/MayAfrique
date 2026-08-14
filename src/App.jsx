import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import RootLayout from "./components/RootLayout";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
// import CollectionPage from "./pages/CollectionPage";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />

      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contacts" element={<ContactPage />} />
          {/* <Route path="collection" element={<CollectionPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;