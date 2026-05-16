import { createContext, useReducer } from "react";

const PostList = createContext({});

const PostListProvider = ({ children }) => {

    useReducer[PostList, dispatchPostList] = useReducer()
  return <PostList.Provider value={[]}>{children}</PostList.Provider>;
};
export default PostListProvider;
