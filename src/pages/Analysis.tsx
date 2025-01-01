import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { useForm } from "react-hook-form"

const Analysis = () => {
  const form = useForm()

  return (
    <div className="flex-1 py-12">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-4">Your Numerology Reading</h1>
            <p className="text-muted-foreground">Enter your details below to receive your personalized numerology analysis.</p>
          </div>

          <Form {...form}>
            <form className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name (as shown on birth certificate)</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        placeholder="Enter your full name"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Birth Date</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="date"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Reading</CardTitle>
                    <CardDescription>Perfect for beginners</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Life Path Number</li>
                      <li>✓ Expression Number</li>
                      <li>✓ Basic Interpretation</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Get Basic Reading - $29</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Premium Reading</CardTitle>
                    <CardDescription>Complete analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>✓ All Basic Features</li>
                      <li>✓ Soul Urge Number</li>
                      <li>✓ Personality Number</li>
                      <li>✓ Detailed Life Forecast</li>
                      <li>✓ Personal Consultation</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="default">Get Premium Reading - $99</Button>
                  </CardFooter>
                </Card>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Analysis