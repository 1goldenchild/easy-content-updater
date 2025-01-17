import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ExportButtonProps {
  lifePath: number;
  partialEnergy: number;
  secretNumber: number;
  chineseZodiac: string;
  dateOfBirth: Date;
}

const ExportButton = ({ 
  lifePath, 
  partialEnergy, 
  secretNumber, 
  chineseZodiac,
  dateOfBirth 
}: ExportButtonProps) => {
  const exportToHTML = () => {
    try {
      // Create a new window with styled content
      const newWindow = window.open('', '_blank');
      if (!newWindow) {
        toast.error("Please allow pop-ups to view your report");
        return;
      }

      // Get all the content from the page
      const content = document.getElementById('portal-content');
      if (!content) {
        toast.error("Could not generate report");
        return;
      }

      // Write the HTML content
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Your Numerology Analysis</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                margin: 40px;
                color: #333;
              }
              h1, h2, h3 {
                color: #2d1b69;
                margin-top: 20px;
              }
              .section {
                margin-bottom: 30px;
                padding: 20px;
                background: #f8f9fa;
                border-radius: 8px;
              }
              .header {
                background: #2d1b69;
                color: white;
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 30px;
              }
              @media print {
                body {
                  margin: 20px;
                }
                .section {
                  break-inside: avoid;
                }
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Your Numerology Analysis</h1>
              <p>Generated on: ${new Date().toLocaleDateString()}</p>
            </div>
            ${content.innerHTML}
          </body>
        </html>
      `);

      // Finish writing and focus the new window
      newWindow.document.close();
      newWindow.focus();
      toast.success("Report generated successfully! You can now print or save it.");
    } catch (error) {
      console.error("Error generating HTML report:", error);
      toast.error("Failed to generate report");
    }
  };

  const exportToCSV = () => {
    try {
      // Prepare the data
      const data = [
        ['Category', 'Value'],
        ['Life Path Number', lifePath],
        ['Partial Energy', partialEnergy],
        ['Secret Number', secretNumber],
        ['Chinese Zodiac', chineseZodiac],
        ['Date of Birth', dateOfBirth.toLocaleDateString()],
      ];

      // Convert to CSV format
      const csvContent = data.map(row => row.join(',')).join('\n');

      // Create blob and download
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      
      link.setAttribute('href', url);
      link.setAttribute('download', 'numerology-analysis.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success("CSV file downloaded successfully!");
    } catch (error) {
      console.error("Error generating CSV:", error);
      toast.error("Failed to generate CSV file");
    }
  };

  return (
    <div className="fixed bottom-8 right-8 flex gap-2">
      <Button
        onClick={exportToHTML}
        className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
      >
        <Download className="w-4 h-4" />
        Export as HTML
      </Button>
      
      <Button
        onClick={exportToCSV}
        className="bg-pink-600 hover:bg-pink-700 text-white flex items-center gap-2"
      >
        <Download className="w-4 h-4" />
        Export as CSV
      </Button>
    </div>
  );
};

export default ExportButton;