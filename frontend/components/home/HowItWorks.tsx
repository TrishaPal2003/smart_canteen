
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCommentDots } from "@fortawesome/free-solid-svg-icons"
import { faTags } from "@fortawesome/free-solid-svg-icons"

export default function HowItWorks() {
  return (
    <section className="mb-24 bg-[#b3f6dc] rounded-[3rem] p-8 md:p-16 max-w-7xl mx-auto">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-headline font-extrabold text-4xl mb-4">
          Smarter Dining in 3 Steps
        </h2>
        <p className="text-[#306554]">
          We've refined the process to respect your time and health.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Step 1 */}
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-surface-container-highest rounded-3xl flex items-center justify-center mx-auto">
            <FontAwesomeIcon
              icon={faMobileScreen}
              className="text-[#006944] text-4xl"
            />
            </div>
          <h3 className="font-bold text-xl">Order & Pay</h3>
          <p className="text-[#306554] px-4">
            Browse our editorial menu and pay securely from your mobile device.
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-surface-container-highest rounded-3xl flex items-center justify-center mx-auto">
            <FontAwesomeIcon
            icon={faCommentDots}
            className="text-[#006944] text-4xl"
          />
          </div>
          <h3 className="font-bold text-xl">Get Notified</h3>
          <p className="text-[#306554] px-4">
            Receive an SMS when your meal is ready for pick-up.
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-surface-container-highest rounded-3xl flex items-center justify-center mx-auto">
            <FontAwesomeIcon
            icon={faTags}
            className="bg-[#a9f1d6] text-[#006944] text-4xl"
          />
          </div>
          <h3 className="font-bold text-xl">Earn Points</h3>
          <p className="text-[#306554] px-4">
            Collect alchemy points and redeem free meals.
          </p>
        </div>

      </div>
    </section>
  );
}