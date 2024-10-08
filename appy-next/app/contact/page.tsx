import { copyConfig } from "@/app/copy/copy-config";
import PageIllustration from "@/components/page-illustration";

export const metadata = copyConfig.contact.metadata;

export default function Contact() {
  const { contact } = copyConfig;

  return (
    <>
      {/*  Page illustration */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 font-rose-hat-display mb-4">
                {contact.header.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {contact.header.subtitle}
              </p>
            </div>

            {/* Contact form */}
            <form className="max-w-xl mx-auto">
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                    htmlFor="first-name"
                  >
                    {contact.form.firstName.label}{" "}
                    <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    className="form-input w-full"
                    placeholder={contact.form.firstName.placeholder}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                    htmlFor="last-name"
                  >
                    {contact.form.lastName.label}{" "}
                    <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    className="form-input w-full"
                    placeholder={contact.form.lastName.placeholder}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                    htmlFor="company"
                  >
                    {contact.form.company.label}{" "}
                    <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="form-input w-full"
                    placeholder={contact.form.company.placeholder}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                    htmlFor="phone"
                  >
                    {contact.form.phone.label}{" "}
                    <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="form-input w-full"
                    placeholder={contact.form.phone.placeholder}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                    htmlFor="country"
                  >
                    {contact.form.country.label}{" "}
                    <span className="text-rose-600">*</span>
                  </label>
                  <select id="country" className="form-select w-full" required>
                    {contact.form.country.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <div className="flex justify-between items-center mb-1">
                    <label
                      className="block text-gray-800 dark:text-gray-300 text-sm font-medium"
                      htmlFor="message"
                    >
                      {contact.form.message.label}
                    </label>
                    <span className="text-sm text-gray-500">
                      {contact.form.message.optional}
                    </span>
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    className="form-textarea w-full"
                    placeholder={contact.form.message.placeholder}
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <div className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-3">
                    {contact.form.role.label}
                  </div>
                  {contact.form.role.options.map((option) => (
                    <label key={option} className="flex items-center mb-2">
                      <input
                        type="radio"
                        className="form-radio"
                        name="role"
                        defaultChecked
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-rose-500 hover:bg-rose-400 w-full flex items-center">
                    <span>{contact.form.submit.text}</span>
                    <svg
                      className="w-3 h-3 shrink-0 mt-px ml-2"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-current"
                        d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
