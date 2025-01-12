import { addSelectedCategory } from '@/lib/features/products';
import { useAppDispatch } from '@/lib/hooks';
import { AppDispatch } from '@/lib/store';
import React, { useState } from 'react';

type RoundedCheckboxProps = {
  category: string;
}

const RoundedCheckbox = ({category}: RoundedCheckboxProps) => {
  const dispatch: AppDispatch = useAppDispatch()
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = () => {
    dispatch(addSelectedCategory({category}))
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="hidden"
      />
      <div
        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center transition-colors duration-300 ${
          isChecked ? 'border-p3green bg-p3greenLight' : 'border-gray-300 bg-text'
        }`}
      >
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-text"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <span className="text-text text-base font-semibold ml-3">{category}</span>
    </label>
  );
};

export default RoundedCheckbox;
