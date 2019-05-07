import React, { Component } from 'react';

class AboutPage extends Component {
 
    render () {
        return (
        <main className="container pb-5 mb-5"> 
           <h1 className="mt-4">
               Who is Alex Schwartz?
            </h1> 
            <img src="#" className="col-md-2 rounded float-left img-thumbnail m-3" alt="Alex's Headshot" />
            <div className="col-md-fill">
                <p 
                id="p1bio"
                className="ptext" 
                >Alex is currently a 26 year old Full Stack Web Development student with Georgia Tech Professional Education. Based in Atlanta, Georgia, Alex is looking forward to seriously growing his skills as a web developer, beginning with his initial portfolio design. Currently, his biggest regret is not learning enough about Flexbox in CSS to properly style his NavBar. He plans to work on that a little bit more before jumping too far into Bootstrap.
                </p>
                <br />
                <p 
                id="p2bio"
                className="ptext" 
                >Before embarking on his journey to web development greatness, Alex has made his mark on several other industries he is sad to leave behind. Coming out of High School, Alex was regarded as one of the best Halo 3 players in the nation and had drawn the attention of several professional players and teams. The next 18 months of his life were spent traveling the United States competing on the Major League Gaming Pro Circuit, complete with 2 Top 16 finishes, and a Top 8 finish.
                </p>
                <br />
                <p 
                id="p3bio"
                className="ptext" 
                >As the competitive scene for Halo 3 began to wind down in anticipation of the next release title, Alex hung up his controller and retired from his professional career. Determined to keep his legacy in e-Sports alive, Alex made the transition to the largest e-Sports title available at the time in Starcraft 2. Beginning as a content creator for an Indiana-based organization known as "Team Clash", Alex quickly made a name for himself in the industry and in a few short months would be billed as the owner for the new New-York based "Clarity Gaming". One of the first North American teams to offer a training house in the United States, "Clarity Gaming" shortly became a household name in North American Starcraft 2.
                </p>
                <br />
                <p
                id="p4bio"
                className="ptext"
                >Following the decline of Starcraft 2 internationally, Alex transitioned into Dye-Sublimation digital printing. With a dedicated focus on technical knowledge and color management, Alex is now highly regarded as an expert in his field, having worked with international brand giants like Coca-cola, Microsoft, Sony, and more, his portfolio of satisfied clients is as extensive as it is impressive. Despite this, Alex has now discovered that his true passions lie deeper in the technical realm, with more of a focus on why software works and how to improve it, rather than just pushing existing apps to their limit. Contact Alex today through his contact page, and thanks for reading!
                </p>
            </div>
       </main>
        );
    };

};

export default AboutPage;