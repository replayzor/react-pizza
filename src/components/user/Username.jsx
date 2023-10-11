import { useAppContext } from "../../context/AppProvider";

function Username() {
  const { username } = useAppContext();

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}
export default Username;
