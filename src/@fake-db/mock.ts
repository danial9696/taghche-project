import MockAdapter from 'axios-mock-adapter';
import { apiService } from 'src/api/service';

export const mock = new MockAdapter(apiService, { delayResponse: 1000 });
