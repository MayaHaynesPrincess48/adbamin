import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Img,
  Button,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  name,
  email,
  subject,
  message,
}) => (
  <Html>
    <Head />
    <Preview>
      You have received a new message via the contact form on Abdamin’s website.
    </Preview>
    <Tailwind>
      <Body className="bg-[#f7f9fc] font-sans">
        <Container className="mx-auto my-8 max-w-[465px] rounded-xl border border-[#eaeaea] bg-white p-6 shadow-lg">
          <Section className="text-center">
            <Img
              src="https://res.cloudinary.com/dy55vopm2/image/upload/v1727982743/logo_kx3oo6.png"
              alt="Abdamin Logo"
              width="150"
              height="50"
              className="mx-auto"
            />
          </Section>

          <Heading className="my-6 text-center text-[24px] font-bold text-[#012966]">
            You Have a New Message from the Contact Form
          </Heading>

          <Hr className="my-6 border-dashed border-[#eaeaea]" />

          <Section className="rounded-lg bg-[#f1f5fc] p-4">
            <Text className="text-[16px] leading-[24px] text-[#012966]">
              <span className="font-semibold">From:</span> {name}
            </Text>
            <Text className="mt-2 text-[16px] leading-[24px] text-[#012966]">
              <span className="font-semibold">Email:</span>{" "}
              <span className="text-[#D02A10]">{email}</span>
            </Text>
            <Text className="mt-2 text-[16px] leading-[24px] text-[#012966]">
              <span className="font-semibold">Subject:</span>{" "}
              <span className="text-[#D02A10]">{subject}</span>
            </Text>
          </Section>

          <Section className="my-4">
            <Text className="mb-2 text-[16px] font-semibold leading-[24px] text-[#012966]">
              Message:
            </Text>
            <Text className="rounded-lg border border-[#012966] bg-[#f9fbfd] p-4 italic text-gray-800 shadow">
              "{message}"
            </Text>
          </Section>

          <Section className="text-center">
            <Button
              className="rounded bg-[#012966] px-6 py-3 text-center text-[14px] font-bold text-white transition hover:bg-[#b0220b]"
              href={`mailto:${email}`}
            >
              Reply to {name}
            </Button>
          </Section>

          <Section className="mt-2 text-center text-[10px] text-gray-600">
            <Text>
              Abdamin International Limited
              <br />
              36, Bank Road, Bekaji, PMB 2106, Jimeta, Adamawa State
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ContactFormEmail;
