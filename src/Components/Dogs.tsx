// Right now these dogs are constant, but in reality we should be getting these from our server
// Todo: Refactor to get rid of props (THERE SHOULD BE NO PROPS DRILLING ON THIS COMPONENT)

import { useDogsProvider } from '../providers/dogs.provider';
import { useSectionProvider } from '../providers/section.provider';
import { Dog } from '../types';
import { DogCard } from './DogCard';

export const Dogs = () => {
  const { dogList, isLoading, handleDeleteDog, handleFavoriteDogStatus } =
    useDogsProvider();
  const { activeSection } = useSectionProvider();
  const favoritedDogs = dogList.filter((dog) => dog.isFavorite);
  const unfavoritedDogs = dogList.filter((dog) => !dog.isFavorite);

  const dogsListObject: Record<string, Dog[]> = {
    all: dogList,
    favorited: favoritedDogs,
    unfavorited: unfavoritedDogs,
  };

  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      {dogsListObject[activeSection].map((dog) => (
        <DogCard
          key={dog.name}
          dog={dog}
          isLoading={isLoading}
          onHeartClick={handleFavoriteDogStatus}
          onTrashIconClick={handleDeleteDog}
        />
      ))}
    </>
  );
};
