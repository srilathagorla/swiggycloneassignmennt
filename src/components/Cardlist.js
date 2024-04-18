import { useSelector } from 'react-redux'
import Cards, { wowCard } from './Cards';
import useFetchResList from '../hooks/useFetchResList';




const Cardlist = () => {

  useFetchResList();
  const SpecialCard = wowCard(Cards)
  const res = useSelector((store) => store?.res?.resList);
  console.log(res)


  return (
    <div className='flex flex-wrap boarder border-gray-100 ' >
      {
        res?.map((data) => (
          data?.info?.avgRating >= 4.4
            ? <SpecialCard
              name={data?.info?.name}
              location={data?.info?.locality}
              image={data?.info?.cloudinaryImageId}
              id={data?.info?.id}
            />
            : <Cards
              name={data?.info?.name}
              location={data?.info?.locality}
              image={data?.info?.cloudinaryImageId}
              id={data?.info?.id}
            />

        )

        )
      }

    </div>
  )
}


export default Cardlist