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

      // Create canvas from the content with improved settings
      const canvas = await html2canvas(contentElement, {
        scale: 2, // Higher quality
        useCORS: true, // Handle cross-origin images
        logging: false,
        windowWidth: contentElement.scrollWidth,
        windowHeight: contentElement.scrollHeight,
        allowTaint: true,
        foreignObjectRendering: true,
        removeContainer: true,
        backgroundColor: "#1A1F2C", // Match the background color
        onclone: (clonedDoc) => {
          // Ensure all text elements are visible
          const elements = clonedDoc.getElementsByTagName('*');
          for (let i = 0; i < elements.length; i++) {
            const el = elements[i];
            const style = window.getComputedStyle(el);
            if (style.position === 'fixed') {
              (el as HTMLElement).style.position = 'absolute';
            }
            // Ensure text is visible
            if (style.backgroundClip === 'text' || style.webkitBackgroundClip === 'text') {
              (el as HTMLElement).style.color = window.getComputedStyle(el).backgroundImage;
              (el as HTMLElement).style.backgroundClip = 'unset';
              (el as HTMLElement).style.webkitBackgroundClip = 'unset';
              (el as HTMLElement).style.backgroundImage = 'none';
            }
          }
        }
      });

      // Calculate dimensions to maintain aspect ratio
      const imgWidth = 595.28; // A4 width in points (72 dpi)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Initialize PDF with A4 size
      const pdf = new jsPDF({
        orientation: imgHeight > imgWidth ? "portrait" : "landscape",
        unit: "pt",
        format: "a4"
      });

      // Add the canvas as an image with proper scaling
      pdf.addImage(
        canvas.toDataURL("image/jpeg", 1.0),
        "JPEG",
        0,
        0,
        imgWidth,
        imgHeight,
        undefined,
        'FAST'
      );

      // If content is longer than one page, add more pages
      let heightLeft = imgHeight;
      let position = 0;
      const pageHeight = pdf.internal.pageSize.getHeight();

      while (heightLeft >= pageHeight) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(
          canvas.toDataURL("image/jpeg", 1.0),
          "JPEG",
          0,
          position,
          imgWidth,
          imgHeight,
          undefined,
          'FAST'
        );
        heightLeft -= pageHeight;
      }

      // Save the PDF with a timestamp
      const timestamp = new Date().toISOString().split('T')[0];
      pdf.save(`numerology-reading-${timestamp}.pdf`);
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
      className="fixed bottom-20 right-8 z-50 shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
      size="lg"
    >
      <Download className="mr-2 h-4 w-4" />
      {isExporting ? "Exporting..." : "Export as PDF"}
    </Button>
  );
};

export default ExportButton;