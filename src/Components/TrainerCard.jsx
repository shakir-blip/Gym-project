import React from 'react';

const TrainerCard = ({ name, image, instagram, twitter, youtube }) => {
  return (
    <div className={`h-[448px] w-[275px] bg-[#222222] text-white font-bold rounded-[10px]`}>
      <div className='flex justify-center'>
        <img className='mt-[1rem]' src={image} alt={name} />
      </div>
      <p className='text-[26px] text-center my-[0.7rem]'>{name}</p>
      <div className='flex justify-center gap-[1.1rem] my-[0.7rem]'>
           <a href={instagram} target="_blank" rel="noopener noreferrer">
           <i className="fa-brands fa-instagram fa-1x border-2 border-white py-4 px-4 rounded-[50%]"></i>
           </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-twitter fa-1x border-2 border-white py-4 px-4 rounded-[50%]"></i>
        </a>
        <a href={youtube} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-youtube fa-1x border-2 border-white py-4 px-4 rounded-[50%]"></i>
        </a>
      </div>
    </div>
  );
};

export default TrainerCard;
