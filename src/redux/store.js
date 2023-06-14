import { configureStore } from "@reduxjs/toolkit";
import PostSelfReducer from "./features/featuresGenre/postSelfSlice";
import PostMysteryReducer from "./features/featuresGenre/postMysterySlice";
import PostPhilosophyReducer from "./features/featuresGenre/postPhilosophy";
import PostHistoryReducer from "./features/featuresGenre/postHistorySlice";
import GenreReducer from "./features/featuresGenre//listGenre";
import PostProgrammingReducer from "./features/featuresGenre/postProgramming";
import ProgrammingDetailReducer from "../redux/features/featuresDetail/programmingDetailSlice";
import MysteryDetailReducer from "../redux/features/featuresDetail/mysteryDetailSlice";
import PhilosophyDetailReducer from "../redux/features/featuresDetail/philosophyDetailSlice";
import SelfImprovementReducer from "../redux/features/featuresDetail/selfImprovementDetailSlice";
import HistoryDetailReducer from "../redux/features/featuresDetail/historyDetailSlice";

export default configureStore({
  reducer: {
    postSelf: PostSelfReducer,
    postMystery: PostMysteryReducer,
    postPhilosophy: PostPhilosophyReducer,
    postHistory: PostHistoryReducer,
    genre: GenreReducer,
    postProgramming: PostProgrammingReducer,
    programmingDetail: ProgrammingDetailReducer,
    mysteryDetail: MysteryDetailReducer,
    philosophyDetail: PhilosophyDetailReducer,
    selfImprovementDetail: SelfImprovementReducer,
    historyDetail: HistoryDetailReducer,
  },
});
