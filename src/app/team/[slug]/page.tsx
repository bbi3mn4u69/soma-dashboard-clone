"use client";
import NavBar from "~/app/_components/shared/NavBar";
import { Person } from "~/app/_components/Person/Person";
import { api } from "~/trpc/react";
const Page = ({ params }: { params: { slug: string } }) => {
  const {data: personInfor} = api.teams.getSinglePerson.useQuery(params.slug);
    console.log(personInfor)
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
