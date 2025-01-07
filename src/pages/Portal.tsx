import { Routes, Route } from "react-router-dom"
import CollectInfo from "./CollectInfo"

const Portal = () => {
  return (
    <div className="flex-1 bg-background">
      <Routes>
        <Route index element={
          <div>
            <div id="info">
              <CollectInfo />
            </div>
            <div id="analysis" className="min-h-screen">
              <div className="container py-24 space-y-8">
                <h2 className="text-3xl font-bold text-center">
                  Analyzing Your Numbers
                </h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                  Our advanced numerology system is processing your information to reveal deep insights about your life path, destiny, and personal characteristics.
                </p>
                <div className="flex justify-center">
                  <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                </div>
              </div>
            </div>
            <div id="results" className="min-h-screen">
              <div className="container py-24 space-y-12">
                <h2 className="text-3xl font-bold text-center">
                  Your Numerology Results
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="p-6 rounded-lg border border-purple-500/20 bg-card">
                    <h3 className="text-xl font-semibold mb-4">Life Path Number</h3>
                    <p className="text-muted-foreground">
                      Your life path number reveals your life's purpose and the path you're destined to follow.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg border border-purple-500/20 bg-card">
                    <h3 className="text-xl font-semibold mb-4">Expression Number</h3>
                    <p className="text-muted-foreground">
                      This number reveals your natural abilities and the talents you possess to achieve your destiny.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg border border-purple-500/20 bg-card">
                    <h3 className="text-xl font-semibold mb-4">Soul Urge Number</h3>
                    <p className="text-muted-foreground">
                      Discover your inner desires, what motivates you, and what your heart truly yearns for.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </div>
  )
}

export default Portal