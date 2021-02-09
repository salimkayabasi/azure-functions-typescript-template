import helloWorld from '../index';

const {
  runStubFunctionFromBindings,
  createHttpTrigger,
} = require('stub-azure-function-context');

const makeRequest = async (body: Record<string, unknown> = {}) => {
  const data = createHttpTrigger('POST', 'http://example.com', {}, {}, body);
  return await runStubFunctionFromBindings(
    helloWorld,
    [
      {
        type: 'httpTrigger',
        name: 'req',
        direction: 'in',
        data,
      },
      { type: 'http', name: 'res', direction: 'out' },
    ],
    new Date(),
  );
};

describe('Functions', function () {
  test('helloWorld w/ body', async () => {
    const context = await makeRequest({ name: 'test-name' });
    expect(context).toHaveProperty('res.body', 'HELLO FROM TEST-NAME!');
  });
  test('helloWorld w/o body', async () => {
    const context = await makeRequest();
    expect(context).toHaveProperty('res.body', 'HELLO FROM A FRIEND!');
  });
});
