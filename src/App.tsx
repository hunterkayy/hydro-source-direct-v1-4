
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import WaterQuality from "./pages/WaterQuality";
import Contact from "./pages/Contact";
import ProductFinder from "./pages/ProductFinder";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import ServiceWaterTesting from "./pages/ServiceWaterTesting";
import ServiceInstallation from "./pages/ServiceInstallation";
import ServiceAdvanced from "./pages/ServiceAdvanced";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/why-water-quality" element={<WaterQuality />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/find-solution" element={<ProductFinder />} />
          <Route path="/services/water-testing" element={<ServiceWaterTesting />} />
          <Route path="/services/installation" element={<ServiceInstallation />} />
          <Route path="/services/service" element={<ServiceAdvanced />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
