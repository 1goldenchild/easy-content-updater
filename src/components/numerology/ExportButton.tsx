import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
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
  dateOfBirth,
}: ExportButtonProps) => {
  const generateHTML = () => {
    const formattedDate = new Date().toLocaleDateString();
    const birthDate = new Date(dateOfBirth).toLocaleDateString();

    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your Numerology Analysis</title>
          <style>
            body {
              font-family: system-ui, -apple-system, sans-serif;
              line-height: 1.5;
              max-width: 800px;
              margin: 0 auto;
              padding: 2rem;
              background: #1a1a2e;
              color: #fff;
            }
            .header {
              background: linear-gradient(to right, #8B5CF6, #D946EF);
              padding: 2rem;
              border-radius: 1rem;
              margin-bottom: 2rem;
              text-align: center;
            }
            .date {
              color: rgba(255,255,255,0.7);
              font-size: 0.875rem;
              margin-bottom: 1rem;
            }
            .section {
              background: rgba(255,255,255,0.1);
              border-radius: 1rem;
              padding: 1.5rem;
              margin-bottom: 1.5rem;
            }
            .grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 1rem;
              margin-top: 1.5rem;
            }
            .number-card {
              background: rgba(139, 92, 246, 0.1);
              border: 1px solid rgba(139, 92, 246, 0.2);
              padding: 1rem;
              border-radius: 0.5rem;
            }
            .number-value {
              font-size: 2rem;
              font-weight: bold;
              background: linear-gradient(to right, #8B5CF6, #D946EF);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 0.5rem;
            }
            .label {
              color: rgba(255,255,255,0.7);
              font-size: 0.875rem;
            }
            @media print {
              body {
                background: white;
                color: black;
              }
              .header {
                background: #f3f4f6;
                color: black;
              }
              .section {
                background: #f9fafb;
                border: 1px solid #e5e7eb;
              }
              .number-card {
                background: #f3f4f6;
                border: 1px solid #e5e7eb;
              }
              .number-value {
                color: #8B5CF6;
                -webkit-text-fill-color: initial;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="date">Generated on: ${formattedDate}</div>
            <h1>Your Numerology Analysis</h1>
          </div>

          <div class="section">
            <div class="label">Date of Birth</div>
            <div class="number-value">${birthDate}</div>
          </div>

          <div class="grid">
            <div class="number-card">
              <div class="label">Life Path Number</div>
              <div class="number-value">${lifePath}</div>
            </div>

            <div class="number-card">
              <div class="label">Partial Energy</div>
              <div class="number-value">${partialEnergy}</div>
            </div>

            <div class="number-card">
              <div class="label">Secret Number</div>
              <div class="number-value">${secretNumber}</div>
            </div>

            <div class="number-card">
              <div class="label">Chinese Zodiac</div>
              <div class="number-value">${chineseZodiac}</div>
            </div>
          </div>
        </body>
      </html>
    `;

    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(html);
      newWindow.document.close();
      toast.success("Analysis opened in new window - You can now print or save it");
    } else {
      toast.error("Please allow pop-ups to view your analysis");
    }
  };

  const exportToCSV = () => {
    const data = [
      ["Date Generated", new Date().toLocaleDateString()],
      ["Date of Birth", new Date(dateOfBirth).toLocaleDateString()],
      ["Life Path Number", lifePath],
      ["Partial Energy", partialEnergy],
      ["Secret Number", secretNumber],
      ["Chinese Zodiac", chineseZodiac],
    ];

    const csvContent = data.map(row => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `numerology-analysis-${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("CSV file downloaded successfully");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        onClick={generateHTML}
        className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
      >
        <Download className="w-4 h-4" />
        View Full Report
      </Button>
      <Button
        onClick={exportToCSV}
        variant="outline"
        className="border-purple-500/20 hover:bg-purple-500/10"
      >
        Download as CSV
      </Button>
    </div>
  );
};

export default ExportButton;