import React, { Component } from 'react';
import { Image, Button } from "react-bootstrap";
import "./AboutPage.css";
import Headshot from "../../images/cropped-headshot.jpg";

class AboutPage extends Component {
 
    render () {
        return (
        <main className="textMain container pb-5 mb-5"> 
           <h1 className="mt-4 whoIsHeader">
               Who is Alex Schwartz?
            </h1> 
            <Image className="headshotPhoto" src={Headshot} alt="Alex's Headshot" roundedCircle fluid />
            <div className="col-md-fill">
                <p 
                id="p1bio"
                className="ptext" 
                >Alex is a 26 year old Full Stack Web Developer from Atlanta, Georgia who recently graduated a Full-Stack bootcamp with Georgia Tech Professional Education and attended Google I/0 2019 in Mountain View, California. He is now actively seeking new employment opportunities as a Full-Stack JavaScript + React Web Developer. 
                </p>
                <br />
                <p 
                id="p2bio"
                className="ptext" 
                >Before embarking on his web development career, Alex made his mark on several other industries, and is looking to make a similar or greater impact in the world of web development. Coming out of High School, Alex was regarded as one of the best Halo 3 players in the nation and had drawn the attention of several professional players and teams. The next 18 months of his life were spent traveling the United States competing on the Major League Gaming Pro Circuit, complete with 2 Top 16 finishes, and a Top 8 finish.
                </p>
                <br />
                <p 
                id="p3bio"
                className="ptext" 
                >As the competitive scene for Halo 3 began to wind down in anticipation of the next release title, Alex hung up his controller and retired from his professional career. Determined to keep his legacy in e-Sports alive, Alex made the transition to the largest e-Sports title available at the time in Starcraft 2. Beginning as a content creator for an Indiana-based organization known as "Team Clash", Alex quickly made a name for himself in the industry and in a few short months would be billed as the owner for the New-York based "Clarity Gaming". One of the first North American teams to offer a training house in the United States, "Clarity Gaming" shortly became a household name in North American Starcraft 2.
                </p>
                <br />
                <p
                id="p4bio"
                className="ptext"
                >Following the decline of Starcraft 2 internationally, Alex transitioned into Dye-Sublimation digital printing. With a dedicated focus on technical knowledge and color management, Alex is now highly regarded as an expert in his field, having worked with international brand giants like Coca-Cola, Microsoft, Sony, and more, his portfolio of satisfied clients is as extensive as it is impressive. Despite this, Alex has now discovered that his true passions lie deeper in the technical realm, with more of a focus on why software works and how to improve it, rather than just pushing existing apps to their limit. Use this website (written by Alex in Javascript using Node and React) as a way to follow Alex's journey through web developement and life! Check back soon for more content including blog posts, video demos, and more!
                </p>
            </div>
            <Button className="redirectBtn" href="/log" variant="info">Visit the Guest Log</Button>
            <Button className="redirectBtn" href="/portfolio" variant="info">Check Out Alex's Portfolio</Button>
       </main>
        );
    };

};

export default AboutPage;