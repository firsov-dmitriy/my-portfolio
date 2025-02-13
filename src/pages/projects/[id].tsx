import { useParams } from 'next/navigation';
import { FNS } from '@/entities/ProjectCard/model/projectInfo';
import { Popover } from '@/shared/ui';

const Page = () => {
  const params = useParams<{ id: string }>();
  const { name, description, fullStack, team, results } = FNS;

  return (
    <div className="container">
      <div className="flex flex-col gap-y-4 bg-zinc-50 p-10 dark:bg-zinc-400">
        <div className="rounded bg-zinc-100 p-4 shadow dark:bg-zinc-200">
          <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">{name}</h2>
          <h3 className="mt-2 text-base font-bold md:text-xl">Описание</h3>
          <p className="text-base text-gray-700 md:text-xl">{description}</p>
        </div>

        <div className="rounded bg-zinc-100 p-4 shadow dark:bg-zinc-200">
          <h3 className="text-base font-bold md:text-xl">Команда проекта</h3>
          <ul className="ml-4 list-disc text-base text-gray-700 md:text-xl">
            {team.map(({ name, count }) => (
              <li key={name}>
                {name} - {count}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded bg-zinc-100 p-4 shadow dark:bg-zinc-200">
          <h3 className="text-base font-bold md:text-xl">Результат</h3>
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
        </div>

        <div className="rounded bg-zinc-100 p-4 shadow dark:bg-zinc-200">
          <h3 className="text-xl font-bold">Технический стек</h3>
          <div className="mt-2 flex flex-row flex-wrap gap-4 md:flex-nowrap">
            {fullStack.map((item) => (
              <Popover key={item.name} content={item.name} trigger="hover">
                <div className="rounded bg-zinc-200 p-2 dark:bg-zinc-100">{item.icon}</div>
              </Popover>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
