import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./features/postSlice";
import PostSelfReducer from "./features/postSelfSlice";
import PostMysteryReducer from './features/postMysterySlice'
import PostPhilosophyReducer from "./features/postPhilosophy";
import PostHistoryReducer from './features/postHistorySlice'
import GenreReducer from './features/featuresGenre//listGenre'

export default configureStore({
  reducer: {
    post: PostReducer,
    postSelf : PostSelfReducer,
    postMystery: PostMysteryReducer,
    postPhilosophy: PostPhilosophyReducer,
    postHistory: PostHistoryReducer,
    genre: GenreReducer,


  },
});
