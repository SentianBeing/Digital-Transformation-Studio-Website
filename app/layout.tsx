import type { Metadata } from "next";
import "./globals.css";
import MaintenanceBanner from "../components/MaintenanceBanner";

export const metadata: Metadata = {
    title: "DiveGrid | Software Engineering & Consulting Company in Kerala",
    description: "DiveGrid is a premier software engineering & consulting company in Kerala specializing in mobile app development, custom software solutions, and digital transformation.",
    keywords: ["DiveGrid", "DiveGrid software", "DiveGrid technology", "software engineering company in Kerala", "consulting company", "mobile app development company in Kerala", "software development company in Kerala", "custom software development Kerala"],
    openGraph: {
        title: "DiveGrid | Software Engineering & Consulting Company in Kerala",
        description: "DiveGrid is a premier software engineering & consulting company in Kerala specializing in mobile app development, custom software solutions, and digital transformation.",
        url: "https://divegrid.in",
        siteName: "DiveGrid",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "DiveGrid | Software Engineering & Consulting Company in Kerala",
        description: "DiveGrid is a premier software engineering & consulting company in Kerala specializing in mobile app development, custom software solutions, and digital transformation.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://divegrid.in",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareHouse",
        "name": "DiveGrid",
        "url": "https://divegrid.in",
        "logo": "https://res.cloudinary.com/der2xk0cv/image/upload/v1768050854/divegridlogo_huvrkh.png",
        "description": "DiveGrid is a premier software engineering & consulting company in Kerala specializing in mobile app development, custom software solutions, and digital transformation.",
        "areaServed": {
            "@type": "State",
            "name": "Kerala"
        },
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
        },
        "knowsAbout": [
            "Mobile App Development",
            "Software Engineering",
            "Digital Transformation",
            "Web Development",
            "UI/UX Design"
        ]
    };

    return (
        <html lang="en">
            <head>
                <script src="https://cdn.tailwindcss.com"></script>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="noise">
                {children}
                <MaintenanceBanner />
            </body>
        </html>
    );
}
