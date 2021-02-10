import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { fetchReposFromAPI } from "./PortfolioSaga";
import portfolioSlice from "./PortfolioSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        portfolio: portfolioSlice
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(fetchReposFromAPI);

export default store;