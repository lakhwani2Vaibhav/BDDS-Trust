import { MapPin, Phone, Mail } from "lucide-react";

const contactInfo = [
    {
        icon: MapPin,
        title: "Registered Address",
        details: [
            "Village Baghaw, Post Sahatwar, Tehsil Bashadih,",
            "Ballia, Uttar Pradesh, 277211, India"
        ]
    },
    {
        icon: MapPin,
        title: "Branch Address",
        details: [
            "241/3 Chandan Nagar Colony, Karaundi,",
            "Varanasi, Uttar Pradesh, 221005, India"
        ]
    },
    {
        icon: Phone,
        title: "Phone",
        details: ["+91-8528806881"]
    },
    {
        icon: Mail,
        title: "Email",
        details: ["babuddsinghcharitabletrust@gmail.com"]
    }
];

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 md:px-6">
      <div className="text-center opacity-0 animate-fade-in-up">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We'd love to hear from you. Whether you have a question, a suggestion, or want to get involved, please don't hesitate to reach out.
        </p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md border opacity-0 animate-fade-in-up transition-transform duration-300 hover:-translate-y-2" style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
            <div className="bg-primary/20 p-4 rounded-full mb-4">
               <item.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-xl font-semibold mb-2">{item.title}</h3>
            <div className="text-muted-foreground">
                {item.details.map((line, i) => (
                    <p key={i}>{line}</p>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
