import React, { useRef } from "react";
import { Contact } from "src/styled";
// import emailjs from "emailjs-com";

export default function ContactView(): JSX.Element {
  const ref: any = useRef();
  return (
    <Contact>
      <h2>Nous contacter</h2>
      <p>
        Vous pouvez nous contacter de plusieurs manières mais aussi nous suivre
        sur les réseaux sociaux
      </p>
      <div>
        <div>
          <div>
            <h4>Pages officielles</h4>
            <a href="http://www.polytech-reseau.org/">Polytech</a>
            <a href="http://www.polytech-lille.fr/">Polytech Lille</a>
          </div>
          <div>
            <h4>Nos Comptes</h4>
            <a href="https://www.facebook.com/Le.Studio.Lille.Polytech">
              Facebook
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="30px"
                height="30px"
              >
                {" "}
                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/le_studio_lille/?hl=fr">
              Instagram
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="30px"
                height="30px"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <form ref={ref} onSubmit={() => {}}>
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email" name="email" />
            <div>
              <textarea name="message" placeholder="Message" />
            </div>
          </form>
          <input type="submit" value="Send Message" onClick={() => {}} />
        </div>
      </div>
    </Contact>
  );
}
