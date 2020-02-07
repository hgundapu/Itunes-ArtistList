import { fetchWithDelay } from "./fetch";
const url = "https://itunes.apple.com/search?term=nagarjuna";

const fetchUsers = () => fetchWithDelay(url);

export const userAPI = {
  fetchUsers
};
