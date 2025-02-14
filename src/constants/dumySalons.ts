import { Salon } from "../interfaces/Salon";

export const dumsalons: Salon[] = [
  {
    salonId: 1,
    salonName: "Glamour Studio",
    location: "Los Angeles, CA", // Added a sample location
    description: "A top-tier salon offering luxury hair and beauty treatments.", // Sample description
    image: "/image/salon/image.png",
    ownerName: "Jessica Smith",
    contactEmail: "jessica@glamourstudio.com",
    contactMobile: "123-456-7890",
    bankAccount: "123456789",
    numberOfSystems: 5,
    pricePerSystem: 1000,
  },
  {
    salonId: 2,
    salonName: "Elite Salon",
    location: "New York, NY",
    description: "An exclusive salon known for elite hairstyling and grooming services.",
    image: "/image/salon/image.png",
    ownerName: "Michael Johnson",
    contactEmail: "michael@elitesalon.com",
    contactMobile: "987-654-3210",
    bankAccount: "987654321",
    numberOfSystems: 3,
    pricePerSystem: 1200,
  },
  {
    salonId: 3,
    salonName: "Luxury Hair",
    location: "Miami, FL",
    description: "Premium salon specializing in hair treatments and extensions.",
    image: "/image/salon/image.png",
    ownerName: "Emily Davis",
    contactEmail: "emily@luxuryhair.com",
    contactMobile: "555-666-7777",
    bankAccount: "555666777",
    numberOfSystems: 7,
    pricePerSystem: 950,
  },
  {
    salonId: 4,
    salonName: "Beauty Bliss",
    location: "Chicago, IL",
    description: "A serene and relaxing salon offering skincare and beauty services.",
    image: "/image/salon/image.png",
    ownerName: "Olivia Brown",
    contactEmail: "olivia@beautybliss.com",
    contactMobile: "222-333-4444",
    bankAccount: "222333444",
    numberOfSystems: 4,
    pricePerSystem: 1100,
  },
];
