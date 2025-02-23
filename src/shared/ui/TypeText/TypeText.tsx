'use client';

import React, { useState, useEffect } from 'react';
import { ITypeTextProps } from '@/shared/ui/TypeText/types';
import { getDynamicSpeed } from '@/shared/model';

export const TypeText = (props: ITypeTextProps) => {
  const { text, speed } = props;
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    } else {
      setShowCursor(false);
    }
  }, [index, text.length]);

  useEffect(() => {
    if (index < text.length) {
      setTimeout(() => {
        setCurrentText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, getDynamicSpeed(speed));
    }
  }, [index, text, speed]);

  return (
    <div className="rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-lg">
      <pre className="font-mono whitespace-pre-wrap text-lg text-green-400">
        {currentText}
        <span
          className={`${showCursor ? 'opacity-100' : 'opacity-0'} bg-green-400 text-gray-800 transition-opacity duration-200`}
        >
          |
        </span>
      </pre>
    </div>
  );
};
