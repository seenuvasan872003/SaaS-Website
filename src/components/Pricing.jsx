import "react";
import { IoMdCheckmark } from "react-icons/io";

const tiers = [
  {
    name: "Free",
    id: "tier-free",
    href: "#",
    priceMonthly: "$0",
    description: "Basic features for individuals.",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
    height: "h-[508px]", 
    position: "lg:row-start-1 lg:row-span-1",
    featured: false,
    button: false

  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "#",
    priceMonthly: "$9",
    description: "Best for small teams.",
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
    height: "h-[603px]", 
    position: "lg:row-end-2 lg:row-span-2",
    featured: true,
    button: true

  },
  {
    name: "Business",
    id: "tier-business",
    href: "#",
    priceMonthly: "$19",
    description: "Advanced features for businesses.",
    features: [
      "Up to 100 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
    height: "h-[728px]", 
    position: "lg:row-end-2 lg:row-span-3",
    featured: false,
    button: true
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Pricing = () => {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          A more effective way to track progress
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with
          the set of free components for Framer.
        </p>
      </div>
      <div className="mt-16 grid  max-w-lg mx-auto grid-cols-1 gap-4 gap-y-6 sm:mt-20 lg:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-gray-900 text-white shadow-2xl"
                : "bg-white ring-1 ring-gray-900/10",
              "rounded-3xl p-10 sm:p-10",
              tier.height, // Apply the custom height for each card
              tier.position
            )}
          >
            {tier.featured && (
              <span className="absolute top-10 right-0 -mt-2 mr-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text px-3 py-1 text-sm rounded-lg">
               <div className="border-white/50">Most Popular</div>
                
              </span>
            )}
            <h3 id={tier.id} className="text-lg font-semibold">
              {tier.name}
            </h3>
            <p className="mt-4 text-5xl font-bold">
              {tier.priceMonthly} <span className="text-base font-normal">/month</span>
            </p>
            <a
              href={tier.href}
              className={classNames(
                tier.button
                  ? "mt-8 block bg-indigo-500 text-white rounded-md px-3.5 py-2.5 text-center"
                  : "mt-8 block text-indigo-600 ring-1 ring-indigo-200 rounded-md px-3.5 py-2.5 text-center hover:ring-indigo-300"
              )}
            >
              {tier.button ? "Sign up now" : "Get started for free"}
            </a>
            <ul className="mt-8 space-y-3 text-sm">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <IoMdCheckmark
                    className={classNames(
                      tier.featured ? "text-indigo-400" : "text-indigo-600",
                      "h-6 w-6 flex-none"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
