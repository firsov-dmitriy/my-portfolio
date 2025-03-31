'use server';
import { IAchievementsProps } from '../model/types-props';
import { translateText } from '@/shared/api';

export const Achievements = async (props: IAchievementsProps) => {
  const { achievements, className } = props;
  return (
    <ul className={`ml-4 mt-2 list-disc ${className}`}>
      {achievements.map(async (item) => {
        if (!item.items?.length || item.items.length === 0) {
          return (
            <li className="text-base md:text-xl" key={item.name}>
              {await translateText(item.name)}
            </li>
          );
        }

        return (
          <div key={item.name}>
            <li className="text-base font-medium text-gray-800 md:text-xl">
              {await translateText(item.name)}
            </li>
            <ul className="ml-4 list-decimal text-base text-gray-700 md:text-xl">
              {item.items.map(async (item) => (
                <li key={item}>{await translateText(item)}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </ul>
  );
};
