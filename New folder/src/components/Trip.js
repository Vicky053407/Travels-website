import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Popular Places</h1>
      <p>You can go with google maps</p>
      <div className="tripcard">
        <TripData
        img={Trip1}
        heading="Trip in PARIS"
        text="Paris Tourism
        Located in the north-central part of France on the river Seine, Paris is the country's cosmopolitan capital. The City of Love, as people call it, is said to be one of the most beautiful and romantic cities brimming with culture, art, fashion, food, and history. Home to some of the most popular iconic monuments and museums, Paris consists of a large part along the Seine designated as a UNESCO World Heritage Site.
        One of the most significant art repositories in the world, Paris harbors artistic lineage under Renoir, Rodin, Picasso, Monet, and Van Gogh. One of the greatest adobe of exceptional impressionist collections and the modern and contemporary art, the Louvre and several other small museums in the city showcase collections in every genre thinkable. Iconic wrought-iron spire of the Eiffel Tower, the Champs-Élysées,the Arc de Triomphe, the regal Notre Dame cathedral, lamp-lit bridges spanning the Seine, and art nouveau cafes spilling onto wicker-chair-lined terraces add to the scenic vibe of the city.
        The forefront of international brands, chic designer boutiques, vintage shops, flagship haute couture stores, and flea markets at every step of Paris - redefine style, elegance, and class. Tree-lined boulevards, prolific green parks, and the grand Seine, the city is often recognized and celebrated through its wine and cheese. Exquisite French cuisine, enticing patisseries and boulangeries (bakeries), luscious fromageries (cheese shops), and fragrant wine shops give Paris a phenomenal character.
        From taking a stroll through backstreets to watching the Eiffel tower all lit up, Paris caters to people of every age. People dancing their hearts out and singing their top notes along the river Seine gives Paris a laidback feel during evenings. A mix of architecture, art, culture, and music makes Paris a dream destination for many. "
        />

        <TripData
        img={Trip2}
        heading="Trip in AUSTRALIA"
        text="Great Barrier Reef Tourism
        The Great Barrier Reef doesn't really need much of an introduction. It is the single largest composition of living organisms in the world, and without a shadow of a doubt, nature's most revelled masterpiece.
        A vacation at the Great Barrier Reef will definitely be right up there with the best memories you'll have in the span of your life. Endless sea, a sprawling archipelago, and the unreal coral reef under the water just make for a mesmerising scene altogether. There is so much to do at the reef! You can cruise through the islands and the reef, dive underwater for an up close and personal tour of the amazing beauty of the coral, go on bushwalks on islands such as the Hayman, relax on beaches for hours on end, or even skydive over the Heart Reef, perhaps the most scenic dive spot in the world. You can stay in resorts on the islands, waking up to the unbelievable beauty around you, have a selection of amazing local food, and then get back to your day of exploring this absolute marvel of nature. Without a doubt, a trip to the Great Barrier Reef will give you memories to cherish for life."
        />

        <TripData
        img={Trip3}
        heading="Trip in MALDIVES"
        text="Maldives Tourism
        The Maldives is an archipelagic state situated in the Indian Ocean known for its luxurious water villas. A tropical haven of white sand beaches, the Maldives is located in the south of Sri Lanka and is ideal for an adventure, honeymoon, or leisure holiday.
        The Maldives is an archipelago of 1,192 coral islands grouped into natural atolls. However, only 200 islands are inhabited. Each resort generally occupies an entire atoll.
        Imagine having a room on a pier jutting out from the shore with a glass floor under which manta rays and reef sharks can be seen swimming, and step out from your overwater bungalow to the view of turquoise water.
        Comprising of 26 atolls (ring-shaped coral reef that encircles a lagoon), the Maldives is renowned for its incredible diving opportunities, Maldives' azure waters are home to diverse marine life and corals of distinct hues.
        The capital city of Male is both commercial and financial capital. Seat to the executive, legislature, and judiciary, this city has the most well-connected international airport. The history lovers will be satiated here, given Male houses several buildings and monuments of historical importance. Male is accessible by ferry boats from the international airport. Travel to other islands in the Maldives is also quite feasible from Male due to the excellent ferry and seaplanes connectivity, though it is quite expensive."
        />
      </div>
    </div>
  );
} 

export default Trip;  
  