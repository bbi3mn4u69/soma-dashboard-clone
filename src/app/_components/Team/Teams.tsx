'use client';
import { SinglePerson } from "./SinglePerson";
import { api } from "~/trpc/react";
import SinglePersonSkeleton from "./SinglePersonSkeleton";
const Teams = () => {
  const { data, isLoading } = api.teams.getAllTeam.useQuery();
  if (isLoading) {
    return (
      <div className=" mx-auto max-w-screen-lg px-6">
        <div className="grid grid-cols-5 gap-4">
          {[...Array(10)].map((_, i) => (
            <SinglePersonSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <>
      <div className=" mx-auto max-w-screen-lg px-6">
        <div className="grid grid-cols-5 gap-4">
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
