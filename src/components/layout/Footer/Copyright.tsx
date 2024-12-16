import React from 'react';

export default function Copyright() {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <p className="text-center text-gray-600">
        © {new Date().getFullYear()} SimpliMail. All rights reserved.
      </p>
    </div>
  );
}