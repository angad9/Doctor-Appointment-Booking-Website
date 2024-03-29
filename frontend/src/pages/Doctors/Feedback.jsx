
import React, { useState } from 'react';
import avatar from '../../assets/images/avatar-icon.png';
import { formateDate } from '../../utils/formateDate';
import { AiFillStar } from "react-icons/ai";
import FeedBackForm from './FeedBackForm';

const Feedback = () => {
  
  const [showFeedbackFrom, setShowFeedbackFrom] = useState(false)

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews (272)
        </h4>
      <div className="flex justify-between gap-10 mb-[30px]">
        <div className="flex gap-3">
          <figure className="w-10 h-10 rounded-full ">
            <img className="w-full" src={avatar} alt="" />
          </figure>
          <div>
            <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
              Angad Magar
            </h5>
            <p className="texxt-[14px] leading-6 text-textColor">
              {formateDate('02-14-2024')}
            </p>
            <p className="text__para mt-0 font-medium text-[15px]">
               Good services, Highly recommended 👍
            </p>
          </div>
        </div>
        
        <div className="flex gap-1">
          {[ ...Array(5).keys()].map((_,index)=> (
            <AiFillStar key={index} color='#0067FF' />
          ))}
        </div>
      </div>
      </div>

       {!showFeedbackFrom && <div className="text-center">
         <button className="btn" onClick={()=>setShowFeedbackFrom(true)}>Give Feedback</button>
       </div>}

       {showFeedbackFrom && <FeedBackForm/>}

    </div>
  );
};

export default Feedback;