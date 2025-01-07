import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";

const ExportButton = () => {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = async () => {
    try {
      setIsExporting(true);
      toast.info("Preparing your PDF...");

      // Get the content container (everything except footer)
      const contentElement = document.getElementById("portal-content");
      if (!contentElement) {
        throw new Error("Content element not found");
      }

      // Create canvas from the content
      const canvas = await html2canvas(contentElement, {
        scale: 2, // Higher quality
        useCORS: true, // Handle cross-origin images
        logging: false,
        windowWidth: contentElement.scrollWidth,
        windowHeight: contentElement.scrollHeight
      });

      // Initialize PDF
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height]
      });

      // Add the canvas as an image
      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        0,
        0,
        canvas.width,
        canvas.height
      );

      // Save the PDF
      pdf.save("numerology-reading.pdf");
      toast.success("PDF exported successfully!");
    } catch (error) {
      console.error("PDF export error:", error);
      toast.error("Failed to export PDF. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      onClick={exportToPDF}
      disabled={isExporting}
      className="fixed bottom-20 right-8 z-50 shadow-lg"
      size="lg"
    >
      <Download className="mr-2 h-4 w-4" />
      {isExporting ? "Exporting..." : "Export as PDF"}
    </Button>
  );
};

export default ExportButton;