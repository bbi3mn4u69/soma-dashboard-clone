const getGreetingTime = (date: Date) => {
  const hour = date.getHours();
  if (hour < 12) return "Morning";
  if (hour < 18) return "Afternoon";
  return "Evening";
};

const Greeting = () => {
  const currentTime = new Date();
  const greetingTime = getGreetingTime(currentTime);

  return (
    <>
      <div className="flex flex-col p-7">
        <div className="text-2xl font-semibold">Good {greetingTime}, Team!</div>
        <div className="text-sm text-gray-500">Here is what happening with the platform today</div>
      </div>
    </>
  );
};

export default Greeting;
