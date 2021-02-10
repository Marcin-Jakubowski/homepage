import { put, takeLatest } from "redux-saga/effects";
import Axios from "axios";
import { initiateFetchAPI, setRepositories, setStatus } from "./PortfolioSlice";

export function* fetchReposData() {
    try {
        const response = yield Axios.get("https://api.github.com/users/Marcin-Jakubowski/repos");
        yield put(setRepositories(response.data));
        yield put(setStatus("success"));
    } catch (error) {
        yield put(setStatus("failed"));
    }
};

export function* fetchReposFromAPI() {
    yield takeLatest(initiateFetchAPI, fetchReposData);
};