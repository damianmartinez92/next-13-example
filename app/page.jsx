import Users from "@/components/Users";

async function fetchUser() {
  const res = await fetch("https://reqres.in/api/users");
  const { data } = await res.json();
  return data;
}

async function IndexPage() {
  const users = await fetchUser();

  return <Users users={users} />;
}

export default IndexPage;
