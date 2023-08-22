import { useQuery } from "@tanstack/react-query";

import { queryClient } from "../app/provider";

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const queryKey = "posts";

export function usePosts() {
  const { data: posts } = useQuery<Post[]>({
    queryKey: [queryKey],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
        console.log("im call");
        return res.json();
      }),
  });

  return { posts };
}
usePosts.prototype.invalid = () => {
  console.log("refetch!!");

  queryClient.invalidateQueries([queryKey]);
};
