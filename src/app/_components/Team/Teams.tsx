'use client';
import { SinglePerson } from "./SinglePerson";
import { api } from "~/trpc/react";
import SinglePersonSkeleton from "./SinglePersonSkeleton";
const Teams = () => {
  const { data, isLoading } = api.teams.getAllTeam.useQuery();
  if (isLoading) {
    return (
      <div className=" mx-auto max-w-screen-lg px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[...Array<number>(10)].map((_, i) => (
            <SinglePersonSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <>
      <div className=" mx-auto max-w-screen-lg sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4 gap-1">
          {data?.map((team) => (
            <SinglePerson
              key={team.id}
              personRoute={team.slug}
              personImage={`https://somacap.com/${team.imageUrl}`}
              personName={team.name}
              personPosition={team.role}
            />
          ))}
         
        </div>
      </div>
    </>
  );
};

export default Teams;
