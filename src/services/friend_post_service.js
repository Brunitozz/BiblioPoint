import { api } from "../constants/api";
const api_send_friend_request = `${api}/send/friends/requests`;

export const sendFriendRequest = async (idApplicant, idReceiver) => {
  try {
    const response = await fetch(api_send_friend_request, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_applicant: idApplicant,
        id_receiver: idReceiver,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send friend request");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending friend request:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
