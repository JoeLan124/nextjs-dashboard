import React from "react";

type Props = {};

const Parallax = (props: Props) => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-sea bg-no-repeat bg-fixed bg-cover">
        <h1>Parallax</h1>
      </div>

      <p className="bg-white">
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nisi illo, reprehenderit accusamus illum quae
        dolore id pariatur ipsam nesciunt ab incidunt a
        saepe facilis beatae qui, facere similique.
        Suscipit, ad? Sunt laboriosam unde nulla debitis
        velit dolor illo, tenetur animi eos fugiat quam
        deserunt inventore delectus! Et beatae numquam est,
        nobis a, nulla in, consectetur obcaecati ad dolores
        aliquid esse. Sit, consequuntur esse. Voluptatum
        minima, ratione asperiores provident consequatur,
        voluptate fuga, amet soluta architecto explicabo
        nostrum mollitia? Quo vitae officiis eligendi esse
        ea praesentium, obcaecati architecto excepturi illo
        quidem exercitationem. sci nam delectus! Esse
        consequuntur error vitae nobis facere. Earum libero
        provident vitae minima mollitia a eum laboriosam
        voluptates ipsam iste. Ex, sit aliquid! Asperiores
        optio modi incidunt dolores quasi laudantium sunt.
        Neque rerum eos voluptates adipisci dolores
        asperiores.
      </p>
      <div className="min-h-screen flex justify-center items-center bg-skyline bg-no-repeat bg-fixed bg-cover">
        <h1>Second View</h1>
      </div>
    </div>
  );
};

export default Parallax;
