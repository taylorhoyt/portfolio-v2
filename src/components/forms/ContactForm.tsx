import { useForm } from "react-hook-form";
import BasicButton from "@/components/buttons/BasicButton";
import { ContactRequest } from "@/types/contact";
import {
  EMAIL_REGEX,
  LETTERS_ONLY_REGEX,
  PHONE_NUMBER_REGEX,
} from "@/util/patterns";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactRequest>();

  const onSubmit = async (data: ContactRequest) => {
    console.log(data);
    // TODO: send data to /api/contact onSubmit
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <div className="bg-primary-background text-secondary-text flex flex-col gap-0.5 rounded-lg p-6">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="pb-0.5 pl-1">
              First Name
            </label>
            <input
              id="firstName"
              {...register("firstName", {
                required: true,
                pattern: LETTERS_ONLY_REGEX,
                maxLength: 35,
              })}
              aria-invalid={errors.firstName ? "true" : "false"}
              placeholder="Gavin"
              className="border-primary-border rounded-lg border-2 p-2"
            />
            {errors.firstName?.type === "pattern" ? (
              <small className="text-expressive-red">
                Please enter a valid name.
              </small>
            ) : errors.firstName?.type === "maxLength" ? (
              <small className="text-expressive-red">
                First name is too long.
              </small>
            ) : (
              errors.firstName?.type === "required" && (
                <small className="text-expressive-red">
                  First name is required.
                </small>
              )
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="pb-0.5 pl-1">
              Last Name
            </label>
            <input
              id="lastName"
              {...register("lastName", {
                required: true,
                pattern: LETTERS_ONLY_REGEX,
                maxLength: 35,
              })}
              aria-invalid={errors.lastName ? "true" : "false"}
              placeholder="Belson"
              className="border-primary-border rounded-lg border-2 p-2"
            />
            {errors.lastName?.type === "pattern" ? (
              <small className="text-expressive-red">
                Please enter a valid name.
              </small>
            ) : errors.lastName?.type === "maxLength" ? (
              <small className="text-expressive-red">
                Last name is too long.
              </small>
            ) : (
              errors.lastName?.type === "required" && (
                <small className="text-expressive-red">
                  Last name is required.
                </small>
              )
            )}
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="pb-0.5 pl-1">
              Phone number (US only)
            </label>
            <input
              id="phoneNumber"
              type="tel"
              {...register("phoneNumber", {
                required: true,
                pattern: PHONE_NUMBER_REGEX,
              })}
              aria-invalid={errors.phoneNumber ? "true" : "false"}
              placeholder="(555) 555-0100"
              className="border-primary-border rounded-lg border-2 p-2"
            />
            {errors.phoneNumber?.type === "pattern" ? (
              <small className="text-expressive-red">
                Please enter a valid US phone number.
              </small>
            ) : (
              errors.phoneNumber?.type === "required" && (
                <small className="text-expressive-red">
                  Phone number is required.
                </small>
              )
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="pb-0.5 pl-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: true,
                pattern: EMAIL_REGEX,
              })}
              aria-invalid={errors.email ? "true" : "false"}
              placeholder="gavin.belson@hooli.com"
              className="border-primary-border rounded-lg border-2 p-2"
            />
            {errors.email?.type === "pattern" ? (
              <small className="text-expressive-red">
                Please enter a valid email address.
              </small>
            ) : (
              errors.email?.type === "required" && (
                <small className="text-expressive-red">
                  Email address is required.
                </small>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="pb-0.5 pl-1">
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            aria-invalid={errors.message ? "true" : "false"}
            placeholder="Start typing..."
            className="border-primary-border w-full rounded-lg border-2 p-2"
          ></textarea>
          {errors.message && (
            <small className="text-expressive-red">
              Please include a message
            </small>
          )}
        </div>

        <BasicButton
          type="submit"
          className="bg-expressive-amethyst text-off-white m-auto mt-4"
        >
          Send Message
        </BasicButton>
      </div>
    </form>
  );
};

export default ContactForm;
