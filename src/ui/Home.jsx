import CreateUser from "../components/user/CreateUser";
import { useAppContext } from "../context/AppProvider";
import Button from "./Button";

function Home() {
  const { username } = useAppContext();

  return (
    <div className="mx-4 my-10 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
