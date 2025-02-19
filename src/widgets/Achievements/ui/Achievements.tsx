import { IAchievementsProps } from '../model/types-props';

export const Achievements = async (props: IAchievementsProps) => {
  const { achievements, className } = props;
  return (
    <ul className={`ml-4 mt-2 list-disc ${className}`}>
      {achievements.map((item) => {
        if (!item.items?.length || item.items.length === 0) {
          return (
            <li className="font-bold" key={item.name}>
              {item.name}
            </li>
          );
        }

        return (
          <div key={item.name}>
            <li className="text-base font-medium text-gray-800 md:text-xl">{item.name}</li>
            <ul className="ml-4 list-decimal text-base text-gray-700 md:text-xl">
              {item.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </ul>
  );
};
