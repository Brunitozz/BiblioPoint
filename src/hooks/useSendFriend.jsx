import { useState } from "react";
import { sendFriendRequest } from "../services/friend_post_service";

const useSendFriendRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const executeSendFriendRequest = async (idApplicant, idReceiver) => {
    setLoading(true);
    setError(null);

    try {
      const data = await sendFriendRequest(idApplicant, idReceiver);
      setSuccess(true);
      return data;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { executeSendFriendRequest, loading, error, success };
};

export default useSendFriendRequest;
