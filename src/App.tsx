
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create a custom event to trigger Devfolio button initialization
const triggerDevfolioInit = () => {
  setTimeout(() => {
    if (window.devfolio) {
      console.log("Triggering Devfolio init from App component");
      window.devfolio.init();
    }
  }, 2000); // Wait for DOM to be fully rendered
};

const queryClient = new QueryClient();

const App = () => {
  // Trigger Devfolio initialization when App loads
  React.useEffect(() => {
    triggerDevfolioInit();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
