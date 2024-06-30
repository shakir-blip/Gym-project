import React from 'react';
import time from '../assets/time.png';
import Card from './Card';

function Membership() {
  const features1 = [
    ["Visit without restrictions", "24/7 a month"],
    ["The trainer on duty will", "introduce you to the gym"],
    ["Access to the VTRAINER", "application"],
    ["Trainer support"]
  ];

  const features2 = [
    ["Visit without restrictions", "24/7"],
    ["Individual training ", " program"],
    ["Access to the VTRAINER ", "application"],
    ["Trainer support"]
  ];

  const features3 = [
    ["The entrance time to the ", "gym is from 14:00 to 16:00"],
    ["Without suspension of ", "gym membership"],
    ["The trainer on duty will ", "introduce you to the gym"],
    ["Trainer support"]

  ];

  const features4 = [
    ["Visit without restrictions", "24/7"],
    ["Without suspension of ", "gym membership"],
    ["The trainer on duty will ", "introduce you to the gym"],
    ["Trainer support"]    
  ];

  const features5 = [
    ["Training in mini-groups ", "until 14:00"],
    ["Without suspension of ", "gym membership"],
    ["Classes with a trainer in ", "a mini-group 3 times a week"],
    ["24/7 customer support"]
  ];

  const features6 = [
    ["Training in mini-groups ", "until 17:00"],
    ["Without suspension of ", "gym membership"],
    ["Private locker ","room access"],
    ["Dedicated fitness concierge"]
  ];

  return (
    <div className='mt-[7rem]'>
      <div className="text-[4rem] text-white font-bold mt-[4rem] text-center mb-[4rem]">
        Gym Membership
      </div>

      <div className="flex justify-center space-x-8">
        <Card
          title="Pass ‘Trial’"
          price="$0"
          features={features1}
          buttonText="Buy"
          icon={time}
        />
        <Card
          title="Basic Membership"
          price="$50/month"
          features={features2}
          buttonText="Buy"
          icon={time}
        />
        <Card
          title="Premium Membership"
          price="$100/month"
          features={features3}
          buttonText="Buy"
          icon={time}
        />
      </div>

      <div className="flex justify-center space-x-8 mt-[3rem]">
        <Card
          title="Elite Membership"
          price="$80/month"
          features={features4}
          buttonText="Buy"
          icon={time}
        />
        <Card
          title="Family Membership"
          price="$100/month"
          features={features5}
          buttonText="Buy"
          icon={time}
        />
        <Card
          title="Corporate Membership"
          price="$200/month"
          features={features6}
          buttonText="Buy"
          icon={time}
        />
      </div>
    </div>
  );
}

export default Membership;
