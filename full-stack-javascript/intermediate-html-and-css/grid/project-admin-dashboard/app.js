import { getImageUrl } from "./utils.js";

function Profile({
  name,
  imgId,
  imgWidth,
  imgHeight,
  imgAlt,
  profession,
  discovered,
  awardsList,
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imgId)}
        width={imgWidth}
        height={imgHeight}
        alt={imgAlt}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awardsList.split(",").length} </b>({awardsList})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Section
        name="Maria Skłodowska-Curie"
        imgId="szV5sdG"
        imgWidth="70"
        imgHeight="70"
        imgAlt="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovered="polonium (chemical element)"
        awardsList="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,Matteucci Medal"
      ></Section>

      <Section
        name="Katsuko Saruhashi"
        imgId="YfeOqp2"
        imgWidth="70"
        imgHeight="70"
        profession="geochemist"
        discovered="a method for measuring carbon dioxide in seawater"
        awardsList="Miyake Prize for geochemistry, Tanaka Prize"
      ></Section>
    </div>
  );
}
