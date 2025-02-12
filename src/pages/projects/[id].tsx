import { useParams } from 'next/navigation';
import { FNS } from '@/entities/ProjectCard/model/projectInfo';
import { Popover } from '@/shared/ui';

const Page = () => {
  const params = useParams<{ id: string }>();
  const { name, description, fullStack, team, results } = FNS;

  return (
    <div className="container">
      <div className="flex flex-col gap-y-4 bg-zinc-50 p-10 dark:bg-zinc-400">
        <h2 className="dark:text-gray-100 text-4xl font-bold">{name}</h2>
        <p className="dark:text-gray-200 text-xl">Описание : {description}</p>
        <div>
          <h3 className="text-2xl font-bold">Команда проекта</h3>
          <ul className="ml-4 list-disc">
            {team.map(({ name, count }) => (
              <li key={name}>
                {name} - {count}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Результат</h3>
          <ul className="ml-4 mt-2 list-disc">
            {results.map((item) => {
              if (!item.items?.length || item.items.length === 0) {
                return (
                  <li className="font-bold" key={item.name}>
                    {item.name}
                  </li>
                );
              }

              return (
                <div key={item.name}>
                  <li className="text-xl font-bold">{item.name}</li>
                  <ul className="ml-4 list-decimal">
                    {item.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Технический стек</h3>
          <div className="mt-2 flex flex-row gap-4">
            {fullStack.map((item) => (
              <Popover key={item.name} content={item.name} trigger="hover">
                <div className="rounded bg-zinc-200 p-2">{item.icon}</div>
              </Popover>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
