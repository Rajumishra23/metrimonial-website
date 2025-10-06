import React from "react";

function Membership() {
  const plans = [
    {
      title: "Basic",
      price: "Free",
      benefits: [
        "Create Profile",
        "Browse Limited Matches",
        "Send 5 Messages / Month",
      ],
      popular: false,
    },
    {
      title: "Premium",
      price: "$29/month",
      benefits: [
        "Unlimited Matches",
        "Send Unlimited Messages",
        "Profile Highlighting",
        "24x7 Support",
      ],
      popular: true, // highlight this plan
    },
    {
      title: "VIP",
      price: "$49/month",
      benefits: [
        "All Premium Features",
        "Personal Matchmaker",
        "Priority Support",
        "Featured on Homepage",
      ],
      popular: false,
    },
  ];

  return (
    <section className="bg-pink-50 py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Membership Plans</h2>
          <p className="text-gray-700 text-lg">
            Choose a plan that suits your needs and start finding your perfect match today.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 ${
                plan.popular ? "border-4 border-pink-600" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-pink-600 mb-4">{plan.title}</h3>
              <p className="text-gray-800 text-xl font-semibold mb-6">{plan.price}</p>
              
              <ul className="mb-6 space-y-3 text-gray-600 text-sm">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-pink-600 rounded-full inline-block"></span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href="/membership"
                className="px-6 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition"
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Membership;
