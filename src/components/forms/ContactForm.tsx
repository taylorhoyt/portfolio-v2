import { useForm } from "react-hook-form";
import BasicButton from "@/components/buttons/BasicButton";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // TODO: send data to /api/contact onSubmit
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="bg-primary-background text-secondary-text flex flex-col gap-2 rounded-lg p-6">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col">
            <input
              {...register("firstName", { required: true })}
              placeholder="First name"
              className="border-primary-border rounded-lg border-2 p-2"
            />
            {errors.firstName && (
              <small className="text-expressive-red">
                First name is required.
              </small>
            )}
          </div>
          <div className="flex flex-col">
            <input
              {...register("lastName", { required: true })}
              placeholder="Last name"
              className="border-primary-border rounded-lg border-2 p-2"
            />
            {errors.lastName && (
              <small className="text-expressive-red">
                Last name is required.
              </small>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <input
            {...register("phoneNumber")}
            placeholder="Phone number"
            className="border-primary-border w-full rounded-lg border-2 p-2"
          />
          <input
            {...register("email")}
            placeholder="Email address"
            className="border-primary-border w-full rounded-lg border-2 p-2"
          />
        </div>

        <div className="flex flex-col">
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
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
          className="bg-expressive-amethyst text-off-white m-auto"
        >
          Send
        </BasicButton>
      </div>
    </form>
  );
};

export default ContactForm;
