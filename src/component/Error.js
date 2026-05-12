import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = userRouteError();
  return (
    <div>
      <h1>404 Not Found. You wasted your time Nigga 😂 🤣</h1>
      <p>{err.statusText}</p>
      <p>{}err.status</p>
    </div>
  );
};

export default Error;
