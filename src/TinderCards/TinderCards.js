import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Ellon Musk",
      url:
        "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
    },
    {
      name: "Jeff Bezos",
      url:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455",
    },
    {
      name: "Ellen Degeneres",
      url:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879",
    },
    {
      name: "Amay Pradhan",
      url:
        "https://scontent.fktm7-1.fna.fbcdn.net/v/t1.0-9/35058326_2284189248258668_6672970579034767360_o.jpg?_nc_cat=100&ccb=2&_nc_sid=84a396&_nc_ohc=OhmeIKsKH3UAX_AFD4W&_nc_ht=scontent.fktm7-1.fna&oh=be17926c9939e40858aed7d00066f3c3&oe=5FBC1190",
    },
    {
      name: "Saksham Dangol",
      url:
        "https://scontent.fktm7-1.fna.fbcdn.net/v/t1.0-9/69015434_2758183310860748_235677134843019264_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=oeCR_Eq-pbEAX82vQ7W&_nc_ht=scontent.fktm7-1.fna&oh=050188409df27b565661578dfd235dd2&oe=5FBC2F46",
    },
    {
      name: "Aman Shakya",
      url:
        "https://scontent.fktm7-1.fna.fbcdn.net/v/t1.0-9/38246234_10155448352221987_1471534805827977216_o.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_ohc=zkx5z1CsHv4AX-Oulrp&_nc_ht=scontent.fktm7-1.fna&oh=d05f89efce64c1ef4bde6bf56683579b&oe=5FBE85E8",
    },
    {
      name: "Rajbin Man Singh",
      url:
        "https://scontent.fktm7-1.fna.fbcdn.net/v/t1.0-9/67668724_10157306936747492_7001437119348473856_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=xNTNAheqJTwAX8uyxVK&_nc_ht=scontent.fktm7-1.fna&oh=bbe401bd66c1339e40156cbf5c578166&oe=5FBC9EFF",
    },
    // {
    //   name: "Deepika Shikhrakar",
    //   url:
    //     "https://scontent.fktm7-1.fna.fbcdn.net/v/t1.0-9/67428010_2855805401156081_1994835867440513024_n.jpg?_nc_cat=102&ccb=2&_nc_sid=0debeb&_nc_ohc=BbTGE2bpHhMAX8g1hOF&_nc_ht=scontent.fktm7-1.fna&oh=002596c15c6e3421026bd2477b3f79de&oe=5FBC8A04",
    // },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
