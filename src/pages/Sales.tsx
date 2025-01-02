import { Routes, Route, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const SalesIntro = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 space-y-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
          Discover Your Life's Purpose Through Numerology
        </h1>
        <p className="text-xl text-muted-foreground">
          Unlock the hidden meanings behind your name and birth date with our personalized numerology reading.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-6 max-w-2xl"
      >
        <div className="grid gap-4 text-left">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">Personalized Analysis</h3>
              <p className="text-muted-foreground">
                Get insights based on your unique numerical vibrations
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">Life Path Guidance</h3>
              <p className="text-muted-foreground">
                Understand your life's purpose and potential
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">Detailed Report</h3>
              <p className="text-muted-foreground">
                Receive a comprehensive analysis of your numerological profile
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Button
          size="lg"
          className="text-lg px-8"
          onClick={() => navigate("info")}
        >
          Start Your Reading
        </Button>
      </motion.div>
    </div>
  )
}

const Sales = () => {
  return (
    <div className="flex-1 bg-background">
      <Routes>
        <Route index element={<SalesIntro />} />
        <Route path="info" element={<div>Info collection form will go here</div>} />
        <Route path="plans" element={<div>Plan selection will go here</div>} />
      </Routes>
    </div>
  )
}

export default Sales