
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Benefits() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 max-w-7xl mx-auto px-6 md:px-12">
      
      {/* LEFT BOX */}
      <div className="bg-[#006944] text-white p-12 rounded-[3rem] relative overflow-hidden flex flex-col justify-between">
        
        <div>
          <h3 className="font-headline font-extrabold text-3xl mb-6">
            For the Studious Mind
          </h3>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-[#7efdbe]"
            />
              Brain-fueling keto and vegan options
            </li>

            <li className="flex items-start gap-3">
              <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-[#7efdbe]"
            />
              Quiet pick-up zones near study halls
            </li>

            <li className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-[#7efdbe]"
              />
              Student-friendly pricing and loyalty tiers
            </li>
          </ul>
        </div>

        <button className="mt-10 bg-white text-[#006944] px-6 py-3 rounded-full font-bold w-fit">
          Student Portal
        </button>

        {/* glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* RIGHT BOX */}
      <div className="bg-[#b9ecd3] p-12 rounded-[3rem] flex flex-col justify-between">
        
        <div>
          <h3 className="font-headline font-extrabold text-3xl mb-6">
            For the Dedicated Staff
          </h3>

          <ul className="space-y-4 text-[#306554]">
            <li className="flex items-start gap-3">
              <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-[#006944]"
            />
              Priority scheduling during peak lunch hours
            </li>

            <li className="flex items-start gap-3">
              <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-[#006944]"
            />
              Corporate catering for department meetings
            </li>

            <li className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-[#006944]"
              />
              Nutritional tracking for wellness
            </li>
          </ul>
        </div>

        <button className="mt-10 bg-gradient-to-r from-[#006944] to-[#00A86B] text-white px-6 py-3 rounded-full font-bold w-fit">
          Staff Portal
        </button>
      </div>

    </section>
  );
}