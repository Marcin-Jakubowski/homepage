import { put } from "redux-saga/effects";
import Axios from "axios";
import { setRepositories, setStatus } from "./PortfolioSlice";

export function* fetchReposFromAPI() {
    try {
        const response = yield Axios.get("https://api.github.com/users/Marcin-Jakubowski/repos");
        yield put(setRepositories(response.data));
        yield put(setStatus("success"));
    } catch (error) {
        yield put(setStatus("failed"));
    }
};