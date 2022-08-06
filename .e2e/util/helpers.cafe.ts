import { Selector, t } from 'testcafe';

export const byId = id => `[data-test="${id}"]`;

export const setText = async (selector, text) => {
    console.log(`Set text ${selector} : ${text}`);
    return t.selectText(selector)
        .pressKey('delete')
        .selectText(selector) // Prevents issue where input tabs out of focus
        .typeText(selector, `${text}`);
};

export const waitForElementVisible = async (selector) => {
    console.log(`Waiting element visible ${selector}`);
    return t.expect(Selector(selector).visible).ok();
};

export const waitForElementNotExist = async (selector) => {
    console.log(`Waiting element not visible ${selector}`);
    return t.expect(Selector(selector).exists).notOk('', { timeout: 10000 });
};

export const click = async (selector) => {
    await waitForElementVisible(selector);
    await t.expect(Selector(selector).hasAttribute('disabled')).notOk('ready for testing', { timeout: 5000 });
    await t.click(selector);
};

export default {};
