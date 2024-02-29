
import { formateDate } from '../../utils/formateDate';

const DoctorAbout = () => {
  return (
    <div>
    <div>
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 ">
        About of 
        <span className="text-irisBlueColor font-bold text-[24px] leading-9 ">
          Sinil Magar</span>
      </h3>
      <p className="text__para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam alias, iste adipisci labore laudantium numquam odio deleniti itaque quibusdam atque a, facilis autem minima veniam! Accusamus iure excepturi unde laborum. Quia necessitatibus adipisci explicabo, cum ut dolorem nisi architecto id voluptas nulla quas reprehenderit molestiae sint repellat provident quis cupiditate?
      </p>
    </div>

    <div className="mt-12">
       <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
        Education
        </h3>

       <ul className="pt-4  md:p-5">
        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
          <div>
            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
              {formateDate('10-05-2015')} - {formateDate('11-30-2019')}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              MBBS, MD </p>
           
          </div>
          <p className="text-[15px] leading-5 font-medium text-textColor">
              Om sai Hospital, Nanded, Maharastra,
          </p> 
        </li>
        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
          <div>
            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
              {formateDate('12-04-2019')} - {formateDate('02-04-2014')}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              MBBS, MD </p>
           
          </div>
          <p className="text-[14px] leading-5 font-medium text-textColor">
              Mgm Medical Hospitol, Nanded, Maharastra,</p> 
        </li>
       </ul>
    </div>

    <div className="mt-12">
       <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Experience
       </h3>

       <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
        <li className="p-4 rounded bg-[#fff9ea]">
          <span className="text-yellowColor text-[15px] leading-6 font-semibold">
            {formateDate('12-04-2019')} - {formateDate('02-04-2014')}
          </span>
          <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
          </p>
          <p className="text-[15px] leading-5 font-medium text-textColor">
              Om sai Hospital, Nanded, Maharastra,
            </p>
        </li>
        <li className="p-4 rounded bg-[#fff9ea]">
          <span className="text-yellowColor text-[15px] leading-6 font-semibold">
            {formateDate('12-04-2019')} - {formateDate('02-04-2014')}
          </span>
          <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
          </p>
          <p className="text-[15px] leading-5 font-medium text-textColor">
              Om sai Hospital, Nanded, Maharastra,
            </p>
        </li>
       </ul>


    </div>


    </div>
  );
};

export default DoctorAbout