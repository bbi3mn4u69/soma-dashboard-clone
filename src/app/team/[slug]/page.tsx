"use client";
import NavBar from "~/app/_components/shared/NavBar";
import { Person } from "~/app/_components/Person/Person";
import { api } from "~/trpc/react";
import { notFound } from "next/navigation";
const Page = ({ params }: { params: { slug: string } }) => {
  const { data: personInfor, isLoading } = api.teams.getSinglePerson.useQuery(
    params.slug,
  );
  if (!isLoading && !personInfor) {
    return notFound();
  }
  return (
    <div>
      <NavBar></NavBar>
      {personInfor && (
        <Person
          personImage={`https://somacap.com/${personInfor.imageUrl}`}
          personName={personInfor.name}
          personPosition={personInfor.role}
          personBio={personInfor.bio}
        ></Person>
      )}
    </div>
  );
};

export default Page;
