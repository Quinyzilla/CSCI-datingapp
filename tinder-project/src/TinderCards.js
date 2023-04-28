import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards(){
    const [people, setPeople] = useState([
        {
            name: 'Ben Affleck',
            url: "https://www.hollywoodreporter.com/wp-content/uploads/2019/11/ben_affleck_credit_john_russo.jpg?w=1296&h=730&crop=1",
        },
        {
            name: 'Elon Musk',
            url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
        },
    ]);

const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
};
const outOfFrame = (name) => {
    console.log(name + " left the screen!");
};

    return (
        <div className = "tinderCards">
            <div className = "tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className = "swipe"
                        key = {person.name}
                        preventSwipe = {["up", "down"]}
                        onSwipe = {(dir) => swiped(dir, person.name)}
                        onCardLeftScreen = {() => outOfFrame(person.name)}
                    >
                        <div
                            style = {{ backgroundImage: `url(${person.url})`}}
                            className = "card"
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