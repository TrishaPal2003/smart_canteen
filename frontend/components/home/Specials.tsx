
import { faGift} from "@fortawesome/free-solid-svg-icons"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Specials() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
      
      {/* HEADER */}
      <div className="flex justify-between mb-10">
        <div>
          <h2 className="text-4xl font-extrabold">Today's Specials</h2>
          <p className="text-[#306554]">Seasonal chef picks</p>
        </div>

        <button className="text-[#006944] font-bold flex items-center gap-1">
        See All
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* BIG CARD */}
        <div className="md:col-span-2 bg-white rounded-3xl overflow-hidden shadow">
          <img
            src="/images/halim.webp"
            className="h-80 w-full object-cover"
          />

          <div className="p-6 flex justify-between items-center">
            <div>
              <p className="text-[#a83206] font-bold">50 TK • 420 kcal</p>
              <h3 className="text-2xl font-bold">
                HALIM
              </h3>
            </div>

            <button className="bg-[#006944] text-white p-4 rounded-full">
              <FontAwesomeIcon
              icon={faCartPlus}
              className="text-white"
            />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - SECONDARY SPECIALS */}
        <div className="space-y-8">

          {/* ITEM 1 */}
          <div className="bg-[#b3f6dc] p-6 rounded-3xl flex items-center gap-4 hover:bg-[#a9f1d6] transition-colors">
            
            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
              <img
                src="https://static.toiimg.com/thumb/83740315.cms?imgsize=361903&width=800&height=800"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h4 className="font-bold">Sandwich</h4>
              <span className="text-[#a83206] font-bold text-sm">
                40 TK
              </span>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="bg-[#b3f6dc] p-6 rounded-3xl flex items-center gap-4 hover:bg-[#a9f1d6] transition-colors">

            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
              <img
                src="https://www.bdgift.com/pp/iftar/somucha_s.jpg"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h4 className="font-bold">Chomocha</h4>
              <span className="text-[#a83206] font-bold text-sm">
                10 TK
              </span>
            </div>
          </div>

          {/* MYSTERY BOX */}
          <div className="bg-[#70b5ff]/20 p-8 rounded-3xl border-2 border-dashed border-[#70b5ff]/30 flex flex-col justify-center items-center text-center hover:bg-[#70b5ff]/30 transition-colors">

            <FontAwesomeIcon
            icon={faGift}
            className="text-[#005e9f] text-4xl mb-4"
          />

            <h4 className="font-bold">Mystery Box</h4>
            <p className="text-sm text-[#306554]">
              Surprise meal at a fixed price
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}