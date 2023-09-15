import { useState } from 'react';
import Label from './Label';
import Input from './Input';

const OnlinePharmacyForm = () => {
  const [symptom, setSymptom] = useState<string>('');
  const [location, setLocation] = useState<string>('Lagos Island');
  const handleSubmit = () => {};

  return (
    <div className="bg-white text-black rounded-lg p-10 md:px-8 md:py-7 shadow-md my-5 md:my-0">
      <div className="text-xl/6 md:text-2xl/8 font-bold mb-2">
        Chat with a Pharmacist
      </div>
      <div className="text-base/5 md:text-xl/6 mb-7">
        All fields are required
      </div>
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="mr-7 flex flex-col justify-between">
          <Label label="Type a symptom or condition" />
          <Input
            placeholder="Severe Headache"
            name="symptom"
            type="text"
            value={symptom}
            changed={(e) => setSymptom(e.target.value)}
            classDef="mt-2"
          />
        </div>
        <div className="mr-7 flex flex-col justify-between">
          <Label label="Tell us a location" />
          <Input
            placeholder="Lagos Island"
            name="location"
            type="text"
            value={location}
            changed={(e) => setLocation(e.target.value)}
            classDef="mt-2"
          />
        </div>
        <div className="flex items-end">
          <div
            onClick={handleSubmit}
            className="flex justify-center md:justify-end items-center bg-deepBlue-100 rounded-lg md:h-0 text-white text-xs/5 xs:text-base/5  mdPro:text-xl/6 px-7 py-2 md:px-3 md:py-7 w-full md:w-auto"
          >
            Chat with a pharmacist
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlinePharmacyForm;
