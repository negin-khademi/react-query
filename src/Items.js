import SingleItem from './SingleItem';
import customFetch from './utils';
import { useQuery } from '@tanstack/react-query';

const Items = () => {
  const { isPending, data } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customFetch.get('/'),
  });
  if (isPending) {
    return <p style={{ marginTop: '1rem' }}>Loading ...</p>;
  }
  console.log(data.data.taskList);
  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
