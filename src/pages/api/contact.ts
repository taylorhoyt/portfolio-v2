import type { NextApiRequest, NextApiResponse } from "next";
import { ContactRequest } from "@/types/contact";

type ResponseData = {
  message: string;
};

function validateEmail(email: string): boolean {
  // email validation is not perfect, but we can get close. Check out this reddit thread
  // and associated video for more info: https://www.reddit.com/r/programming/comments/1kubafk/so_you_think_you_can_validate_email_addresses_a/
  // TLDR - at best we can check that it isn't empty and includes an @, but the only true way to verify is to send a verification email.
  return email !== "" && email.includes("@");
}

function validatePhoneNumberFormat(phoneNumber: string): boolean {
  // this regex validates US phone numbers only
  // TODO: add support for international numbers - perhaps add a dropdown menu for international extension?
  const pattern: RegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  return pattern.test(phoneNumber);
}

function sanitizePhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(/\D/g, "");
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method === "POST") {
    if (req.body) {
      // request body validation
      if (!req.body.message) {
        res.status(400).json({ message: "Must include message" });
      } else if (!req.body.firstName || !req.body.lastName) {
        res.status(400).json({ message: "Must include full name" });
      } else if (!validateEmail(req.body.email ?? "")) {
        res
          .status(400)
          .json({ message: "Must include email address in a valid format" });
      } else if (
        !validatePhoneNumberFormat(req.body.phoneNumber.trim() ?? "")
      ) {
        res
          .status(400)
          .json({ message: "Must include phone number in a valid format" });
      } else {
        const requestObject: ContactRequest = {
          firstName: req.body.firstName.trim(),
          lastName: req.body.lastName.trim(),
          phoneNumber: sanitizePhoneNumber(req.body.phoneNumber),
          email: req.body.email.trim(),
          message: req.body.message.trim(),
        };

        // TODO: call API that will send the message to me
        res.status(200).json(requestObject);
      }
    } else {
      res.status(400).json({ message: "Malformed request" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
