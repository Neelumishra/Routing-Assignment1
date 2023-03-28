import React from 'react';
export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>About Us</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div>
          <img
            src="https://media.istockphoto.com/id/1347879996/photo/shot-of-a-young-woman-using-a-laptop-while-working-in-a-server-room.jpg?s=612x612&w=0&k=20&c=xe2m3QQoTVoPllIrEjq3fNYfa43reyO0A6my6N8EHbE="
            height="200px"
            width="200px"
          />
          <p>Age:25</p>
          <p>Location:Raipur</p>
        </div>
        <div style={{ margin: '10px' }}>
          <h1>Mat Simon</h1>
          <p>Write About Yourself 80- 30 words </p>
          <p>
            The About Us page of your <br/>website is an essential source of
            information for all who want to <br/>know more about your business. About
            Us pages are where you <br/> history, what is unique about
            your work, your company’s values, and<br/> who you serve. The design,
            written content, and visual or video<br/> elements together tell an
            important story <br/>about who you are and why you do it.
          </p>
        </div>
      </div>
    </div>
  );
}
