// @ts-ignore
const createTestCafe = require('testcafe');
// @ts-ignore
const fs = require('fs');
const path = require('path');
const { fork } = require('child_process');

const upload = require('./util/upload-file');

let testcafe;
let server;
const dir = path.join(__dirname, '../reports/screen-captures');
if (fs.existsSync(dir)) {
    fs.rmdirSync(dir, { recursive: true });
}
const start = Date.now().valueOf();
createTestCafe()
    .then(async (tc) => {
        testcafe = tc;
        await new Promise((resolve) => {
            process.env.NODE_ENV = "production"
            process.env.PORT = `${3000}`;
            server = fork('./.e2e/server.ts');
            server.on('message', () => {
                resolve(true);
            });
        });
        const runner = testcafe.createRunner();
        return runner
            .src([
              './.e2e/init.cafe.ts'
            ])
            .browsers(process.env.E2E_DEV ? ['chrome:headless'] : ['chrome:headless']) // always headless
            .run()
            .then((v) => {
                if (!v) {
                    return runner
                        .src(['./.e2e/cafe'])
                        .browsers(process.env.E2E_DEV ? ['chrome'] : ['chrome:headless'])
                        .concurrency(4)
                        .run();
                }
                return v;
            });
    })
    .then(async (v) => {
        // Upload files
        console.log(`Test failures ${v} in ${Date.now().valueOf() - start}ms`);
        if (fs.existsSync(dir) && !process.env.E2E_DEV) {
            try {
                const files = fs.readdirSync(dir);
                await Promise.all(files.map(f => upload(path.join(dir, f))));
            } catch (e) { console.log('error uploading files', e); }
        } else {
            console.log('No files to upload');
        }
        // Shut down server and testcafe
        server.kill('SIGINT');
        testcafe.close();
        process.exit(v);
    });
