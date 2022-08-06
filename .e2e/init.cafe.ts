import { t } from 'testcafe';
import {

} from './util/helpers.cafe';

require('dotenv').config();

const url = "http://localhost:"+process.env.PORT

fixture`Initialise`
    .before(async () => {
        console.log("any teardown")
    })
    .page`${url}`;


test('[Initialise]', async () => {

});
