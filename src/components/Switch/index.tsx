import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function MyToggle() {
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <div className="flex justify-center items-center p-12">
      <div className="mx-auto w-full max-w-xs">
        <Switch.Group as="div" className="flex items-center space-x-4">
          <Switch.Label>Enable notifications</Switch.Label>
          <Switch
            as="button"
            checked={switchValue}
            onChange={setSwitchValue}
            className={`${
              switchValue ? 'bg-indigo-600' : 'bg-gray-200'
            } relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline`}
          >
            {({ checked }) => (
              <span
                className={`${
                  checked ? 'translate-x-5' : 'translate-x-0'
                } inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full`}
              />
            )}
          </Switch>
        </Switch.Group>
      </div>
    </div>
  );
}
