import { getNavLink } from './definition';

let _history = null;

const setHistory = history => { _history = history; };

const goBack = () => _history.goBack();
const goPage = (state, params) => _history.push(getNavLink(state, params));

export { setHistory, goBack, goPage };
