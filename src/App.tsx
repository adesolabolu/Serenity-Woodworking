/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Services } from "./pages/Services";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { ServiceAreas } from "./pages/ServiceAreas";
import { ServiceAreaDetail } from "./pages/ServiceAreaDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Portfolio />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="service-areas" element={<ServiceAreas />} />
          <Route path="service-areas/:cityId" element={<ServiceAreaDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
