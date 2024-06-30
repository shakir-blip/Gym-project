import React from 'react';
import TrainerCard from './TrainerCard';
import trainer1 from '../assets/trainer1.png';
import trainer2 from '../assets/trainer2.png';
import trainer3 from '../assets/trainer3.png';
import trainer4 from '../assets/trainer4.png';
import trainer5 from '../assets/trainer5.png';
import trainer6 from '../assets/trainer6.png';
import trainer7 from '../assets/trainer7.png';
import trainer8 from '../assets/trainer8.png';


function Membership() {
  return (
    <div className='mt-[3rem]'>
      <div className="text-[4rem] text-white font-bold mt-[4rem] text-center mb-[4rem]">
        Trainer Staff 
      </div>

      <div className="flex justify-center gap-[1.5rem]">
        <TrainerCard
          name="Ivan Gladkikh"
          image={trainer1}
          instagram="https://instagram.com/ivangladkikh"
          twitter="https://twitter.com/ivangladkikh"
          youtube="https://youtube.com/Maxamed Qadar"
        />
        <TrainerCard
          name="Lyudmila Sabilo"
          image={trainer4}
          instagram="https://instagram.com/lyudmilasabilo"
          twitter="https://twitter.com/lyudmilasabilo"
          youtube="https://youtube.com/lyudmilasabilo"
        />
        <TrainerCard
          name="Evgeny Gurkov"
          image={trainer5}
          instagram="https://instagram.com/evgenygurkov"
          twitter="https://twitter.com/evgenygurkov"
          youtube="https://youtube.com/evgenygurkov"
        />
        <TrainerCard
          name="Victoria Shurpik"
          image={trainer2}
          instagram="https://instagram.com/victoriashurpik"
          twitter="https://twitter.com/victoriashurpik"
          youtube="https://youtube.com/victoriashurpik"
        />
      </div>

      <div className="flex justify-center gap-[1.5rem] mt-[3rem]">
        <TrainerCard
          name="Victor Ludkovich"
          image={trainer7}
          instagram="https://instagram.com/victorludkovich"
          twitter="https://twitter.com/victorludkovich"
          youtube="https://youtube.com/victorludkovich"
        />
        <TrainerCard
          name="Maria Masyak"
          image={trainer8}
          instagram="https://instagram.com/mariamasyak"
          twitter="https://twitter.com/mariamasyak"
          youtube="https://youtube.com/mariamasyak"
        />
        <TrainerCard
          name="Anatoly Prytytsky"
          image={trainer6}
          instagram="https://instagram.com/anatolyprytytsky"
          twitter="https://twitter.com/anatolyprytytsky"
          youtube="https://youtube.com/anatolyprytytsky"
        />
        <TrainerCard
          name="Maria Masyak"
          image={trainer3}
          instagram="https://instagram.com/mariamsyak2"
          twitter="https://twitter.com/mariamsyak2"
          youtube="https://youtube.com/mariamsyak2"
        />
      </div>
    </div>
  );
}

export default Membership;
