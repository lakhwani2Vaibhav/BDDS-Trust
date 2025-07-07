import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Stethoscope, BookOpen, Briefcase, GraduationCap } from "lucide-react";

const initiatives = [
  {
    title: "Health",
    icon: Stethoscope,
    description: "Our holistic rehab program includes Medical Support, Therapy, Capacity Building, and Awareness Drives for those with disabilities and critical needs.",
    image: "https://placehold.co/600x400.png",
    aiHint: "medical camp"
  },
  {
    title: "Education",
    icon: BookOpen,
    description: "We believe education builds confidence and helps every child realize their dreams. We offer inclusive learning environments and academic resources.",
    image: "https://placehold.co/600x400.png",
    aiHint: "children classroom"
  },
  {
    title: "Livelihood",
    icon: Briefcase,
    description: "Empowering youth with disabilities by offering skill development training and supporting small business initiatives for sustainable income.",
    image: "https://placehold.co/600x400.png",
    aiHint: "skill training"
  },
  {
    title: "Higher Education",
    icon: GraduationCap,
    description: "We help students with disabilities pursue higher education through scholarships, awareness campaigns, and employment-readiness programs.",
    image: "https://placehold.co/600x400.png",
    aiHint: "students studying"
  }
];

export default function Initiatives() {
  return (
    <section id="initiatives" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Initiatives</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Babu D.D. Singh Charitable Trust is committed to transforming lives through inclusive development. Our work focuses on the following key areas:
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((item) => (
            <Card key={item.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" data-ai-hint={item.aiHint} />
              </div>
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
