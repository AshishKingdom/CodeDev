const fetchContestProblem = async ({ queryKey }) => {
  const id = queryKey[1];
  const res = await fetch(`/api/contest/${id}`);
  if (!res.ok) {
    throw new Error(`Could not fetch problems with contest id=${id}`);
  }
  const data = await res.json();
  console.log(data);
  return data;
};

export default fetchContestProblem;
