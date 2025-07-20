import type { NextApiRequest, NextApiResponse } from "next";
import { ContactRequest } from "@/types/contact";
import {
  EMAIL_REGEX,
  NON_DIGIT_REGEX,
  PHONE_NUMBER_REGEX,
} from "@/util/patterns";

type ResponseData = {
  message: string;
};

function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

function validatePhoneNumberFormat(phoneNumber: string): boolean {
  // this regex validates US phone numbers only
  return PHONE_NUMBER_REGEX.test(phoneNumber);
}

function sanitizePhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(NON_DIGIT_REGEX, "");
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
        res.status(200).json({ message: requestObject.message });
      }
    } else {
      res.status(400).json({ message: "Malformed request" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
