import React, {useState} from "react";
import DatingCard from "react-dating-card";
import "./DatingCards.css";
//import axios from "./axios";

function DatingCards () {
    const [people] = useState([
        {
            name: "ben affleck",
            url:"https://www.hollywoodreporter.com/wp-content/uploads/2023/03/10fea_affleck_splash4-2023.jpg?w=2000&h=1126&crop=1",
        },
        {
            name:"gerard butler",
            url:"https://www.newyorkupstate.com/resizer/ahWDIvdeDgRFBVork5VXK4tdkfY=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/XVBGDL3FOZENNPXVIR6NNW5WRY.jpg",
        },
        {
            name: "jennifer lawrence",
            url:"https://media1.popsugar-assets.com/files/thumbor/f24SV83aQnTs0oyJZecR7GKBPY0/413x72:2216x1875/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/06/18/943/n/1922398/6c31632d5eebdeb9cb6252.86135421_/i/Jennifer-Lawrence.jpg",
        },
        {
            name: "Rege Jean",
            url: "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2OTAyMjQ5NTUxNjM1NzE1/rege-jean-page-girlfriend-rege-jean-page-dating.jpg",
        },
        {
            name: "Kristen Bell",
            url:"https://images.wsj.net/im-472320?width=1280&size=1",
        },
        {
            name:"Katherine Heigl",
            url:"https://akns-images.eonline.com/eol_images/Entire_Site/2021818/rs_1200x1200-210918144714-1200-katherine-heigl-greys-anatomy.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
        },
    
    ]);

    
    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };
    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className = "datingCards">
            <div className = "datingCards__cardContainer">
                {people.map((person) => (
                    <DatingCard
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
                    </DatingCard>
                ))}
            </div>
        </div>
    );
}

export default DatingCards;