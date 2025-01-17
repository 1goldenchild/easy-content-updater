import React from 'react';
import { Card } from "@/components/ui/card";
import UserForm from "@/components/numerology/UserForm";
import NumerologyResults from "@/components/numerology/NumerologyResults";

const Numerology = () => {
  const [results, setResults] = React.useState(null);

  return (
    <div className="min-h-screen p-8 bg-background">
      <Card className="max-w-4xl mx-auto p-6">
        {!results ? (
          <UserForm onSubmit={setResults} />
        ) : (
          <NumerologyResults results={results} />
        )}
      </Card>
    </div>
  );
};

export default Numerology;