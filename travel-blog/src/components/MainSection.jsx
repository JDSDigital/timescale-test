import React from "react";
import headshot from "../images/headshot.jpg";

const MainSection = () => {
  return (
    <main className="main-section">
      <img src={headshot} alt="headshot" />
      <article>
        <h1>A little about me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium massa odio,
          ullamcorper porttitor enim fermentum sit amet. Integer aliquam, dolor id semper dapibus,
          erat sem laoreet odio, vitae ultrices ex quam vitae felis. Curabitur non volutpat quam, id
          elementum felis. In hac habitasse platea dictumst. Sed viverra et lacus et lobortis.
          Pellentesque tempor metus ipsum, facilisis dignissim mauris facilisis sed. Fusce id metus
          ex. Etiam sed enim nec massa rutrum imperdiet eget vitae velit. Quisque dignissim, justo
          sit amet semper blandit, lorem felis gravida erat, vel congue risus risus a erat. Donec
          viverra, orci sed pulvinar pellentesque, odio erat fringilla ligula, eget congue neque
          nulla eu nulla. Quisque lobortis viverra ante, sit amet varius tortor egestas vitae.
        </p>

        <p>
          Sed molestie nulla feugiat, ultrices erat ac, dapibus nisi. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Phasellus eu metus erat. Morbi nec nunc tincidunt, molestie
          justo et, porta purus. Donec magna orci, consequat sed magna at, finibus scelerisque
          lacus. Nunc eget dolor dolor. Vivamus sodales est lacus, ac rhoncus arcu sodales ac. In
          porttitor elementum quam. Integer et justo tincidunt, bibendum augue non, mattis augue.
          Aliquam faucibus, odio vel sodales hendrerit, dui nulla tempus mi, ac dignissim eros nisi
          sit amet tellus. Morbi tempor quis ante nec rutrum. Pellentesque vitae nunc massa. Duis
          eget vulputate nunc, sit amet tincidunt augue. Aenean eget lacus vitae arcu maximus
          dapibus in id ligula. Pellentesque eget leo varius, accumsan ante et, varius mi. Quisque
          ultrices aliquam bibendum.
        </p>

        <p>
          Donec vitae lectus in purus sodales congue eget a libero. Donec ut dolor tincidunt dui
          elementum rhoncus ut vitae dui. In vel magna dictum, pellentesque lorem a, hendrerit mi.
          Proin euismod laoreet congue. Fusce sit amet rutrum nisl, non viverra erat. Praesent diam
          ligula, efficitur et eros nec, vehicula vestibulum diam. Praesent sed nulla consectetur,
          bibendum erat ac, tincidunt libero.
        </p>

        <p>
          Morbi euismod leo sed sapien pharetra tristique lobortis a urna. Nunc pellentesque
          vestibulum nunc eget pretium. Mauris fringilla lacus at ipsum convallis rhoncus. Sed at
          congue purus. Vivamus tempor finibus dolor, mollis porta dui ultricies eget. Nullam tempor
          bibendum tellus, ut sollicitudin est vestibulum ut. Cras pellentesque faucibus velit at
          imperdiet. Mauris auctor justo scelerisque sem mattis varius. Maecenas sed turpis vitae
          massa finibus congue.
        </p>
      </article>
    </main>
  );
};

export default MainSection;
