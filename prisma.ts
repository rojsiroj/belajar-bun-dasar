import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const contact = await prisma.contact.create({
  data: {
    name: "Muhamad Sirojudin",
    email: "muhamad@example.com",
    phone: "889898989",
  },
});

console.info(contact);
