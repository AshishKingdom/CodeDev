const fetchContests = async ({ queryKey }) => {
  const flag = queryKey[1];
  const res = await fetch(`/api/contests/${flag}`);
  if (!res.ok) {
    throw new Error(`Could not fetch contests data with flag=${flag}`);
  }
  const data = await res.json();
  return data?.contests;
};

export default fetchContests;
