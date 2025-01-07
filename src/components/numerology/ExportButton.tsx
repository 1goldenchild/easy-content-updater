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
        logging: true, // Enable logging for debugging
        backgroundColor: null, // Transparent background
        onclone: (clonedDoc) => {
          // Process all elements to ensure visibility
          const elements = clonedDoc.getElementsByTagName('*');
          for (let i = 0; i < elements.length; i++) {
            const el = elements[i] as HTMLElement;
            const style = window.getComputedStyle(el);
            
            // Handle gradient text
            if (style.backgroundClip === 'text' || style.webkitBackgroundClip === 'text') {
              if (style.backgroundImage.includes('gradient')) {
                el.style.color = '#8B5CF6'; // Use a solid color instead of gradient
              }
              el.style.backgroundClip = 'unset';
              el.style.webkitBackgroundClip = 'unset';
              el.style.backgroundImage = 'none';
            }

            // Ensure text contrast
            if (style.color === 'rgba(0, 0, 0, 0)' || style.color === 'transparent') {
              el.style.color = '#FFFFFF';
            }

            // Convert semi-transparent whites to solid white
            if (style.color.includes('rgba(255, 255, 255,')) {
              el.style.color = '#FFFFFF';
            }

            // Handle fixed positioning
            if (style.position === 'fixed') {
              el.style.position = 'absolute';
            }
          }

          // Set background color for the content
          clonedDoc.body.style.backgroundColor = '#1a1f2c';
          contentElement.style.backgroundColor = '#1a1f2c';
        }
      });

      console.log("Canvas created with dimensions:", canvas.width, "x", canvas.height);

      // Calculate dimensions to maintain aspect ratio
      const imgWidth = 595.28; // A4 width in points (72 dpi)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Initialize PDF with A4 size
      const pdf = new jsPDF({
        orientation: imgHeight > imgWidth ? "portrait" : "landscape",
        unit: "pt",
        format: "a4"
      });

      // Add the canvas as an image
      pdf.addImage(
        canvas.toDataURL("image/png", 1.0),
        "PNG",
        0,
        0,
        imgWidth,
        imgHeight,
        undefined,
        'FAST'
      );

      // Handle multiple pages if content is longer
      let heightLeft = imgHeight;
      let position = 0;
      const pageHeight = pdf.internal.pageSize.getHeight();

      while (heightLeft >= pageHeight) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(
          canvas.toDataURL("image/png", 1.0),
          "PNG",
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