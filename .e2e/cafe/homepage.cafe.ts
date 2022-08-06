import { waitForElementVisible } from "../util/helpers.cafe";
import {t} from 'testcafe'
fixture`Homepage Tests`
    .page`http://localhost:3000/`;

test('Submit a Form', async () => {
    await t.wait(6000)
    await waitForElementVisible("body")
});
