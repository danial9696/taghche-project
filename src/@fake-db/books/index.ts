import { mock } from '../mock';
import { EVENTS } from './data.mock';

mock.onGet('/events').reply(() => [200, { data: EVENTS }]);
