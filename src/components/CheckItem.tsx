import React from 'react';

interface CheckItemProps {
  text: string;
}

export function CheckItem({ text }: CheckItemProps) {
  return (
    <li className="flex items-center">
      <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
        <span className="text-blue-600">✓</span>
      </span>
      {text}
    </li>
  );
}