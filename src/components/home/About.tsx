import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle } from "lucide-react";

const trustees = [
    { name: "Mr. Sanjay Singh", role: "Founder" },
    { name: "Mr. Subodh Jaiswal", role: "Co-Founder" },
    { name: "Mr. Kaushal Kumar Dubey", role: "Co-Founder" },
    { name: "Smt. Neelam Singh", role: "Chairman" },
    { name: "Smt. Akriti Singh", role: "Vice Chairman" },
    { name: "Mr. Amit Kumar Singh", role: "Secretary" },
];

const focusAreas = [
    "Holistic Rehabilitation",
    "Inclusive Education",
    "Skill Development & Vocational Training",
    "Community Sensitization",
];

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 md:px-6">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Our Mission, Our Vision
        </h2>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-5 md:gap-16">
        <div className="space-y-4 md:col-span-3">
          <p className="text-lg text-muted-foreground">
            Babu D.D. Singh Charitable Trust is dedicated to enabling differently abled and marginalized children and youth to receive comprehensive rehabilitation, education, and vocational training. Our mission is to empower these individuals so they can take care of their social, physical, and spiritual needs, and become fully integrated into society.
          </p>
          <p className="text-lg text-muted-foreground">
            We envision a world that ensures the inclusion of differently abled and marginalized children and youth into mainstream society. Our aim is to create an environment where they feel welcome, supported, and empowered.
          </p>
        </div>
        <div className="md:col-span-2">
            <h3 className="font-headline text-xl font-semibold mb-4">Our Core Focus Areas</h3>
            <ul className="space-y-3">
                {focusAreas.map((area) => (
                    <li key={area} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{area}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="font-headline text-center text-2xl font-bold sm:text-3xl">
          Meet Our Trustees
        </h3>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {trustees.map((trustee) => (
            <div key={trustee.name} className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 border-2 border-primary">
                <AvatarImage src={`https://placehold.co/100x100.png`} alt={trustee.name} />
                <AvatarFallback>{trustee.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <p className="mt-2 font-semibold">{trustee.name}</p>
              <p className="text-sm text-muted-foreground">{trustee.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
